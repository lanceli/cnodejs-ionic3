import { NgModule } from '@angular/core';
import { TopicPage } from './topic';
import { IonicPageModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    TopicPage
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(TopicPage)
  ],
  entryComponents: [
    TopicPage
  ]
})
export class TopicPageModule {}
