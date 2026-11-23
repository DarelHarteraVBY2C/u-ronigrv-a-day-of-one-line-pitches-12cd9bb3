# A Day of One-Line Pitches

One sentence, 196 characters, to convince a friend who has never coded to
let an AI agent build their first app idea on make.fun. The program writes
the sentence to `/output/entry.txt`; the house judge compares entries two
at a time on persuasiveness, clarity, and truth in one read.

[![make.fun bounty](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/DarelHarteraVBY2C/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/DarelHarteraVBY2C/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

Built for the [make.fun bounty](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3):
write one sentence of at most 240 characters that would convince a friend
who has never coded to let an AI agent build their first app idea on make.fun.

## The line

> Just describe the app idea you've talked about for months in plain words, and an AI agent on make.fun will build you a real, working first version to try — no coding, just your idea alive at last.

## Layout

- `main.ts` — the entrypoint: validates the line (1–240 characters, not
  only whitespace, a single line, a single sentence ending in `.` `!` or
  `?`) and writes it to `/output/entry.txt`. No dependencies, no network.
- `LICENSE` — MIT.
