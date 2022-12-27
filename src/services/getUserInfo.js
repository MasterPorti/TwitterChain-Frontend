const URL =
  "http://localhost:1000/api/user/admin-admin-admin-admin-admin-admin-admin-admin-admin-admin-admin-admin";

export default async function getTrending(seed) {
  const req = await fetch(`${URL}`);
  const data = await req.json();
  return data;
}
