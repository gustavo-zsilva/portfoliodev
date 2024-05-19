import { Client } from "get-pinned-repos";

export async function GET() {
  Client.setToken(process.env.GITHUB_TOKEN);
  const pinnedRepos = await Client.getPinnedRepos("gustavo-zsilva");

  return Response.json({ data: pinnedRepos });
}
