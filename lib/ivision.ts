import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { awsCredentialsProvider } from "@vercel/functions/oidc";

// Initiative Vision live demo (competition entry). The EC2 instance serves the live view at
// DEMO_URL behind a signed token; tokens here use the same format and secret as live_view.py:
// "<expiry unix seconds>.<hex HMAC-SHA256(LIVE_TOKEN_SECRET, expiry)>".

export const DEMO_URL = "https://demo.initiativelabs.cc";
export const SESSION_COOKIE = "ivd";
export const SESSION_HOURS = 2;
export const REGION = "us-east-1";

function env(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

export const instanceId = () => env("IVISION_INSTANCE_ID");

function sign(expiry: string): string {
  return createHmac("sha256", env("LIVE_TOKEN_SECRET")).update(expiry).digest("hex");
}

export function makeToken(hours = SESSION_HOURS): string {
  const expiry = String(Math.floor(Date.now() / 1000 + hours * 3600));
  return `${expiry}.${sign(expiry)}`;
}

export function tokenValid(token: string | undefined): boolean {
  if (!token) return false;
  const [expiry, sig] = token.split(".");
  if (!expiry || !sig || !/^\d+$/.test(expiry)) return false;
  const a = Buffer.from(sig);
  const b = Buffer.from(sign(expiry));
  return a.length === b.length && timingSafeEqual(a, b) && Number(expiry) > Date.now() / 1000;
}

export function passwordOk(password: unknown): boolean {
  const expected = process.env.IVISION_DEMO_PASSWORD;
  if (!expected || typeof password !== "string") return false;
  const a = createHash("sha256").update(password).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

// AWS access without stored keys: Vercel's OIDC token is exchanged for the role in AWS_ROLE_ARN.
export function awsConfig() {
  return { region: REGION, credentials: awsCredentialsProvider({ roleArn: env("AWS_ROLE_ARN") }) };
}

export const judgeConfig = () => ({
  roleArn: env("IVISION_JUDGE_ROLE_ARN"),
  queueUrl: env("IVISION_QUEUE_URL"),
  bucket: process.env.IVISION_BUCKET ?? "initiative-vision-1",
});
