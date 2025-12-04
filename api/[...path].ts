// api/[...path].ts
export default {
  async fetch(request: Request) {
    const url = new URL(request.url);

    const apiKey = process.env.RAWG_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'RAWG_API_KEY not configured' }),
        { status: 500, headers: { 'content-type': 'application/json' } }
      );
    }

    // strip leading /api/
    const rawPath = url.pathname.replace(/^\/api\/?/, '');
    const target = new URL(`https://api.rawg.io/api/${rawPath}`);

    // copy existing query params except any internal ones
    url.searchParams.forEach((value, key) => {
      if (key !== 'path') target.searchParams.set(key, value);
    });

    target.searchParams.set('key', apiKey);

    const upstream = await fetch(target.toString(), {
      method: request.method,
      body: request.method === 'GET' || request.method === 'HEAD'
        ? undefined
        : await request.arrayBuffer(),
      headers: request.headers,
    });

    return upstream;
  },
};
