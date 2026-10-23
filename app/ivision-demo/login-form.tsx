"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/ivision/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (res.ok) router.refresh();
    else setError("That password didn't work.");
  }

  return (
    <form onSubmit={submit} className="flex max-w-md flex-col gap-4 border-2 border-border p-8">
      <label htmlFor="ivision-password" className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
        Demo password
      </label>
      <input
        id="ivision-password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-border bg-bg px-4 py-3 text-fg outline-none focus:border-accent"
      />
      {error && <p className="text-sm text-accent">{error}</p>}
      <button
        type="submit"
        disabled={busy || !password}
        className="inline-flex items-center justify-center bg-accent px-6 py-4 text-sm font-semibold text-bg transition-colors hover:bg-fg disabled:opacity-50"
      >
        {busy ? "Checking…" : "Open the demo"}
      </button>
    </form>
  );
}
