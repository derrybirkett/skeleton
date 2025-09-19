# Agent Web (Remix + Tailwind "Shadcn-style" + Supabase Stub)

- **UI**: Tailwind via CDN to keep the skeleton simple. Components use Shadcn-like utility classes.
- **Auth**: In-memory dummy users until `SUPABASE_URL` and `SUPABASE_ANON_KEY` are set.
- **Framework**: Remix with Vite dev server.

## Run in Docker (recommended)
```bash
docker compose -f ../../infra/docker-compose.yml up --build
```

Then visit http://localhost:3000 and sign in with:
- Email: `demo@demo.com`
- Password: `demo123`

## Local (without Docker)
```bash
npm install
npm run dev
```

## Next Steps
- Replace Tailwind CDN with Tailwind + shadcn/ui setup.
- Add `@supabase/supabase-js` and wire real auth.
- Move marketing site to a separate route group or app.
