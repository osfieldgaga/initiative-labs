import { AssumeRoleCommand, STSClient } from "@aws-sdk/client-sts";
import { EC2Client, StartInstancesCommand } from "@aws-sdk/client-ec2";
import { awsConfig, instanceId, judgeConfig, passwordOk } from "@/lib/ivision";

// For a judge's virtual Pi (src/scripts/virtual_pi.py --demo): the demo password buys one hour
// of AWS credentials that can only upload frames under live/ and send to the frame queue,
// exactly what the real Pi can do. It also starts the instance.
export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({}));
  if (!passwordOk(password)) {
    return Response.json({ error: "Wrong password" }, { status: 401 });
  }
  const judge = judgeConfig();
  const sts = new STSClient(awsConfig());
  const { Credentials } = await sts.send(
    new AssumeRoleCommand({
      RoleArn: judge.roleArn,
      RoleSessionName: `judge-${Date.now()}`,
      DurationSeconds: 3600,
    }),
  );
  await new EC2Client(awsConfig()).send(new StartInstancesCommand({ InstanceIds: [instanceId()] }));
  return Response.json({
    accessKeyId: Credentials?.AccessKeyId,
    secretAccessKey: Credentials?.SecretAccessKey,
    sessionToken: Credentials?.SessionToken,
    expiration: Credentials?.Expiration,
    region: "us-east-1",
    bucket: judge.bucket,
    queueUrl: judge.queueUrl,
  });
}
