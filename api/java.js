// api/add.js
function applyCorsHeaders(res) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  res.setHeader('Access-Control-Allow-Credentials', 'true');
}
export default async (req, res) => {
  applyCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    // Return 200 to indicate preflight request is allowed
    res.status(200).end();  // No further processing needed
    return;
  }
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { id, title, content, infobox } = req.body;
  
    try {
      const result = await client.put('pages', {
        id,
        title,
        content,
        infobox,
      });
  
      res.status(200).json({ success: result.success });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };
  
