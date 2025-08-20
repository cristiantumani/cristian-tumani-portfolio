
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log(`Received ${req.method} request to send-contact-email function`);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    console.log(`Method ${req.method} not allowed`);
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const requestBody = await req.text();
    console.log("Request body received:", requestBody);
    
    const { name, email, subject, message }: ContactFormData = JSON.parse(requestBody);

    console.log("Processing contact form submission:", {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check if N8N webhook URL is available
    const webhookUrl = Deno.env.get("N8N_NOTIFICATION_WEBHOOK_URL");
    if (!webhookUrl) {
      console.error("N8N_NOTIFICATION_WEBHOOK_URL environment variable is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending notification to n8n webhook:", webhookUrl);
    
    // Send notification to n8n webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
        to: "cristiantumani@gmail.com"
      }),
    });

    console.log("Webhook response status:", webhookResponse.status);
    console.log("Webhook response headers:", Object.fromEntries(webhookResponse.headers));

    if (!webhookResponse.ok) {
      const errorBody = await webhookResponse.text();
      console.error("n8n webhook error response:", errorBody);
      throw new Error(`n8n webhook failed with status: ${webhookResponse.status} - ${errorBody}`);
    }

    const webhookResult = await webhookResponse.text();
    console.log("n8n webhook response:", webhookResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email",
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
