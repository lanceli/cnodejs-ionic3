import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTopicModal } from './new-topic-modal';

console.log('aaa,', NewTopicModal)
@NgModule({
  declarations: [
    NewTopicModal,
  ],
  imports: [
    IonicPageModule.forChild(NewTopicModal)
  ],
  exports: [
    NewTopicModal
  ]
})
export class NewTopicModalModule {}
