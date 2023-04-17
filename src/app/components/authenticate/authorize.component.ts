import { Component } from '@angular/core';

import { MockAuthenticateService } from '../../services/mock-authenticate.service';

import { environment } from '@config/environment';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
})
export class AuthenticateComponent {

  constructor(
    private authenticateService: MockAuthenticateService,
  ) {
    console.log('init');
    this._launch();
  }
  
  private _launch() {
    // TODO: receives validation response
    // Parse response (into state?) and redirect with launch request
    this.authenticateService.launch();
  }

}
