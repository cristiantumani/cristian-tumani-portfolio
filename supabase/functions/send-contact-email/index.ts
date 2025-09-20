
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

    // Send all email data to N8N webhook for processing
    const webhookUrl = Deno.env.get("N8N_NOTIFICATION_WEBHOOK_URL");
    
    if (!webhookUrl) {
      console.error("N8N_NOTIFICATION_WEBHOOK_URL not configured");
      // If no webhook URL, still return success but log the issue
      console.log("No N8N webhook configured, but form submission recorded");
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Contact form submitted successfully",
          note: "Email notifications may not be sent - webhook not configured"
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    console.log("Sending contact form data to N8N webhook:", webhookUrl);
    
    const payload = {
      // Form data
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      
      // Email configuration
      emails: {
        // Notification email to Cristian
        notification: {
          to: "cristiantumani@gmail.com",
          subject: `New Contact Form Submission: ${subject}`,
          type: "notification"
        },
        // Confirmation email to sender
        confirmation: {
          to: email,
          subject: "Thank you for reaching out!",
          type: "confirmation"
        }
      }
    };
    
    console.log("Payload being sent to N8N:", JSON.stringify(payload, null, 2));
    
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("N8N webhook response status:", webhookResponse.status);

      if (!webhookResponse.ok) {
        const errorBody = await webhookResponse.text();
        console.error("N8N webhook error response:", errorBody);
        // Don't fail the whole function if webhook fails - just log it
        console.log("Webhook failed but form submission recorded");
      } else {
        const webhookResult = await webhookResponse.text();
        console.log("N8N webhook success response:", webhookResult);
      }
    } catch (webhookError: any) {
      console.error("N8N webhook error (non-critical):", webhookError.message);
      // Don't fail the whole function if webhook fails
    }

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
