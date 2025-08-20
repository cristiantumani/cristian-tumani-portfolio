
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
    const webhookUrl = Deno.env.get("N8N_NOTIFICATION_WEBHOOK_URL") || "https://cristiantumani.app.n8n.cloud/webhook/3f8ca679-e0bd-406a-a299-8f5ceb253d45";
    
    console.log("Using webhook URL:", webhookUrl);

    console.log("Sending notification to n8n webhook:", webhookUrl);
    
    const payload = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      to: "cristiantumani@gmail.com"
    };
    
    console.log("Payload being sent:", JSON.stringify(payload));
    
    // Send notification to n8n webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Webhook response status:", webhookResponse.status);

    if (!webhookResponse.ok) {
      const errorBody = await webhookResponse.text();
      console.error("n8n webhook error response:", errorBody);
      throw new Error(`n8n webhook failed with status: ${webhookResponse.status} - ${errorBody}`);
    }

    const webhookResult = await webhookResponse.text();
    console.log("n8n webhook success response:", webhookResult);

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
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email",
        details: error.message,
        type: error.name
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
