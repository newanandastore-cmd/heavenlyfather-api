export default async function handler(req, res) {

  const translations = {
    NIV: "78a9f6124f344018-01",
    NKJV: "63097d2a0a2f7db3-01",
    KJV: "a6aee10bb058511c-01"
  };

  const bible = req.query.bible || "NIV";
  const book = req.query.book || "JHN";

  const bibleId = translations[bible];

  try {

    const response = await fetch(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${book}/chapters`,
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
