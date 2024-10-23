<script>
/**
 * @typedef {Object} Props
 * @property {import('./$types').PageData} data
 */

/** @type {Props} */
let { data } = $props();

const project = data.project;

const previousPage = () => history.back();
</script>

{#await project}
    <div>Loading...</div>
{:then project}
    <div class="card glass">
        <figure class="bg-slate-100 min-h-72">
            <img src={project.image} alt={project.caption} />
        </figure>
        <div class="card-body p-3">
            <div class="card-title">
                {project.caption}
            </div>
            <div class="badge badge-sm badge-outline rounded-sm">
                {project.poweredBy}
            </div>
            <div class="card-description">
                {project.description}
            </div>
            <div class="card-actions justify-end">
                {#if project.link === ""}
                    <button class="btn btn-sm btn-ghost">No Link</button>
                {:else}
                    <a href={project.link} class="btn btn-sm" target="_blank">Link</a>
                {/if}
            </div>
        </div>
    </div>
    <div class="pt-5">
        <button class="btn w-full" onclick={previousPage}>Back</button>
    </div>
{:catch error}
    <div class="alert alert-error grid-cols-none justify-center">
        {error}
    </div>
{/await}
