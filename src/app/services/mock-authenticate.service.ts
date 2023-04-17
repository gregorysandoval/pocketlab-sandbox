import { Injectable, Inject } from '@angular/core';

import { UrlUtils as UU } from '@utils/url-utils';

import { mockToolValidationRequest, mockToolLaunchRequest } from '@config/app.config';
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

  validate() {
    this._redirect(UU.constructUrl(environment.authUrl, mockToolValidationRequest));
  }

  launch() {
    this._redirect(UU.constructUrl(environment.launchUrl, mockToolLaunchRequest));
  }
  
  private _redirect(url: string) {
    console.log(`redirect: ${url}`);
    // TODO: add 302 header
    // this.document.location.href = url;
  }

}