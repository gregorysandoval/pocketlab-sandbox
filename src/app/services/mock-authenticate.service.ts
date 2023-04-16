import { Injectable, Inject } from '@angular/core';

import { UrlUtils as UU } from '@utils/url-utils';

import { mockAuth, mockLaunch } from '@config/app.config';
import { environment } from '@config/environment';

@Injectable({
  providedIn: 'root'
})
export class MockAuthenticateService {

  constructor(
    @Inject('DOCUMENT') private document: Document,
  ) {
    console.log('service init');
  }

  validate() {
    this._redirect(UU.constructUrl(environment.authUrl, mockAuth));
  }

  launch() {
    this._redirect(UU.constructUrl(environment.launchUrl, mockLaunch));
  }
  
  private _redirect(url: string) {
    console.log(`redirect: ${url}`);
    // this.document.location.href = url;
  }

}