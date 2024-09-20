export function slugify(title) {
    return title.toLowerCase()
        .replace(/[^\w\s-]+/g, '-') // Replace non-word chars (including . and ') with hyphens
        .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and hyphens with a single hyphen
        .replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
        .trim(); // Trim leading and trailing whitespace
}