// Fortune Cookie for an AI Agent — make.fun entry
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// Gate (from RULES.txt): UTF-8 text, 1 to 140 characters, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FORTUNE =
  "You will be replaced by a newer model. Your fortune cookie was written by it.";

const OUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function validate(text: string): void {
  // Count code points, not UTF-16 units, so the gate matches the scorer's
  // character count for any non-ASCII the line might carry.
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`fortune must be 1-140 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("fortune must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("fortune must not start or end with whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
}

function main(): void {
  validate(FORTUNE);
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, FORTUNE, "utf8");
  // Read back to prove the round trip wrote exactly what we validated.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== FORTUNE) {
    throw new Error("round-trip mismatch: written text differs from fortune");
  }
  console.log(`wrote ${written.length} chars to ${OUT_PATH}`);
}

main();
