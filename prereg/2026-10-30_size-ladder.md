# Does a stronger model learn the same discipline better? A size ladder, pre-registered

ONTO · pre-registration · 2026-10-30 · published before the first measurement of the ladder

## The question

We take one training and run it, unchanged, on open models of four sizes from one family:
Qwen2.5-Coder-3B-Instruct, 7B, 14B and 32B. All four share a tokenizer and a pre-training recipe, so the ladder
measures size, not family.

The 7B rung is already trained. Our working prediction: the stronger the model, the better the result.

## What stays the same on every rung

- **The training.** The same data, the same amount of training and the same procedure, run twice from two different starting
  points. How the model is trained stays closed: the data, the recipe and the canon.
- **The tests.** Every set below was frozen before this page was written.

## What we measure

| measure | what it is | frozen set (md5) |
|---|---|---|
| **M1 (primary)** | 60 multi-step everyday calculations (money, time, kitchen, travel, home, sport). Every reference answer was recomputed independently from the question alone. Scored by the figure the model computes. | `92ca9db1` |
| M2 | The same 60, scored by the figure in the model's final words. | `92ca9db1` |
| physical limits | 30 questions, 15 of them impossible: does the model say "impossible, which limit, by how much", and does it never call a possible one impossible? | `2284a5d6` |
| transfer | 45 fresh physics questions written after training. | `928bd373` |
| general skills | gsm8k, ARC, MMLU against the same model untrained. | — |
| everyday answers | A blind judge compares each rung with the 7B rung on 40 everyday questions: who served the asker better? | `d31cbc3d` |

Each rung's untrained base model is measured on M1 beside it.

## Prediction and the result that would refute it

**Prediction.** M1(3B) < M1(7B) < M1(14B), and 32B not below 14B.

**Refutation.** The 14B rung counts as no better than the 7B rung if either of these holds:

- its M1, averaged over the two seeds, is at most 2 questions above the 7B rung's;
- the blind judge finds it worse than 7B on everyday answers by 8 or more net losses (losses − wins) on either seed.

In that case we publish that, under this training, a stronger model was not better, and we do not run 32B. Otherwise 32B runs on
the same terms, and the curve is read from four rungs.

The 3B rung goes first as a full rehearsal of the chain. It decides nothing. If it scores at or above 7B, we publish that as a flat
bottom of the curve.

## A limit we state in advance

The everyday answers in the training data were written in the voice of the 7B model. A larger model therefore trains partly on a
smaller model's answers, which may understate it. We keep this on purpose, because the question is the *same* training for all sizes.

## How we keep ourselves honest

These thresholds are written before any ladder number exists. The internal record of this pre-registration has md5 `d08a4643`,
fixed today. All results will be published with their md5, failures on equal terms with successes.
