# Second Brain

A personal productivity web app — tasks, projects, routines, mood board, and thoughts in one place. Mobile-first, installable as a PWA on iPhone.

## Stack

- **React + Vite + TypeScript**
- **Tailwind CSS** — dark theme, mobile-first
- **Supabase** — auth + Postgres database (RLS per user)
- **TanStack Query** — server state
- **Vercel** — hosting

## Getting started

1. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
2. `npm install`
3. `npm run dev` → [http://localhost:5173](http://localhost:5173)

## Features (in progress)

- Today View — calendar, priority tasks, daily routine
- Tasks — priority / today / general lists
- Projects — with sub-tasks and Notion deep links
- Routine — daily/weekly/custom habits with streaks
- Mood Board — games, films, series watch/play lists
- Thoughts — sectioned note capture
- Google Calendar integration
- PWA — installable from Safari on iPhone
