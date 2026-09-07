#!/usr/bin/env node
/**
 * IndexNow submission — notifies Bing, Yandex, Naver and Seznam that URLs
 * changed. No account, no dashboard, no ownership verification beyond the
 * key file being reachable at the site root.
 *
 * Google does NOT participate in IndexNow, and its old sitemap ping endpoint
 * (google.com/ping?sitemap=) was retired in 2023 — Google discovers sitemaps
 * via robots.txt and Search Console only.
 *
 * Requires the site to be DEPLOYED first: the endpoint fetches
 * https://ahmedghani.com/<key>.txt and rejects the submission if the key
 * file is missing or does not match.
 *
 *   node scripts/indexnow.mjs
 */
const KEY = 'd6ca8dca3dac4ba8426831b5b0460d57';
const HOST = 'ahmedghani.com';
const URLS = ['https://ahmedghani.com/'];

const keyUrl = `https://${HOST}/${KEY}.txt`;

const probe = await fetch(keyUrl).catch(() => null);
if (!probe || !probe.ok) {
  console.error(`[indexnow] key file not reachable at ${keyUrl} (status ${probe?.status ?? 'no response'})`);
  console.error('[indexnow] deploy the site first — the endpoint verifies ownership by fetching that file.');
  process.exit(1);
}
const served = (await probe.text()).trim();
if (served !== KEY) {
  console.error(`[indexnow] key file content mismatch: expected ${KEY}, got "${served.slice(0, 40)}"`);
  process.exit(1);
}
console.log(`[indexnow] key verified at ${keyUrl}`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList: URLS }),
});

// 200 = accepted, 202 = accepted pending key validation.
console.log(`[indexnow] ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log(`[indexnow] submitted ${URLS.length} URL(s) to Bing / Yandex / Naver / Seznam`);
} else {
  console.error('[indexnow] rejected:', (await res.text()).slice(0, 300));
  process.exit(1);
}
