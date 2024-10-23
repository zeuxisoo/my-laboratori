<script>
/**
 * @typedef {Object} Props
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let { children } = $props();
</script>

<div class="container md:max-w-[80%]">
    {@render children?.()}
</div>
