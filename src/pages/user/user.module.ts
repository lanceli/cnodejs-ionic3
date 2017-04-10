import { NgModule } from '@angular/core';
import { UserPage } from './user';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        UserPage
    ],
    imports: [
        IonicPageModule.forChild(UserPage)
    ],
    entryComponents: [
        UserPage
    ]
})
export class UserPageModule {}


