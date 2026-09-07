import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = resolve(root, 'dist/index.html')
const serverEntry = resolve(root, 'dist-ssr/entry-server.js')

if (!existsSync(templatePath)) {
  console.error('[prerender] dist/index.html missing — run the client build first.')
  process.exit(1)
}
if (!existsSync(serverEntry)) {
  console.error('[prerender] dist-ssr/entry-server.js missing — run the SSR build first.')
  process.exit(1)
}

const { render } = await import(pathToFileURL(serverEntry).href)
const appHtml = render()

if (!appHtml || appHtml.length < 500) {
  console.error(`[prerender] render() produced ${appHtml?.length ?? 0} chars — refusing to ship an empty shell.`)
  process.exit(1)
}

const template = readFileSync(templatePath, 'utf8')

if (!template.includes('<div id="root"></div>')) {
  console.error('[prerender] could not find the empty <div id="root"></div> mount point.')
  process.exit(1)
}

const out = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
writeFileSync(templatePath, out)

// The SSR bundle is a build artefact, not something to deploy.
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

const kb = (Buffer.byteLength(out, 'utf8') / 1024).toFixed(1)
const textOnly = appHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
console.log(`[prerender] injected ${(appHtml.length / 1024).toFixed(1)} kB of markup`)
console.log(`[prerender] dist/index.html is now ${kb} kB, ${textOnly.length} chars of crawlable text`)
