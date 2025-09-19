import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { verifyLogin } from "~/services/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const email = String(form.get("email") || "");
  const password = String(form.get("password") || "");

  const ok = await verifyLogin(email, password);
  if (ok) return redirect("/dashboard");
  return json({ error: "Invalid credentials (using dummy users). Try demo@demo.com / demo123" }, { status: 401 });
}

export default function Login() {
  const data = useActionData<typeof action>();
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-2xl font-semibold mb-1">Sign in</h1>
        <p className="text-sm text-neutral-600 mb-6">Demo uses in-memory users until Supabase is configured.</p>
        {data?.error && (
          <div className="mb-4 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
            {data.error}
          </div>
        )}
        <Form method="post" className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input name="email" type="email" required className="w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="demo@demo.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input name="password" type="password" required className="w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="demo123" />
          </div>
          <button className="w-full rounded-xl px-4 py-2 border border-neutral-800 hover:bg-neutral-900 hover:text-white transition">
            Sign in
          </button>
        </Form>
      </div>
    </main>
  );
}
