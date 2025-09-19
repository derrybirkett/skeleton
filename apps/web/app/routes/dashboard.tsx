export default function Dashboard() {
  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
        <p className="text-neutral-600">
          🎉 You're logged in via dummy auth. When Supabase env vars are set, the app will switch to Supabase auth.
        </p>
      </div>
    </main>
  );
}
