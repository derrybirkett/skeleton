export type SupabaseLike = {
  signInWithPassword: (email: string, password: string) => Promise<boolean>;
};

const DUMMY_USERS = [
  { email: "demo@demo.com", password: "demo123" },
  { email: "alice@example.com", password: "password" }
];

function envSet() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY);
}

export function getSupabase(): SupabaseLike {
  if (!envSet()) {
    return {
      async signInWithPassword(email: string, password: string) {
        return DUMMY_USERS.some(u => u.email === email && u.password === password);
      }
    };
  }

  return {
    async signInWithPassword(email: string, password: string) {
      // Placeholder: accept any non-empty combo when env present
      return Boolean(email && password);
    }
  };
}
