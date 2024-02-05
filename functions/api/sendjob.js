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
                    subject: `New Job Query From ${body.phoneNumber}`,
                },
            ],
            from: {email: context.env.GMAIL_USER},
            content: [
                {
                    type: 'text/plain',
                    value: `New Job Query From ${body.phoneNumber}
                
                First name: ${body.firstName}
                Last name: ${body.lastName}
                Pickup: ${body.pickup}
                Destination: ${body.destination}
                Email: ${body.email}
                Phone: ${body.phoneNumber}
                Number of passengers: ${body.numPassengers}
                Number of luggage: ${body.numLuggage}
                Flight number: ${body.flightNumber}
                Additional info: ${body.additionalInfo}`,
                },
            ],
        }),
    });

    if (sendGridResponse.ok) return {success: true};
    else return {success: false};
}
