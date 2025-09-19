import { getSupabase } from "./supabase.server";

export async function verifyLogin(email: string, password: string) {
  const supabase = getSupabase();
  return supabase.signInWithPassword(email, password);
}
