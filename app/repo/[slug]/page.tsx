import repoList from "../../../repos.json";
export const dynamicParams = false;
// repoList is [ "twitter","microsoft","google","amazon"]
export async function generateStaticParams() {
  return repoList.map((repo) => ({
    slug: repo,
  }));
}
async function getDataServer(repo: string) {
  //2 seconds delay, just for explaination
  await timeout(2000);
  const res = await fetch("https://api.github.com/users/" + repo, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data : " + res.status);
  }
  var x = await res.json();
  return x;
}
//never use in production
function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

export default async function RepoDetail({
  params,
}: {
  params: { slug: string };
}) {
  const profile = await getDataServer(params.slug);
  return (
    <main className="p-10 ">
      <table className="table-fixed">
        <tbody>
          <tr>
            <th className="border border-slate-300 p-3">Login</th>
            <td className="border border-slate-300 p-3">{profile.login}</td>
          </tr>
          <tr>
            <th className="border border-slate-300 p-3">Followers</th>
            <td className="border border-slate-300 p-3">{profile.followers}</td>
          </tr>
          <tr>
            <th className="border border-slate-300 p-3">Image</th>
            <td className="border border-slate-300 p-3">
              <img
                src={profile.avatar_url}
                style={{ width: 100, height: "auto" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
