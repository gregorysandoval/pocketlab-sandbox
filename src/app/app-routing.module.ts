import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LaunchComponent } from './components/launch/launch.component';
import { AuthorizeComponent } from '@components/authorize/authorize.component';

const routes: Routes = [
  { path: '', redirectTo: '/launch', pathMatch: 'full' },
  { path: 'launch', component: LaunchComponent },
  { path: 'authorize', component: AuthorizeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
