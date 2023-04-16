import { Injectable, Inject } from '@angular/core';

import { UrlUtils as UU } from '@utils/url-utils';

import { mockAuth } from '@config/app.config';
import { environment } from '@config/environment';

@Injectable({
  providedIn: 'root'
})
export class MockAuthenticateService {

  constructor(
    @Inject('DOCUMENT') private document: Document,
  ) {
    console.log('init');
  }

  validate(): void {
    const url = UU.constructUrl(environment.authUrl, mockAuth);
    console.log(`redirect: ${url}`);
    // this.document.location.href = url;
  }

  launch(): void {
    // Parse response received at /authorize
    // Redirect to Tool launch endpoint
  }

}