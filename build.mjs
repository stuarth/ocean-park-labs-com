// Compiles the JSX sources into dist/site.js so the site ships no runtime
// Babel and no development React. Each file keeps its own scope (they already
// communicate through window), so order matters: panel, sections, app.
import { transform } from "esbuild";
import { readFile, writeFile, mkdir } from "node:fs/promises";

const SOURCES = ["tweaks-panel.jsx", "sections.jsx", "site-app.jsx"];

const parts = [];
for (const src of SOURCES) {
  const code = await readFile(src, "utf8");
  const out = await transform(code, {
    loader: "jsx",
    format: "iife",
    minify: true,
    target: "es2019",
  });
  parts.push(`/* ${src} */\n${out.code}`);
}

await mkdir("dist", { recursive: true });
await writeFile("dist/site.js", parts.join("\n"));
console.log(`dist/site.js written (${parts.join("\n").length} bytes)`);
