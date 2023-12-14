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
                    to: [{email: 'info.majesticmiles@gmail.com'}],
                    subject: `New query from ${body.phone}`,
                },
            ],
            from: {email: 'info.majesticmiles@gmail.com'},
            content: [
                {
                    type: 'text/plain',
                    value: `New query from: ${body.phone}
                
                Name: ${body.name}
                Phone: ${body.phone}
                Pickup: ${body.pickup}
                Pickup Time: ${body.pickup_time}
                Destination: ${body.destination}
                Destination Time: ${body.destination_time}
                Additional Info: ${body.additional_info}`,
                },
            ],
        }),
    });

    if (sendGridResponse.ok) return {success: true};
    else return {success: false};
}
