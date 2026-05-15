// Temporary helper to set up Google Search Console for the site.
// Actions: "token" (get META token), "verify" (verify ownership), "add" (add site to GSC).
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SITE = "https://cristian-tumani-portfolio.lovable.app/";
const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const GSC_KEY = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!LOVABLE_API_KEY || !GSC_KEY) {
    return new Response(JSON.stringify({ error: "missing keys" }), { status: 500, headers: corsHeaders });
  }

  const headers = {
    Authorization: `Bearer ${LOVABLE_API_KEY}`,
    "X-Connection-Api-Key": GSC_KEY,
    "Content-Type": "application/json",
  };

  const { action } = await req.json().catch(() => ({ action: "token" }));

  let url = "", method = "POST", body: string | undefined;
  if (action === "token") {
    url = `${GATEWAY}/siteVerification/v1/token`;
    body = JSON.stringify({ site: { identifier: SITE, type: "SITE" }, verificationMethod: "META" });
  } else if (action === "verify") {
    url = `${GATEWAY}/siteVerification/v1/webResource?verificationMethod=META`;
    body = JSON.stringify({ site: { identifier: SITE, type: "SITE" } });
  } else if (action === "add") {
    url = `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(SITE)}`;
    method = "PUT";
  } else if (action === "submit-sitemap") {
    const sitemap = `${SITE}sitemap.xml`;
    url = `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps/${encodeURIComponent(sitemap)}`;
    method = "PUT";
  } else {
    return new Response(JSON.stringify({ error: "unknown action" }), { status: 400, headers: corsHeaders });
  }

  const res = await fetch(url, { method, headers, body });
  const text = await res.text();
  return new Response(JSON.stringify({ status: res.status, body: text }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
