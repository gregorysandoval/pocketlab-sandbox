export module UrlUtils {

  export interface Request {
    pageName?: string;
    params?: QueryParams
  }

  export interface QueryParams {
    [value: string]: string;
  }

  export function parseUrl(url: string): Request {
    if (!url) {
      return {};
    }
    const segments = url.split('/');
    return {
      pageName: segments[segments.length - 1].split('?')[0]
    };
  }

  export function constructUrl(baseUrl: string, params?: QueryParams): string {
    let url = baseUrl;
    if (params) {
      url += Object.keys(params).map(p => p + '=' + params[p]).join('&');
    }
    return url;
  }

}
