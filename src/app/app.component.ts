import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  title = 'PocketLab HMH Ed Integration Sandbox';

  constructor() {
    console.log('init');
  }

}
