/* eslint-disable indent */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import webExtension from "@samrum/vite-plugin-web-extension"
import path from "path"
import { getManifest } from "./src/manifest"

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      webExtension({
        //Manifest version 2
        manifest: getManifest(Number(3)),
      }),
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  }
})
