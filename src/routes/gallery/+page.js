/** @type {import('./$types').PageLoad} */
import galleryList from '$lib/data/gallery.json';
export async function load({fetch}) {
    return {"gallery": galleryList};
};