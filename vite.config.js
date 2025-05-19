import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  base: "/rock-paper-scissors-master/", // ganti sesuai nama repo
  plugins: [react()]
})
