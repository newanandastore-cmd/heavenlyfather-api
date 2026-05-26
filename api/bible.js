export default async function handler(req, res) {
  const { reference = "John 3:16" } = req.query;

  try {
    const response = await fetch(
      `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/passages/${encodeURIComponent(reference)}`,
      {
        headers: {
          "x-api-key": process.env.BIBLE_API_KEY
        },
      }
    );

    const text = await response.text();

    res.status(200).send(text);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
