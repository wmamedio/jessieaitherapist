// lib/dataFetching.js

export async function fetchData(fetch) {
    try {
        const response = await fetch('https://simplifying.bubbleapps.io/version-test/api/1.1/wf/products');
        const data = await response.json();

        if (data.status === "success" && data.response) {
            return {
                posts: data.response.results
            };
        } else {
            console.error('Failed to fetch data:', data);
            return {
                posts: []
            };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            posts: []
        };
    }
}
