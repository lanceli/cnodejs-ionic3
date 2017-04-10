import { NgModule } from '@angular/core';
import { TopicsPage } from './topics';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        TopicsPage
    ],
    imports: [
        IonicPageModule.forChild(TopicsPage)
    ],
    entryComponents: [
        TopicsPage
    ]
})
export class TopicsPageModule {}

