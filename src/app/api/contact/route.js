// Import the necessary modules and configurations
import emailjs from "emailjs-com";

// Define your EmailJS service ID and template ID
const EMAILJS_SERVICE_ID = "service_xgqzzga";
const EMAILJS_TEMPLATE_ID = "template_w16dujw";

// Define the handler function for POST requests
export async function POST(request, complete) {
  try {
    // Extract the data from the request body
    const { name, email, subject, message } = await request.json();

    // Ensure all required fields are present
    if (!name || !email || !subject || !message) {
      return complete.json(
        { error: "Invalid request. Required fields are missing." },
        { status: 400 }
      );
    }

    // Send the email using EmailJS
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: name,
      from_email: email,
      message,
    });

    // Return a success response
    return complete.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    // Return an error response if sending email fails
    return complete.error(
      { error: "Internal Server Error. Failed to send email." },
      { status: 500 }
    );
  }
}
