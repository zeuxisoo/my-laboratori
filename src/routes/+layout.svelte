<script>
import "../app.css";
import Container from '../components/Container.svelte';
</script>

<div class="bg-base-100">
    <div class="bg-neutral-100 sticky top-0 z-30 w-full shadow-sm">
        <div class="navbar w-full justify-center">
            <Container>
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl text-primary" href="/">Lab</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li><a href="https://www.not.im/">Blog</a></li>
                        <li><a href="https://project.not.im/">Project</a></li>
                    </ul>
                </div>
            </Container>
        </div>
    </div>

    <div class="flex justify-center px-6 pt-5 pb-16">
        <Container>
            <slot />
        </Container>
    </div>
</div>
