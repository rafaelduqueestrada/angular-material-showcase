import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './core/home/home.component';
import {OpenDialogExampleComponent} from './material/dialog/open-dialog-example.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dialog', component: OpenDialogExampleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
