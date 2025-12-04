import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Log incoming request details for debugging
  console.log('Incoming Request URL:', request.url);
  console.log('Incoming Query Params:', JSON.stringify(request.query));

  const { path } = request.query;
  const apiKey = process.env.RAWG_API_KEY;

  if (!apiKey) {
    console.error('API Key is missing in environment variables');
    return response.status(500).json({ error: 'API Key not configured' });
  }

  try {
    let pathStr = '';

    // Try to get path from Vercel's query param
    if (path) {
      pathStr = Array.isArray(path) ? path.join('/') : path;
    } 
    
    // Fallback: If path is undefined or empty, try to parse it from the URL
    if (!pathStr) {
      const url = new URL(request.url || '', `http://${request.headers.host}`);
      // Remove '/api/' prefix to get the target endpoint (e.g., 'games')
      pathStr = url.pathname.replace(/^\/api\/?/, '');
    }

    console.log('Resolved Path:', pathStr);

    if (!pathStr) {
        return response.status(400).json({ error: 'No endpoint specified' });
    }

    const targetUrl = `https://api.rawg.io/api/${pathStr}`;
    console.log('Forwarding to:', targetUrl);

    const { method, body, query } = request;
    
    // Prepare query params: remove 'path' and add 'key'
    const queryParams = { ...query };
    delete queryParams.path;
    queryParams.key = apiKey;

    const res = await axios({
      method: method as any,
      url: targetUrl,
      params: queryParams,
      data: body,
    });

    response.status(res.status).send(res.data);
  } catch (error: any) {
    console.error('Proxy Error:', error.message);
    if (error.response) {
        console.error('Upstream Status:', error.response.status);
        console.error('Upstream Data:', JSON.stringify(error.response.data));
        response.status(error.response.status).send(error.response.data);
    } else {
        response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
