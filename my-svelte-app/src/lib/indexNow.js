import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import https from 'https';

// Configuration
const sitemapPath = path.resolve('.svelte-kit/cloudflare/sitemap.xml'); // Local sitemap path
const host = 'jessietherapist.com';
const key = '571653aa1e234e78a8faffcdb1047449';
const keyLocation = 'https://jessietherapist.com/571653aa1e234e78a8faffcdb1047449.txt';

// Read the local sitemap.xml file
function fetchSitemap() {
    return new Promise((resolve, reject) => {
        fs.readFile(sitemapPath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function parseSitemap(xmlData) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlData, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function filterUrlsByDate(sitemap) {
    const urls = sitemap.urlset.url;
    return urls.map(url => url.loc[0]); // Return all URLs
}

async function postToIndexNow(urlList) {
    const data = JSON.stringify({
        host,
        key,
        keyLocation,
        urlList
    });

    const options = {
        hostname: 'api.indexnow.org',
        port: 443,
        path: '/IndexNow',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': data.length
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    statusMessage: res.statusMessage,
                    data: responseData
                });
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

async function main() {
    try {
        const xmlData = await fetchSitemap(); // Get local sitemap
        const sitemap = await parseSitemap(xmlData);
        const allUrls = filterUrlsByDate(sitemap); // Get all URLs

        console.log(allUrls);

        if (allUrls.length > 0) {
            const response = await postToIndexNow(allUrls);
            console.log('IndexNow API Response:');
            console.log('Status:', response.statusCode, response.statusMessage);
            console.log('Data:', response.data);
        } else {
            console.log('No URLs found in the sitemap.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
