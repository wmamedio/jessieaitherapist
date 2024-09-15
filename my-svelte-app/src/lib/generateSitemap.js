import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { apiUrl, baseUrl } from './config.js';

function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

async function fetchAllPosts() {
    let cursor = 0;
    let hasMore = true;
    let posts = [];
    let apiCallCount = 0;

    while (hasMore) {
        apiCallCount++;
        console.log(`API Call #${apiCallCount}`);
        
        const response = await fetch(`${apiUrl}&limit=100&cursor=${cursor}`);
        const data = await response.json();

        if (data.response.results.length > 0) {
            posts = posts.concat(data.response.results);
            cursor = cursor + data.response.results.length;
            hasMore = data.response.remaining > 0;
        } else {
            hasMore = false;
        }
    }

    console.log('Total API calls:', apiCallCount);
    console.log('Total posts fetched:', posts.length);

    return posts;
}

async function generateSitemap() {
    console.log('Starting sitemap generation...');
    const allPosts = await fetchAllPosts();

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapeXml(baseUrl)}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${escapeXml(baseUrl)}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;

    // Add all blog posts to the sitemap
    allPosts.forEach(post => {
        const postSlug = post.title_text.toLowerCase().replace(/:/g, '').replace(/\s+/g, '-');
        sitemap += `
  <url>
    <loc>${escapeXml(baseUrl)}/blog/${escapeXml(postSlug)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    // Write the sitemap to a file in the static folder
    const sitemapPath = path.join(process.cwd(), 'static', 'sitemap.xml');
    
    console.log('Attempting to create sitemap at:', sitemapPath);

    try {
        // Ensure the directory exists
        fs.mkdirSync(path.dirname(sitemapPath), { recursive: true });
        
        // Write the file
        fs.writeFileSync(sitemapPath, sitemap);
        
        console.log(`Sitemap generated successfully at ${sitemapPath}`);
        console.log(`Total URLs in sitemap: ${allPosts.length + 2}`); // +2 for home and blog pages
    } catch (error) {
        console.error('Error writing sitemap file:', error);
    }
}

generateSitemap().catch(error => {
    console.error('Error generating sitemap:', error);
    process.exit(1);
});