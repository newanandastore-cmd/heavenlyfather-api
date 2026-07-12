export default async function handler(req, res) {
  const { reference = "John 3:16" } = req.query;

  try {
    const response = await fetch(
      `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=${encodeURIComponent(reference)}`,
      {
        headers: {
          "api-key": process.env.API_BIBLE_KEY
        }
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
}
