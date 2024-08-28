// src/routes/api/send-email/+server.js
import { json } from '@sveltejs/kit';

// Load SendGrid API key from environment variable
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export async function POST({ request }) {
    try {
        const { name, email, message } = await request.json();

        const msg = {
            personalizations: [
                {
                    to: [{ email: 'weverson@wmamedio.com' }], // Change to your recipient
                    subject: `New message from ${name}`
                }
            ],
            from: { email: 'weverson@wmamedio.com' }, // Change to your verified sender
            content: [
                {
                    type: 'text/plain',
                    value: message
                },
                {
                    type: 'text/html',
                    value: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`
                }
            ]
        };

        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${SENDGRID_API_KEY}`
            },
            body: JSON.stringify(msg)
        });

        if (response.ok) {
            return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
        } else {
            const error = await response.json();
            console.error('Error sending email:', error);
            return new Response(JSON.stringify({ error: 'Failed to send email', details: error }), { status: 500 });
        }
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), { status: 500 });
    }
}




