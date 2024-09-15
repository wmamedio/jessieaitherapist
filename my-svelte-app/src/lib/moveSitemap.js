import fs from 'fs';
import path from 'path';

const sourcePath = path.join(process.cwd(), 'static', 'sitemap.xml');
const destinationPath = path.join(process.cwd(), '.svelte-kit', 'cloudflare', 'sitemap.xml');

console.log('Moving sitemap from', sourcePath, 'to', destinationPath);

try {
    // Ensure the destination directory exists
    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });

    // Move the file
    fs.renameSync(sourcePath, destinationPath);

    console.log('Sitemap moved successfully');
} catch (error) {
    console.error('Error moving sitemap:', error);
    process.exit(1);
}