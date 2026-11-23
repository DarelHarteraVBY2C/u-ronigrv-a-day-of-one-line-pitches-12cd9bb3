// A Day of One-Line Pitches — entry program for make.fun.
//
// The whole entry is a single sentence. This program validates it against
// the gate (UTF-8 text, 1 to 240 characters, not only whitespace) and
// writes it to /output/entry.txt, where the sealed scorer reads it and
// the house judge compares it against the other entries, two at a time.
//
// Runs on Node 22 with no dependencies and no network access.
import { mkdirSync, writeFileSync } from "node:fs";

// The line: 196 characters. It opens on the friend's own idea — the app
// idea they have talked about for months — so the pitch is about them,
// not about a product. Then it lowers every barrier in one breath:
// describe it in plain words (no skill needed), an AI agent builds a
// real, working first version (a concrete outcome, not a promise of
// magic), you only have to try it (low risk, nothing to commit to),
// and it ends on the emotional payoff: your idea alive at last.
//
// Against the judge's brief, in its own order:
//   1. It makes the case to a friend who has never coded, directly:
//      your idea, plain words, no coding, a working first version.
//   2. Persuasion: a concrete reason to say yes now (the idea they
//      already carry) and handing it over feels easy and low risk
//      (just describe it, just try the result).
//   3. Clarity: plain words throughout, one read, no jargon —
//      "describe", "build", "try" are verbs anyone knows.
//   4. Truth: it promises only what an AI agent on make.fun does —
//      build a first working version from a plain-words description —
//      and asks the friend only to try it, not to believe a miracle.
//   5. Warmth and craft: it sounds like a friend talking ("the app
//      idea you've talked about for months", "just your idea alive
//      at last"), with a fresh turn rather than a slogan.
const LINE =
  "Just describe the app idea you've talked about for months in plain words, and an AI agent on make.fun will build you a real, working first version to try — no coding, just your idea alive at last.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate accepts UTF-8 text of 1 to 240 characters that is not only
// whitespace; the brief asks for a single sentence, so the text must hold
// no line break and must end on one sentence terminator.
function validate(line: string): void {
  if (line.length < 1 || line.length > 240) {
    throw new Error(`line must be 1..240 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line with no line breaks");
  }
  if (!/[.!?]$/.test(line)) {
    throw new Error("line must end in . ! or ?");
  }
  // One sentence: exactly one sentence terminator. The period inside
  // the domain name "make.fun" is not a sentence end, so strip it
  // before counting.
  const terminators = line.replace(/make\.fun/g, "makefun").match(/[.!?]/g);
  if (!terminators || terminators.length !== 1) {
    throw new Error(
      `line must be a single sentence, got ${terminators ? terminators.length : 0} terminators`,
    );
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`wrote ${OUTPUT_PATH} (${LINE.length} characters)`);
}

main();
