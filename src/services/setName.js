const URL = "http://localhost:1000/api/users/";

export default async function setName(seed, name) {
  const res = await fetch(`${URL}${seed}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({ name: name }),
  });
  const data = await res.json();
  return data;
}
