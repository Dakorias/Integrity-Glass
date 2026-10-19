import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import QRCode from 'qrcode'

const targetUrl = 'https://integrityglassservices.com'
const publicDirectory = new URL('../public/', import.meta.url)
const outputPath = fileURLToPath(new URL('integrityglass-qr.png', publicDirectory))

await mkdir(publicDirectory, { recursive: true })
await QRCode.toFile(outputPath, targetUrl, {
  errorCorrectionLevel: 'H',
  margin: 3,
  width: 480,
  color: {
    dark: '#17191b',
    light: '#fffefa',
  },
})

console.log(`Generated QR code for ${targetUrl}`)
