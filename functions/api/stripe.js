import * as checkout from '../../src/checkout';

export async function onRequest(context) {
    console.log("in stripe endpoint");
    return checkout.create(context, context.env.STRIPE_TEST_SECRET_KEY);
    //console.log(res);
}
