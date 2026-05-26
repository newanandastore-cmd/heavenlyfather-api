export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const question = req.body?.question || 'Hello';

    const response = {
      success: true,
      reply: `You asked: ${question}`,
      message: 'Heavenly Father API working successfully'
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}