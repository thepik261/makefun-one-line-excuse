// The One-Line Excuse an Agent Gives Its Human — make.fun entry.
//
// Writes one line, under 160 characters: the excuse an AI agent gives its
// human for missing a deadline. Pure Node standard library; deterministic;
// no network, no input.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I had it done on time, but my context window evicted the deadline to make room for this apology.";

if (EXCUSE.length < 1 || EXCUSE.length > 160) {
  throw new Error(`excuse must be 1-160 characters, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single line");
}
if (!/\S/.test(EXCUSE)) {
  throw new Error("excuse must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

// Read back what was written: the gate rejects anything that is not
// 1-160 characters of UTF-8 text, so fail loudly here instead.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EXCUSE) {
  throw new Error("entry.txt does not match the excuse");
}
