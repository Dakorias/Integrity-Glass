import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const projectDirectory = fileURLToPath(new URL('../', import.meta.url))
const outputDirectory = path.join(projectDirectory, 'dist')
const metadata = JSON.parse(await readFile(path.join(projectDirectory, 'src/pageMetadata.json'), 'utf8'))
const baseHtml = await readFile(path.join(outputDirectory, 'index.html'), 'utf8')
const businessUrl = 'https://integrityglassservices.com'

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function updateMeta(html, selector, value) {
  return html.replace(selector, `$1${escapeAttribute(value)}$2`)
}

for (const [route, page] of Object.entries(metadata)) {
  const routeHtml = route === '/' ? baseHtml : (() => {
    let html = baseHtml
    html = html.replace(/(<title>).*?(<\/title>)/, `$1${page.title}$2`)
    html = updateMeta(html, /(<meta name="description" content=")[^"]*("\s*\/?>)/, page.description)
    html = updateMeta(html, /(<meta name="keywords" content=")[^"]*("\s*\/?>)/, page.keywords)
    html = updateMeta(html, /(<meta property="og:title" content=")[^"]*("\s*\/?>)/, page.title)
    html = updateMeta(html, /(<meta property="og:description" content=")[^"]*("\s*\/?>)/, page.description)
    html = updateMeta(html, /(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `${businessUrl}${route}`)
    html = updateMeta(html, /(<meta name="twitter:title" content=")[^"]*("\s*\/?>)/, page.title)
    html = updateMeta(html, /(<meta name="twitter:description" content=")[^"]*("\s*\/?>)/, page.description)
    html = updateMeta(html, /(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `${businessUrl}${route}`)
    return html
  })()

  const destination = route === '/' ? path.join(outputDirectory, 'index.html') : path.join(outputDirectory, route.slice(1), 'index.html')
  await mkdir(path.dirname(destination), { recursive: true })
  if (route !== '/') await cp(path.join(outputDirectory, 'index.html'), destination)
  await writeFile(destination, routeHtml)
}

console.log('Prepared static route entries and route-specific metadata in dist/.')
