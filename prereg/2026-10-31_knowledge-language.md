# Does the model know little, or does it know little in Russian? The same facts in two languages, pre-registered

ONTO · pre-registration · 2026-10-31 · published before the first measurement in English

## The question

Atlas ONTO:2610.0009, row 1: untrained Qwen2.5-Coder-7B-Instruct knows 223 of 1,007 public facts (22 %). The facts come from
RuBQ 2.0 (Rybin et al., 2021), and they were asked in Russian. Models usually score lower in Russian than in English, so a reader
may fairly ask whether "knows little" means "knows little in Russian".

RuBQ 2.0 gives every question in English as well. We ask the same 1,007 facts in English, with nothing else changed, and compare
the two answers fact by fact. While the size-ladder pod has a 14B model on its disk, we also map the untrained 14B in both languages.

## What stays the same

- **The facts and their answers.** The same 1,007 questions, the same accepted answer names (Russian and English), the same rule
  for a match. Only 2 facts get extra short English answer names, because the Russian rule dropped every English name under four
  letters; 9 facts have no English answer name at all and are left out of the comparison on both sides.
- **The probe.** One greedy answer and five sampled answers per question, the same length limit, temperature and seed.
- **The labels.** A fact is *known* when the greedy answer is right and at least 3 of the 5 samples agree; *unknown* when the greedy
  answer is wrong and at most 1 sample is right; otherwise *unstable*.
- **What changes.** The question text (English instead of Russian) and the request to answer briefly, in the same language.

Frozen inputs: the Russian pool `2EFF8A68`, the English pool `B80B317D` (built from RuBQ 2.0 dev `73C981F7` and test `8EE257FE`).

## Prediction and what would refute it

**Prediction P.** In English the 7B knows more of the same facts: at least 5 points more than in Russian (22 %), and the paired
difference is significant (exact McNemar test, p < 0.05).

**What we publish either way.**
- P holds: row 1 gets the English number beside the Russian one, and the claim becomes "knows a minority of the facts, fewer in
  Russian".
- P fails (English within 2 points of Russian, or the paired test not significant): language is not the reason, and row 1 stands
  for both languages.
- Between the two: we print both numbers and the test, and change no wording until a second set agrees.

**14B, recorded, decides nothing.** The untrained 14B in both languages is printed beside the 7B. It tells whether size alone moves
the share of known facts; it does not change the verdict on P.

## Cost and order

About twenty minutes of GPU on the pod that already runs the 14B rung, after its last measure (the Russian
map of the 7B took four minutes on one card). No training. The raw answers, the labels
and the paired table are kept with fingerprints; the result goes into the next version of the atlas.

## Result, 2026-10-31

Ran as registered, after this file was published (commit 63beeb3, 02:50:59 UTC; the pod finished at 03:37 UTC). On the same 1,000
facts the untrained 7B knows 519 in English (51.9 %) and 223 in Russian (22.3 %): 317 facts are known only in English, 21 only in
Russian, exact McNemar p ≈ 5·10⁻⁶⁹. **P holds.** The 14B knows 588 (58.8 %) in English and 357 (35.7 %) in Russian.

A check of 40 English answers by eye found the judge wrong twice, both times missing a right answer (the answer name stands in the
question; the English name is not in the list). Thirty facts known only in English, drawn at random, are all genuine. The English
share is, if anything, low.

Row 1 gets the English number beside the Russian one. "Knows a minority" does not hold in English: the 7B knows about half of these
facts, and a fifth when they are asked in Russian. This was the last measurement in Russian; from this date knowledge is measured
in English (`prereg/2026-10-31_knowledge-popqa.md`).
