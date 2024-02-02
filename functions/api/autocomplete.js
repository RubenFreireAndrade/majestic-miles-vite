export async function onRequest(context) {
    return new Response(context.env.VITE_GOOGLE_MAPS_KEY);
}
