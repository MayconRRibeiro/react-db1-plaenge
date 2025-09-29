export async function fetchPhoto(id) {
  try {
    const res = await fetch(`https://picsum.photos/id/${id}/info`);

    if (res.ok === true) return { error: null, response: await res.json() };

    throw new Error(`Error fetching photo #${id}`);
  } catch (e) {
    return { error: e, response: null };
  }
}
