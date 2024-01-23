export async function onRequestPost(context) {
    return await mailHandler(context);
}

async function mailHandler(context) {
    const reqbody = await context.request.json();

    const sendgridResponse = await sendEmail(reqbody, context);

    return new Response(`Email sent: ${JSON.stringify(sendgridResponse)}`, {
        headers: {'Content-Type': 'text/plain'},
    });
}

async function sendEmail(body, context) {
    const apiKey = context.env.SEND_MAIL_KEY;

    const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [{email: context.env.GMAIL_USER}],
                    subject: `New Job Query From ${body.phone}`,
                },
            ],
            from: {email: context.env.GMAIL_USER},
            content: [
                {
                    type: 'text/plain',
                    value: `New Job Query From ${body.phone}
                
                Name: ${body.name}
                Phone: ${body.phone}
                Email: ${body.email}
                Destination: ${body.destination}
                Additional Info: ${body.additional_info}`,
                },
            ],
        }),
    });

    if (sendGridResponse.ok) return {success: true};
    else return {success: false};
}
