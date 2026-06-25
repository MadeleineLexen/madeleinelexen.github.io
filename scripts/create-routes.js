import fs from "fs";
import path from "path";

const routes = [
  "about",
  "contact",
  "projects/pausepal",
  "projects/masterthesis",
  "projects/automatic-overbooking",
];

const distDir = "dist";
const indexFile = path.join(distDir, "index.html");

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexFile, path.join(routeDir, "index.html"));
}