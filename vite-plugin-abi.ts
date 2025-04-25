import fs from "node:fs";

export default function vitePluginAbi() {
  return {
    name: "vite-plugin-abi",
    load(id) {
      if (id.endsWith(".abi")) {
        try {
          const fileContent = fs.readFileSync(id, "utf-8");

          JSON.parse(fileContent);
          return {
            code: `export default ${fileContent};`,
            map: null,
          };
        } catch (error) {
          this.error(
            `Failed to load or parse ABI file ${id}: ${error.message}`
          );
          return null;
        }
      }
      return null;
    },
  };
}
