"use client";

import { useEffect, useState } from "react";

const DEMO_URL = "https://demo.initiativelabs.cc";

type Status = { state: string; ready: boolean };

const LABELS: Record<string, string> = {
  stopped: "Stopped. Start it to run the demo (about 1 to 2 minutes).",
  pending: "Starting the instance…",
  running: "Instance running, starting the live service…",
  stopping: "Stopping (it stops itself after 20 idle minutes). You can start it again shortly.",
  unknown: "Checking…",
};

export function DemoPanel({ token }: { token: string }) {
  const [status, setStatus] = useState<Status>({ state: "unknown", ready: false });
  const [starting, setStarting] = useState(false);

  const [poke, setPoke] = useState(0); // bump to poll right away (after Start)

  useEffect(() => {
    let cancelled = false;
    async function poll() {
      const res = await fetch("/api/ivision/status", { cache: "no-store" });
      if (!cancelled && res.ok) setStatus(await res.json());
    }
    const first = setTimeout(poll, 0);
    const timer = setInterval(poll, status.ready ? 30000 : 4000);
    return () => {
      cancelled = true;
      clearTimeout(first);
      clearInterval(timer);
    };
  }, [status.ready, poke]);

  async function start() {
    setStarting(true);
    await fetch("/api/ivision/start", { method: "POST" });
    setStarting(false);
    setPoke((n) => n + 1);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4 border-2 border-border p-6">
        <span
          aria-hidden
          className={`h-3 w-3 rounded-full ${status.ready ? "bg-accent" : status.state === "stopped" ? "bg-border" : "animate-pulse bg-fg-muted"}`}
        />
        <p className="flex-1 text-[15px] text-fg" role="status" aria-live="polite">
          {status.ready ? "Live view ready." : LABELS[status.state] ?? status.state}
        </p>
        {status.state === "stopped" && (
          <button
            type="button"
            onClick={start}
            disabled={starting}
            className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-fg disabled:opacity-50"
          >
            {starting ? "Starting…" : "Start the demo"}
          </button>
        )}
      </div>

      {status.ready && (
        <>
          <iframe
            title="Initiative Vision live view"
            src={`${DEMO_URL}/?token=${token}`}
            className="h-[760px] w-full border-2 border-border bg-bg"
          />
          <a
            href={`${DEMO_URL}/?token=${token}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-fg-muted underline hover:text-accent"
          >
            Open the live view in its own tab
          </a>
        </>
      )}

      <div className="border-2 border-border p-6 text-[15px] leading-relaxed text-fg-muted">
        <p className="text-fg">Send it a drive from your computer</p>
        <p className="mt-2">
          Download the session data, then run the virtual Pi from the{" "}
          <a className="underline hover:text-accent" href="https://github.com/osfieldgaga/initiative-vision-aws">
            repository
          </a>
          . It asks for this page&apos;s password and uploads frames exactly as the car does.
        </p>
        <pre className="mt-4 overflow-x-auto bg-bg-raised p-4 font-mono text-[13px] text-fg">
          python src/scripts/virtual_pi.py &lt;session folder&gt; --demo
        </pre>
      </div>
    </div>
  );
}
