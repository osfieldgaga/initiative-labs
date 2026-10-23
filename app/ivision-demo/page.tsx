import type { Metadata } from "next";
import { cookies } from "next/headers";
import { SESSION_COOKIE, tokenValid } from "@/lib/ivision";
import { LoginForm } from "./login-form";
import { DemoPanel } from "./demo-panel";

export const metadata: Metadata = {
  title: "Initiative Vision demo",
  description: "Live demo of Initiative Vision for the OpenCV AI Competition 2026.",
  robots: { index: false, follow: false },
};

export default async function IvisionDemoPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const signedIn = tokenValid(token);
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-content px-content-x pb-[60px] pt-[100px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
          OpenCV AI Competition 2026 · live demo
        </div>
        <h1 className="mt-9 max-w-[22ch] text-display-md font-medium text-balance">
          Initiative Vision
        </h1>
        <p className="mt-6 max-w-[66ch] text-lg leading-relaxed text-fg-muted text-pretty">
          Lane, vehicle and sign perception from a car, processed live on AWS with OpenCV 5.
          Start the cloud side here, then run the virtual Pi on your computer to send it a
          recorded drive.
        </p>
      </div>
      <div className="mx-auto w-full max-w-content px-content-x pb-[90px]">
        {signedIn ? <DemoPanel token={token!} /> : <LoginForm />}
      </div>
    </div>
  );
}
