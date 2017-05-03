import { NgModule } from '@angular/core';
import { UserPage } from './user';
import { IonicPageModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    UserPage
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(UserPage)
  ],
  entryComponents: [
    UserPage
  ]
})
export class UserPageModule {}


