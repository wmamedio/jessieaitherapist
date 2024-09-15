import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import https from 'https';

// Configuration
const sitemapPath = path.join(process.cwd(), '.svelte-kit', 'cloudflare', 'sitemap.xml');
const host = 'jessietherapist.com';
const key = '571653aa1e234e78a8faffcdb1047449';
const keyLocation = 'https://jessietherapist.com/571653aa1e234e78a8faffcdb1047449.txt';

// Read the local sitemap.xml file
function fetchSitemap() {
    return new Promise((resolve, reject) => {
        fs.readFile(sitemapPath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading sitemap from ${sitemapPath}: ${err.message}`);
                reject(err);
            } else {
                console.log(`Sitemap successfully read from ${sitemapPath}`);
                resolve(data);
            }
        });
    });
}

function parseSitemap(xmlData) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlData, (err, result) => {
            if (err) {
                console.error(`Error parsing sitemap XML: ${err.message}`);
                reject(err);
            } else {
                console.log('Sitemap XML successfully parsed');
                resolve(result);
            }
        });
    });
}

// Function to send URLs to IndexNow
function sendUrlsToIndexNow(urls) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({
            host,
            key,
            keyLocation,
            urlList: urls
        });

        const options = {
            hostname: 'api.indexnow.org',
            port: 443,
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
            }
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    console.log('URLs successfully submitted to IndexNow');
                    resolve(data);
                } else {
                    console.error(`Failed to submit URLs to IndexNow: ${res.statusCode}`);
                    reject(new Error(`Failed to submit URLs to IndexNow: ${res.statusCode}`));
                }
            });
        });

        req.on('error', (e) => {
            console.error(`Problem with request: ${e.message}`);
            reject(e);
        });

        req.write(postData);
        req.end();
    });
}

// Main function to read, parse, and submit sitemap URLs
async function indexNow() {
    try {
        const sitemapData = await fetchSitemap();
        const parsedSitemap = await parseSitemap(sitemapData);
        const urls = parsedSitemap.urlset.url.map((url) => url.loc[0]);
        await sendUrlsToIndexNow(urls);
    } catch (error) {
        console.error('An error occurred during the IndexNow process:', error);
    }
}

indexNow();