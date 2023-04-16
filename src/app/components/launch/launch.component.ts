import { Component } from '@angular/core';

import { MockAuthenticateService } from '../../services/mock-authenticate.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['launch.component.scss']
})
export class LaunchComponent {

  constructor(
    private authenticateService: MockAuthenticateService,
  ) {
    console.log('init');
  }

  launch(): void {
    this.authenticateService.launch();
  }

}
