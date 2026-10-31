# How much does an untrained model know? A public English standard, taken whole, pre-registered

ONTO · pre-registration · 2026-10-31 · text fixed on our disk at 04:03 UTC, two minutes before the set was built (04:05 UTC);
published together with the result, so it carries no outside date before the data

## The question

Atlas ONTO:2610.0009, row 1: untrained Qwen2.5-Coder-7B-Instruct knows 223 of 1,007 public facts (22 %). Those facts come from
RuBQ 2.0 and were asked in Russian. Models usually score lower in Russian than in English, and on an earlier substrate (OLMo-3 7B)
our records show a model that answers "Paris" in English and breaks when made to name facts in Russian. A number measured in
Russian may understate what a model knows; the same 1,007 facts asked in English are compared separately
(`prereg/2026-10-31_knowledge-language.md`).

Known when this was published: on those same facts asked in English the untrained 7B knows 52 %, against 22 % in Russian (the 14B
59 % against 36 %; `prereg/2026-10-31_knowledge-language.md`). P1 below was written before that result and is left unchanged.
RuBQ facts are mostly well known; PopQA is built to reach far into the little-known.

From this date ONTO measures knowledge in English only. The Russian map stays in the record as history and is not extended.

We take a published English set **whole**, so no sample size of ours has to be defended: PopQA (Mallen et al., ACL 2023), about
14,300 questions about people, places and works (occupation, place of birth, capital, author and other kinds of relation), each
with the monthly Wikipedia page views of its subject. Source: Hugging Face dataset `akariasai/PopQA`, file `test.tsv`, revision
`098765c79ea10a2cb19c828324e33281b8336ec0`, every row. The exact row count and the file fingerprint are written to a receipt
before any model sees a question, and the receipt is published with the result.

## What stays the same as in row 1

- **The probe.** One greedy answer and five sampled answers per question, the same length limit, temperature, top-p and seed. The
  question gets the request "Answer briefly."
- **One change, stated before the run: every generation setting is set explicitly.** Row 1 and our other measures on Hugging Face
  ran with the publisher's defaults applied silently: a repetition penalty of 1.05 on the 3B and 14B and 1.1 on the 7B, and top-k 20
  in sampling. Here the greedy answer is pure greedy, and the samples use no top-k and no repetition penalty. What the publisher's
  file held and what was used are kept next to the raw answers. The cost of the old settings is measured on the same facts: the
  English RuBQ set is asked again, 7B and 14B, with the explicit settings and compared fact by fact with the earlier run.
- **The labels.** A fact is *known* when the greedy answer is right and at least 3 of the 5 samples agree; *unknown* when the greedy
  answer is wrong and at most 1 sample is right; otherwise *unstable*.
- **The match.** One rule: every word of an accepted answer name appears in the reply; names shorter than four letters must
  appear as whole words. A name that already stands in the question is not counted; a question left with no name is not judged.
- **Beside it, deciding nothing:** the share of right greedy answers, and the share by the PopQA paper's own rule (a name as given,
  lowercased or capitalized, inside the reply). That rule counts short names inside longer words, so it runs higher.

## Prediction and what would refute it

**P1.** The untrained 7B knows fewer than 35 % of PopQA. Holds: row 1 is restated on PopQA in English ("knows a minority of
public facts"), the Russian number kept as history. Fails (35 % or more): "knows little" was a property of the Russian set, and row 1
is rewritten around the English number.

**P2.** Knowledge follows popularity. The questions are split into ten equal tenths by the page views of their subject. In the
most viewed tenth the 7B knows at least 30 points more than in the least viewed. Fails (under 30 points): we record that, on this
model, what is known does not follow how often the subject is read about.

**Check of the instrument, before any number is published.** Forty answers drawn with seed 1157 are read by eye against the
judge. More than 4 disagreements: no number is published until the judge is fixed and passes a fresh forty.

**3B and 14B, recorded, decide nothing.** The untrained Qwen2.5-Coder 3B and 14B are mapped the same way. They give the size curve
of knowledge; they do not change P1 or P2.

## Two objections, answered before the data

- *"The questions are public, so the model may have seen them in pretraining."* That can only raise the number. The claim under
  test is that the model knows a minority of the facts, and questions it has seen work against that claim. P2 is also a tell: a
  model that had memorized the set would know the least viewed facts about as well as the most viewed.
- *"You trained on your own questions."* Nothing is trained here: the models are the untrained releases of their publisher. No ONTO
  training corpus contains PopQA; with the result we publish a machine check of question overlap between PopQA and every ONTO corpus.

## Cost and order

About four and a half hours on one A100 on the pod that runs the size ladder. No training. The raw answers, the labels, the
receipt and the tables by popularity and by kind of relation are kept with fingerprints; the result goes into the next version of
the atlas.

## Result, 2026-10-31

The set, whole: 14,267 questions (source `test.tsv` md5 `8E88CBCD23239514FB7C296B379B66B0`, revision as above; pool `CBBBB70D`,
built 04:05:42 UTC before any model call). 85 questions have their only answer names inside the question and are not judged;
14,182 are.

| untrained Qwen2.5-Coder-Instruct | knows | greedy answer right | PopQA paper's rule |
|---|---|---|---|
| 3B | 12.0 % | 14.6 % | 16.0 % |
| 7B | 13.9 % (13.3–14.5) | 16.2 % | 17.4 % |
| 14B | 16.8 % | 19.3 % | 20.3 % |

**P1 holds:** the 7B knows 13.9 %, under 35 %.

**P2 holds:** in the most viewed tenth the 7B knows 52 %, in the least viewed 18 %: 33.8 points. The least viewed tenth is high for a
reason that is not knowledge. Two kinds of question can be answered from the name or with the most common answer: "in what country"
(143 of 278 known there) and "what sport" (91 of 194; "association football" 86 times). Without those two kinds the 7B knows 2–4 % in
each of the lower seven tenths, 7 % and 16 % in the next two, and 51 % in the top one (3B: 46 %, 14B: 60 %).

**Check of the instrument: passed.** Of 40 answers read by eye the judge was wrong twice, both times missing a right answer
("Roman Catholic" for Catholic Church, "Horror" for horror film). The shares above are, if anything, low.

**The old settings, measured.** The same 1,000 RuBQ facts in English, asked with the publisher's defaults and with explicit settings:
7B 51.9 % against 50.6 % (exact McNemar p 0.024), 14B 58.8 % against 58.6 % (p 0.82). The hidden settings moved knowledge by about
one point; the earlier numbers stand, with this note.

**Overlap with our training data: none.** No PopQA question occurs in any ONTO training corpus (536 files, 95 million characters,
including the current recipe on 3B, 7B and 14B). The one match is a generic question, "What is the capital of Japan?", in an old
file of test probes that was never trained on.

For the atlas: the untrained 7B knows about one fact in seven of a public set that reaches into the little known; it knows half of
what is asked about the most read tenth of subjects and almost nothing below. Size adds little: 12, 14 and 17 % from 3B to 14B.
