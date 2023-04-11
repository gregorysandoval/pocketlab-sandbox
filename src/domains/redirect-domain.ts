interface RedirectRequest {
  destination?: string;
}

interface RedirectResponse {
  location: string;
}

export class RedirectDomain {

  redirect(request: RedirectRequest): RedirectResponse {
    console.log(request);
    return {
      location: 'http://www.google.com'
    };
  }

}
