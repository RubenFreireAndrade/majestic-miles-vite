export async function onRequestGet(context) {
    return await context.env.VITE_GOOGLE_MAPS_KEY;
}
