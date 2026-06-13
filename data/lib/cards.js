import fs from "fs";
import path from "path";

export function getCards() {
  const filePath = path.join(process.cwd(), "data/cards.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}
