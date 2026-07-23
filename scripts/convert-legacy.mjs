import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "content");
const publicDir = path.join(root, "public");

fs.mkdirSync(contentDir, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });
fs.cpSync(path.join(root, "assets"), path.join(publicDir, "assets"), {
  recursive: true,
});

const pages = [
  ["index.html", "home"],
  ["ape-mehewara.html", "ape-mehewara"],
  ["born-to-roam.html", "born-to-roam"],
  ["ecosands.html", "ecosands"],
];

function extract(source, pattern, label, filename) {
  const match = source.match(pattern);
  if (!match) throw new Error(`Could not extract ${label} from ${filename}`);
  return match[1].trim();
}

function rewritePaths(markup) {
  return markup
    .replaceAll('href="index.html#', 'href="/#')
    .replaceAll('href="index.html"', 'href="/"')
    .replaceAll('href="ape-mehewara.html"', 'href="/ape-mehewara"')
    .replaceAll('href="born-to-roam.html"', 'href="/born-to-roam"')
    .replaceAll('href="ecosands.html"', 'href="/ecosands"')
    .replaceAll('src="assets/', 'src="/assets/')
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll('href="Chamindu_WN_CV.pdf"', 'href="/Chamindu_WN_CV.pdf"');
}

for (const [filename, slug] of pages) {
  const source = fs.readFileSync(path.join(root, filename), "utf8");
  const styles = extract(source, /<style>([\s\S]*?)<\/style>/i, "styles", filename);
  let body = extract(source, /<body[^>]*>([\s\S]*?)<\/body>/i, "body", filename);
  body = body.replace(/<script>[\s\S]*?<\/script>/i, "").trim();
  body = rewritePaths(body);

  fs.writeFileSync(
    path.join(contentDir, `${slug}.json`),
    JSON.stringify({ styles, body }, null, 2),
  );

  if (slug === "home") {
    const script = extract(source, /<script>([\s\S]*?)<\/script>/i, "script", filename)
      .replaceAll('src="assets/', 'src="/assets/')
      .replaceAll('href="assets/', 'href="/assets/');
    fs.writeFileSync(path.join(publicDir, "legacy-home.js"), script);
  }
}

console.log("Converted legacy portfolio content for Next.js.");
