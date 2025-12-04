import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { path } = request.query;
  const apiKey = process.env.RAWG_API_KEY;

  if (!apiKey) {
    return response.status(500).json({ error: 'API Key not configured' });
  }

  try {

    
    const targetUrl = `https://api.rawg.io/api/${Array.isArray(path) ? path.join('/') : path}`;
    
    const { method, body, query } = request;
    
    // Remove the 'path' query param which Vercel adds for the catch-all
    const queryParams = { ...query };
    delete queryParams.path;
    
    // Add the API key
    queryParams.key = apiKey;

    const res = await axios({
      method: method as any,
      url: targetUrl,
      params: queryParams,
      data: body,
      headers: {
        // Forward necessary headers, or just let axios handle it.
        // Be careful with host headers etc.
      }
    });

    response.status(res.status).send(res.data);
  } catch (error: any) {
    response.status(error.response?.status || 500).json(error.response?.data || { error: 'Internal Server Error' });
  }
}
