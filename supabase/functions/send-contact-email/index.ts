
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    console.log("Sending emails using Resend...");

    // Send confirmation email to the form submitter
    const confirmationEmail = await resend.emails.send({
      from: "Cristian Tumani <noreply@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; margin-bottom: 20px;">Thank you for your message, ${name}!</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            I've received your message and will get back to you as soon as possible. Here's a copy of what you sent:
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; color: #555; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-top: 20px;">
            Best regards,<br>
            <strong>Cristian Tumani</strong><br>
            Product Manager & Strategy Consultant
          </p>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    // Send notification email to Cristian
    const notificationEmail = await resend.emails.send({
      from: "Contact Form <noreply@resend.dev>",
      to: ["cristiantumani@gmail.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 0 0 10px 0;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; color: #555; white-space: pre-wrap; padding: 10px; background-color: #fff; border-radius: 4px;">${message}</p>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            You can reply directly to <a href="mailto:${email}" style="color: #007bff;">${email}</a> to respond to this inquiry.
          </p>
        </div>
      `,
      replyTo: email,
    });

    console.log("Notification email sent:", notificationEmail);

    // Also send to N8N webhook if needed
    const webhookUrl = Deno.env.get("N8N_NOTIFICATION_WEBHOOK_URL");
    if (webhookUrl) {
      console.log("Sending notification to n8n webhook:", webhookUrl);
      
      const payload = {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
        to: "cristiantumani@gmail.com"
      };
      
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        console.log("Webhook response status:", webhookResponse.status);
        if (webhookResponse.ok) {
          const webhookResult = await webhookResponse.text();
          console.log("n8n webhook success response:", webhookResult);
        }
      } catch (webhookError) {
        console.error("N8N webhook error (non-critical):", webhookError);
        // Don't fail the whole function if webhook fails
      }
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
