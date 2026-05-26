export default async function handler(req, res) {
  try {
    const reference = req.query.reference || 'John 3:16';

    const apiKey = process.env.BIBLE_API_KEY;

    const bibleId = 'de4e12af7f28f599-02';

    const url = `https://api.scripture.api.bible/v1/bibles/${bibleId}/search?query=${encodeURIComponent(reference)}`;

    const response = await fetch(url, {
      headers: {
        'api-key': apiKey
      }
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: 'Bible API failed',
      details: error.message
    });
  }
}
