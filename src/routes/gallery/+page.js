/** @type {import('./$types').PageLoad} */

export async function load({fetch}) {
    const resp = await fetch('data/gallery.json');
    const data = await resp.json();
    return {"gallery": data};
};
// export const ssr = false;