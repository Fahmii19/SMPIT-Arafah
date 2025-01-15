// store.js
import { writable } from "svelte/store";

export const activeRoute = writable(window.location.pathname);
