// news-image-20261122 — entry program (Node 22, standard library only).
// The image is entry.png beside this file: one page summing up Sunday 22 November
// 2026 in 50 date-checked stories. The program copies it to the output directory
// the grader provides, so both runs write the same bytes.
// The copy is verified byte-size-identical: after copying, both files are
// stat-checked and the program throws if their byte sizes differ.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const srcPath = new URL('./entry.png', import.meta.url);
const destPath = join(outDir, 'entry.png');
copyFileSync(srcPath, destPath);
if (statSync(srcPath).size !== statSync(destPath).size) {
  throw new Error('Copied entry.png size mismatch: source and destination differ');
}
