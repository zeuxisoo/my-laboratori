import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load(event) {
    redirect(307, "/");
}
