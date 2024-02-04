import Stripe from 'stripe';

export const create = async (req, env) => {
    const stripe = new Stripe(env, {
        httpClient: Stripe.createFetchHttpClient(),
    });

    const {origin} = new URL(req.url);
    console.log(origin);
    // Also seperate the data coming from request.
    //req.body = await req.text();

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            success_url: `${origin}`,
            cancel_url: `${origin}`,
        });

        return Response.redirect(session.url, 303);
    } catch (error) {
        return Response(error.message, {status: 500});
    }
};
