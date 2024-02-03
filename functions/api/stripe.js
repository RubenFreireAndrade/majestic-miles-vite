import * as checkout from '../../src/checkout';

export async function onRequest(context) {
    return checkout.create(context.request, context.env.STRIPE_TEST_SECRET_KEY);
}
