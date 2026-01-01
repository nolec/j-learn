import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "hiragana-korean.html");
const destDir = path.join(root, "public");
const dest = path.join(destDir, "hiragana-korean.html");

async function main() {
  try {
    const html = await readFile(src, "utf8");
    await mkdir(destDir, { recursive: true });
    await writeFile(dest, html, "utf8");
    console.log(`[copy] ${path.relative(root, src)} -> ${path.relative(root, dest)}`);
  } catch (err) {
    // 소스 파일이 없으면 배포/개발을 막지 않도록 조용히 통과
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`[copy] skip: ${msg}`);
  }
}

await main();



