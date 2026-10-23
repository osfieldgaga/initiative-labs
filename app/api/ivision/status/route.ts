import { cookies } from "next/headers";
import { DescribeInstancesCommand, EC2Client } from "@aws-sdk/client-ec2";
import { awsConfig, DEMO_URL, instanceId, SESSION_COOKIE, tokenValid } from "@/lib/ivision";

// { state: "stopped" | "pending" | "running" | "stopping" | ..., ready: live view answering }
export async function GET() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!tokenValid(token)) return Response.json({ error: "Not signed in" }, { status: 401 });

  const ec2 = new EC2Client(awsConfig());
  const out = await ec2.send(new DescribeInstancesCommand({ InstanceIds: [instanceId()] }));
  const state = out.Reservations?.[0]?.Instances?.[0]?.State?.Name ?? "unknown";

  let ready = false;
  if (state === "running") {
    try {
      const res = await fetch(`${DEMO_URL}/metrics`, {
        headers: { Cookie: `lv_token=${token}` },
        signal: AbortSignal.timeout(3000),
        cache: "no-store",
      });
      ready = res.ok;
    } catch {
      ready = false; // booting: Caddy or the service isn't up yet
    }
  }
  return Response.json({ state, ready });
}
