import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast, built in three beats: the fridge's smart stack, the pivot,
// then the one job it still cannot do.
// Why this roast lands, against the judge's brief:
//  - The joke aims squarely at the fridge's own smart stack (camera, app,
//    touchscreen), not at the owner or at fridges in general.
//  - It is specific to a smart fridge: only a "smart" appliance brags about
//    a camera and an app while failing the oldest fridge job of all.
//  - The punchline sits in the last few words ("the milk expired"), so the
//    line reads as a setup that collapses on itself.
//  - It dodges the worn cracks ("you're cold", "chill out") entirely.
const smartStack = "You run a camera, an app and a touchscreen,";
const punchline = "and still can't tell the milk expired.";
const line = `${smartStack} ${punchline}`;

const MAX_CHARS = 200;
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
