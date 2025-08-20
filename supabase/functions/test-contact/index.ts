import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  console.log(`Test function received ${req.method} request`);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log("Test function received data:", body);

    // Test the actual n8n webhook call with hardcoded URL
    const webhookUrl = "https://cristiantumani.app.n8n.cloud/webhook/3f8ca679-e0bd-406a-a299-8f5ceb253d45";
    
    console.log("Calling n8n webhook:", webhookUrl);
    
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name || "Test Name",
        email: body.email || "test@example.com",
        subject: body.subject || "Test Subject", 
        message: body.message || "Test Message",
        timestamp: new Date().toISOString(),
        to: "cristiantumani@gmail.com"
      }),
    });

    console.log("Webhook response status:", webhookResponse.status);
    
    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error("Webhook error:", errorText);
      throw new Error(`Webhook failed: ${webhookResponse.status} - ${errorText}`);
    }

    const result = await webhookResponse.text();
    console.log("Webhook success:", result);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Test successful",
        webhookStatus: webhookResponse.status,
        webhookResult: result
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Test function error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Test failed", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);