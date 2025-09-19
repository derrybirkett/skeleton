import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-semibold mb-2">Welcome to Agent App</h1>
        <p className="text-sm text-neutral-600 mb-6">
          Marketing site placeholder. Go to the product app login.
        </p>
        <Link to="/login" className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-neutral-300 hover:bg-neutral-100">
          Go to Login
        </Link>
      </div>
    </main>
  );
}
