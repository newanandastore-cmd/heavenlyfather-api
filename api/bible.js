export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://rest.api.bible/v1/bibles",
      {
        headers: {
          "api-key": process.env.API_BIBLE_KEY
        }
      }
    );

    const data = await response.json();

    const result = data.data.filter(b =>
      b.name.includes("New International") ||
      b.name.includes("New King James") ||
      b.name.includes("King James")
    );

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
