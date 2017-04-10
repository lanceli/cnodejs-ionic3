import { NgModule } from '@angular/core';
import { TopicPage } from './topic';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        TopicPage
    ],
    imports: [
        IonicPageModule.forChild(TopicPage)
    ],
    entryComponents: [
        TopicPage
    ]
})
export class TopicPageModule {}
