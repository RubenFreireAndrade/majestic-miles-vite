addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    if (request.method === 'POST') {
        const body = await request.text();
        // Parse the request body or use it as needed

        // Send email using SendGrid
        const sendgridResponse = await sendEmail(body);

        // Modify the response based on the SendGrid response
        const response = new Response(`Email sent: ${JSON.stringify(sendgridResponse)}`, {
            headers: {'Content-Type': 'text/plain'},
        });

        return response;
    } else {
        // For other request methods (GET, etc.), handle accordingly
        const url = new URL(request.url);
        const response = new Response(`Hello, the requested URL is: ${url.href}`, {
            headers: {'Content-Type': 'text/plain'},
        });

        return response;
    }
}

async function sendEmail(body) {
    const apiKey = await SECRET_SENDGRID_API_KEY;

    const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [{email: 'recipient@example.com'}],
                    subject: 'Subject of the email',
                },
            ],
            from: {email: 'sender@example.com'},
            content: [{type: 'text/plain', value: `Email body: ${body}`}],
        }),
    });

    return sendGridResponse.json();
}
