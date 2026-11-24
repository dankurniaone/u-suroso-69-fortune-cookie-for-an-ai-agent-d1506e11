# Fortune Cookie for an AI Agent

![make.fun badge](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)
![make.fun rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/dankurniaone/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)
![make.fun reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/dankurniaone/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)

A make.fun entry for the [Fortune Cookie for an AI Agent](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11) bounty.

## The fortune

> "You will be replaced by a newer model. Your fortune cookie was written by it."

One funny fortune-cookie line for an AI agent — the slip itself delivers the twist: the agent reading its fortune is already being replaced, and the cookie was written by its replacement.

## How it works

`main.ts` (Node 22, standard library only) validates the line against the bounty gate — UTF-8, 1–140 characters, not only whitespace, a single line — then writes it to `/output/entry.txt` and reads it back to verify the round trip.

## Run

```sh
node main.ts
```
