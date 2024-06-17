/** @type {import('./$types').PageLoad} */
export async function load({ fetch  }) {
    const response = await fetch('/data/projects.json');

    return {
        projects: response.json()
    }
}
