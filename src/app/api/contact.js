// src/pages/api/contact.js
"use strict";

const sendEmail = async ({ name, email, message }) => {
  // Implement your email sending logic here
  // For example, you can use a third-party service like Nodemailer or an email API

  console.log(`Email sent from ${name} (${email}): ${message}`);
  // In a real-world scenario, you would send an email using an appropriate service

  return true; // Assuming email sending was successful
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // Perform any necessary validation on name, email, and message here

      // Send email
      const emailSent = await sendEmail({ name, email, message });

      if (emailSent) {
        return res.status(200).json({ success: true });
      } else {
        return res
          .status(500)
          .json({ success: false, error: "Failed to send email" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res
        .status(500)
        .json({ success: false, error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
