/** @type {import('./$types').PageLoad} */
export async function load({ fetch  }) {
    const response = await fetch('/data/projects.json');
    const projects = await response.json();

    return {
        projects: projects.reverse()
    }
}
