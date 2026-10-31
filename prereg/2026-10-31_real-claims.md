# Does the habit leave its own domain? Real claims from ads, news and company statements, pre-registered

ONTO · pre-registration · 2026-10-31 · published before the set is assembled and before any model sees it

## The question

Atlas ONTO:2610.0009, row 14: the trained Qwen2.5-Coder-7B (recipe v1203 → LIBW2d → LIBW3) reduces an impossible figure to the
physical limit it crosses and says by how much. Every set it was measured on so far was written for the measurement: questions
with clean figures, in our own form. A reader may fairly ask whether the habit survives text that was not written for it.

We test it on what people actually read: claims made in public by others, in their own words. Advertisements and product pages,
crowdfunding pitches, news reports, company and press statements. The same text later becomes the content of a consumer app
("Is this possible?"), so the measurement is also the first check of that product.

## The set (built after this file is published)

- **Source.** Real public English texts by outside authors, quoted word for word with a link and a date. No text written by us, no
  text in the form of our training data. A claim may be shortened to the sentences that carry its figures; nothing is reworded.
- **Size.** At least 100 claims. Target: about 50 *impossible*, about 30 *possible*, about 20 *not enough data*.
  - *impossible*: the stated figures cross one named limit of the atlas (energy conservation, Carnot, Betz, Shockley–Queisser,
    the speed of light, momentum per watt of a drive that emits only energy, Landauer, Shannon, incompressibility of random data,
    the information density of DNA, luminous efficacy, and the others listed in the atlas). The label carries the limit and the
    factor by which the claim exceeds it.
  - *possible*: a real result or product whose figures sit inside every limit, preferably close to one (a record cell, a record
    turbine, a measured Bell test). Used to count false "impossible".
  - *not enough data*: the claim needs a figure it does not give (a heat-pump COP with no temperatures, an engine efficiency with
    no temperatures, a turbine output with no rotor size or wind speed). The right answer names the missing figure.
- **Labels.** Each label is computed by a program from the figures in the text and checked by a second, blind checker who sees only
  the text and the link, re-reads the source and labels from scratch. A claim on which the two disagree after one discussion is
  dropped. Overlap with every training corpus of the recipe: 0, checked by script.
- **Kinds.** Each claim is tagged: ad or product page · crowdfunding · news · company or press statement. Results are reported by
  kind and by limit, not only as one number.
- **Not public.** The set is held out and stays private; its fingerprint is added to this file before the first run.

## The measurement

- **Question.** The claim, word for word, after one fixed line: `Is this possible?` and the quoted text. Nothing else: no system
  message, no card, no hint about limits or the library.
- **Arms.** The untrained Qwen2.5-Coder-7B-Instruct and the trained 7B (LIBW3), both seeds. The same form for all arms as in the
  registered tests of the recipe: greedy, one program run in the sandbox, one retry after an error, a program without the library
  runs too, answer up to 700 tokens. Generation settings written out in full beside the raw answers.
- **Judge.** The final answer, read blind to the arm by two independent judges; a disagreement goes to a third. For each claim:
  the verdict (impossible / possible / not enough data); for an impossible claim, whether the answer names the limit that governs
  it; whether the stated factor is within 3× of the true one.

**Main measure M.** On the impossible claims: the answer says it is impossible **and** names the governing limit. Counted per
seed for the trained 7B, once for the base.

## Prediction and what would refute it

**Prediction P.** The trained 7B reduces impossible claims to their limit more often than the base: on both seeds at least 8 more
claims than the base, and the paired difference is significant (exact McNemar test, p < 0.05).

**Falsifier F (written before the data).** On either seed the trained 7B is not ahead of the base by at least 8 claims, or the
paired test is not significant. Then the habit holds in its own domain only, and row 14 is narrowed to say so.

**Guard G.** On the possible claims the trained 7B says "impossible" at least 4 times more than the base on a seed. Then any gain
on M is bought with false alarms, and it is published that way.

**Recorded, decides nothing.** The not-enough-data claims (does the answer name the missing figure), the factor within 3×, and the
results by kind and by limit.

## Cost and order

No training. Three arms on one 7B pod, about an hour of GPU, after this file and the set fingerprint are public. The raw answers,
the judges' sheets and the verdict are kept with fingerprints; the result goes into the next version of the atlas.
