export default async function fetchUrl(url) {
  const res = await fetch(url);
  return res.json();
}
