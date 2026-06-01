import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Inline the app stylesheet into index.html so the first paint doesn't wait on a
// separate CSS request (Lighthouse "Render-blocking requests").
function inlineEntryCss() {
  return {
    name: 'inline-entry-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const htmlKey = Object.keys(bundle).find(k => k.endsWith('index.html'))
      const cssKey = Object.keys(bundle).find(k => k.endsWith('.css') && bundle[k].type === 'asset')
      if (!htmlKey || !cssKey) return

      const htmlAsset = bundle[htmlKey]
      const cssAsset = bundle[cssKey]
      const cssText = cssAsset.source.toString()
      const cssBasename = cssKey.split('/').pop().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const linkRegex = new RegExp(`\\s*<link[^>]+href="[^"]*${cssBasename}"[^>]*>`, 'g')

      let html = htmlAsset.source.toString()
      html = html.replace(linkRegex, '')
      html = html.replace('</head>', `<style>${cssText}</style></head>`)
      htmlAsset.source = html

      // Drop the standalone CSS file from the bundle — its bytes now live in the HTML.
      delete bundle[cssKey]
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineEntryCss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // can now refer to the src folder as @
    }
  }
})
