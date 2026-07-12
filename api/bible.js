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

    res.status(response.status).json(data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
