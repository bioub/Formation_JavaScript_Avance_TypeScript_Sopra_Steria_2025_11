import fs from "node:fs/promises";
import path from "node:path";
import md5 from "md5";
import { minify } from "terser";

const distPath = path.resolve(import.meta.dirname, "dist");
const srcPath = path.resolve(import.meta.dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function cleanDist(dirPath: string): Promise<void> {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath, { recursive: true });
}

async function buildJs(): Promise<void> {
  // Ici on lit les fichiers les uns après les autres
  // const horlogeJsContent = await fs.readFile(horlogeJsPath, 'utf-8');
  // const indexJsContent = await fs.readFile(indexJsPath, 'utf-8');
  // const combinedJsContent = `${horlogeJsContent}\n${indexJsContent}`;

  // Ici on lit les fichiers en parallèle
  const [horlogeJsContent, indexJsContent] = await Promise.all([
    fs.readFile(horlogeJsPath, "utf-8"),
    fs.readFile(indexJsPath, "utf-8"),
  ]);

  const combinedJsContent = `${horlogeJsContent}\n${indexJsContent}`;

  await fs.writeFile(appJsDistPath, combinedJsContent, "utf-8");
}

async function buildHtml(): Promise<void> {
  let indexHtmlContent = await fs.readFile(indexHtmlPath, "utf-8");

  indexHtmlContent = indexHtmlContent
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, indexHtmlContent, "utf-8");
}

try {
  await cleanDist(distPath);
  await Promise.all([buildJs(), buildHtml()]);
  console.log("Build completed successfully.");
} catch (error) {
  console.error("Error during build:", error);
}
