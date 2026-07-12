export default async function handler(req, res) {

  res.status(200).json([
    {
      id: "78a9f6124f344018-01",
      code: "NIV",
      name: "New International Version",
      default: true
    },
    {
      id: "63097d2a0a2f7db3-01",
      code: "NKJV",
      name: "New King James Version"
    },
    {
      id: "a6aee10bb058511c-01",
      code: "KJV",
      name: "King James Version"
    }
  ]);

}
