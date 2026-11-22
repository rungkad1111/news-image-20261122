// news-image-20261122 — entry program (Node 22, standard library only).
// The image is entry.png beside this file: one page summing up Sunday 22 November
// 2026 in 50 date-checked stories. The program copies it to the output directory
// the grader provides, so both runs write the same bytes.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
