export default async function handler(req, res) {

  const translations = {
    NIV: "78a9f6124f344018-01",
    NKJV: "63097d2a0a2f7db3-01",
    KJV: "a6aee10bb058511c-01"
  };

  const bible = req.query.bible || "NIV";
  const reference = req.query.reference || "John 3:16";

  const bibleId = translations[bible];

  if (!bibleId) {
    return res.status(400).json({
      success: false,
      message: "Invalid Bible translation"
    });
  }

  try {

    const response = await fetch(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/search?query=${encodeURIComponent(reference)}`,
      {
        headers: {
          "api-key": process.env.API_BIBLE_KEY
        }
      }
    );

    const data = await response.json();

    res.status(200).json({
      success: true,
      translation: bible,
      reference,
      data
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

}
