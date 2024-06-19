/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const response = await fetch("/data/projects.json");
    const projects = await response.json();

    return {
        id: params.id,
        project: new Promise<Project>((resolve, reject) => {
            const filteredProjects = projects.reverse().filter((project: Project) => {
                return project.id.toString() == params.id;
            });

            if (filteredProjects.length <= 0) {
                reject(`Not found any related project by id: ${params.id}`);
            } else {
                resolve(filteredProjects[0]);
            }
        }),
    };
}
