import { cookies } from "next/headers";
import { makeToken, passwordOk, SESSION_COOKIE, SESSION_HOURS } from "@/lib/ivision";

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({}));
  if (!passwordOk(password)) {
    return Response.json({ error: "Wrong password" }, { status: 401 });
  }
  (await cookies()).set(SESSION_COOKIE, makeToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_HOURS * 3600,
  });
  return Response.json({ ok: true });
}
