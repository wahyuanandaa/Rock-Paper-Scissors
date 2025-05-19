import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  base: "/Rock-Paper-Scissors/", // ganti sesuai nama repo
  plugins: [react()]
})
