export default async function handler(req, res) {

  // -----------------------------
  // AI TEST ENDPOINT
  // -----------------------------
  if (req.url.includes('/api/ask')) {

    return res.status(200).json({
      success: true,
      reply: "Heavenly Father API working successfully"
    });

  }

  // -----------------------------
  // BIBLE SEARCH ENDPOINT
  // -----------------------------
  if (req.url.includes('/api/bible')) {

    try {

      const reference = req.query.reference || 'John 3:16';

      const bibleId = 'de4e12af7f28f599-02';

      const apiKey = process.env.BIBLE_API_KEY;

      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${encodeURIComponent(reference)}`,
        {
          headers: {
            'api-key': apiKey
          }
        }
      );

      const data = await response.json();

      return res.status(200).json(data);

    } catch (error) {

      return res.status(500).json({
        success: false,
        error: error.message
      });

    }

  }

  // -----------------------------
  // DEFAULT
  // -----------------------------
  return res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });

}
