import { Component } from '@angular/core';

import { MockAuthenticateService } from '../../services/mock-authenticate.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
})
export class AuthorizeComponent {

  constructor(
    private authenticateService: MockAuthenticateService,
  ) {
    console.log('init');
  }

  launch() {

  }

}
