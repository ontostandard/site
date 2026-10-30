# ONTO

ONTO is an independent institute. It measured what can be put into a language model's weights, and what cannot.
The main result: impossible claims routed to the limit they break went from 0 to 11–12 of 15 on a held-out set (Qwen 7B),
and the atlas records what training could not move.

This repository is the source of the website **[ontostandard.org](https://ontostandard.org)**, served by GitHub Pages from
`docs/`. The files in `docs/` are built by the institute's site builder; they are not edited by hand.

## Where to read

| page | what is there |
|---|---|
| [Home](https://ontostandard.org/) | the main result on one screen |
| [Atlas ONTO:2610.0009](https://ontostandard.org/archive/2610.0009/) | eighteen measured limits of today's probabilistic models: number, denominator, comparison, record fingerprint |
| [Products](https://ontostandard.org/products/) | measurement of a model's limits, and moving the boundary into an open model's weights, under written agreement |
| [Lab](https://ontostandard.org/lab/) | measurements as they happen, dated |
| [Method](https://ontostandard.org/method/) | how results are accepted and how we check ourselves (ONTO:2610.0007) |
| [Verify](https://ontostandard.org/verify/) | how to check us without trusting us |
| [Archive](https://ontostandard.org/archive/) | numbered, dated documents; corrections come as new versions, never as rewrites |
| [llms.txt](https://ontostandard.org/llms.txt) · [archive.json](https://ontostandard.org/archive/archive.json) | for AI readers: pages, documents and fingerprints, machine-readable |

## Checking us

- **Before the data.** Pre-registrations are in [`prereg/`](prereg/), each published before its first measurement; git dates them.
- **After the data.** Every document lists the md5 fingerprint of each version. The command and the expected value are on
  [Verify](https://ontostandard.org/verify/).
- **On request.** Write to council@ontostandard.org with the subject Reproduction and the atlas row you want repeated.
  Results are published with their fingerprint, failures on equal terms with successes.

## Open and closed

**Open:** what we measure, the bar and the stop conditions written before the data, results, failures, denominators, dates,
and the fingerprints of the closed records behind each number.

**Closed:** the canon GOLD, the training data and recipe, the trained weights, and the questions that measure.
A public test question is absorbed into the pre-training of the next models and stops measuring.

## History of this repository

- **2026-01-27 to April 2026.** The first commit, then the prompt-layer period: pages, reports, a Python package.
  Claims from that period that we no longer make are listed in [ONTO:2610.0001](https://ontostandard.org/archive/2610.0001/).
- **2026-10-10.** Site v2. **2026-10-31.** Site v4 and atlas ONTO:2610.0009, version 2.
- **2026-10-12.** The history was cleaned once: closed material that should never have been public was removed from every
  commit. Commit dates were kept; commit hashes changed. Since then the history is only appended to.
- **Independent copy.** [Software Heritage](https://archive.softwareheritage.org/browse/origin/visits/?origin_url=https://github.com/nickarstrong/onto-standard)
  keeps dated snapshots of this repository outside our control.
