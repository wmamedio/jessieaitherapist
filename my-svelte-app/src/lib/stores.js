import { writable } from 'svelte/store';

export const posts = writable([]);
export const isDataLoaded = writable(false);
export const allPostsStore = writable([]);
