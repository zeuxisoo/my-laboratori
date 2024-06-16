<script>
// Show error when `[...path]` directory not exists/matched
import { page } from "$app/stores";
</script>

<div class="h-screen flex flex-col justify-center items-center">
    <div class="text-lg font-bold">{$page.status}</div>
    <div class="text-base font-thin">{$page.error.message}</div>
</div>
