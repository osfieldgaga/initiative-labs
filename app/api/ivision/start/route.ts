import { cookies } from "next/headers";
import { EC2Client, StartInstancesCommand } from "@aws-sdk/client-ec2";
import { awsConfig, instanceId, SESSION_COOKIE, tokenValid } from "@/lib/ivision";

export async function POST() {
  if (!tokenValid((await cookies()).get(SESSION_COOKIE)?.value)) {
    return Response.json({ error: "Not signed in" }, { status: 401 });
  }
  const ec2 = new EC2Client(awsConfig());
  const out = await ec2.send(new StartInstancesCommand({ InstanceIds: [instanceId()] }));
  return Response.json({ state: out.StartingInstances?.[0]?.CurrentState?.Name ?? "unknown" });
}
