import { Injectable, Inject } from '@angular/core';

import { UrlUtils as UU } from '../utils/url-utils';

import { OIDC } from '../model/oidc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MockAuthenticateService {

  constructor(
    @Inject('DOCUMENT') private document: Document,
  ) {
    console.log('init');
  }

  launch(): void {
    const url = UU.constructUrl(environment.toolUrl, OIDC.mockAuth);
    console.log(`redirect: ${url}`);
    // this.document.location.href = url;
  }

}