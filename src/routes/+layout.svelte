<script>
import "../app.css";
</script>

<div class="bg-base-100">
    <div class="bg-neutral-100 sticky top-0 z-30 w-full shadow-sm">
        <div class="navbar w-full justify-center">
            <div class="container md:max-w-[80%]">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl text-primary" href="/">Lab</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li><a href="https://www.not.im/">Blog</a></li>
                        <li><a href="https://project.not.im/">Project</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center px-6 pt-5 pb-16">
        <div class="container md:max-w-[80%]">
            <slot />
        </div>
    </div>
</div>
