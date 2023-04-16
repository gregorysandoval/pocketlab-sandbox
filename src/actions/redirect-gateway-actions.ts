import { RedirectDomain } from '../domains/redirect-domain';

export function redirectHandler(event: any, _context: any, callback: any): void {
  event = event as any;
  console.log(event);
  const headers = new RedirectDomain().redirect(parseParams(event));
  callback(null, {
    isBase64Encoded: false,
    statusCode: 302,
    headers: headers,
  });
}

function parseParams(event: any): any {
  let params: any;
  try {
    if (event.httpMethod === 'GET') {
      params = event.queryStringParameters || {};
    } else {
      params = JSON.parse(event.body) || {};
    }
  } catch (e) {
    console.error(e);
    console.debug(JSON.stringify(event));
  }
  console.log('Parsed params');
  console.log(params);
  return params;
}
