/** @type {import('./$types').PageLoad} */

import galleryList from '$lib/data/gallery.json';
export async function load({params, fetch}) {
    for (const event of galleryList){
        if (event.eventName === params.eventId)
            return event;
    }
    return {};
};