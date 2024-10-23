<script>
/**
 * @typedef {Object} Props
 * @property {import('./$types').PageData} data
 */

/** @type {Props} */
let { data } = $props();

const projects = data.projects;
</script>

{#await projects}
    <div>Loading...</div>
{:then projects}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {#each projects.reverse() as project}
            <div class="card glass">
                <figure class="bg-slate-100 min-h-72">
                    <img src={project.thumb} alt={project.caption} />
                </figure>
                <div class="card-body p-3">
                    <div class="card-title">{project.caption}</div>
                    <div class="card-description min-h-20">
                        {project.description}
                    </div>
                    <div class="card-actions justify-end">
                        <a href="/project/{project.id}" class="btn btn-sm">More</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/await}
