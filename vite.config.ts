import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vitePluginAbi from "./vite-plugin-abi";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vitePluginAbi()],
});
