// src/routes/api/send-email.js
import sgMail from '@sendgrid/mail';

// Load SendGrid API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * POST /api/send-email
 * Handles sending email using SendGrid
 */
export async function post({ request }) {
    try {
        const { name, email, message } = await request.json();

        const msg = {
            to: 'weverson@wmamedio.com', // Change to your recipient
            from: 'weverson@wmamedio.com', // Change to your verified sender
            subject: `New message from ${name}`,
            text: message,
            html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
        };

        await sgMail.send(msg);

        return {
            status: 200,
            body: {
                message: 'Email sent successfully'
            }
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            status: 500,
            body: {
                error: 'Failed to send email'
            }
        };
    }
}