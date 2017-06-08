import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

import { TabsService } from '../../providers/tabs-service';
import { TopicService } from '../../providers/topic-service';
import { UserService } from '../../providers/user-service';
import { Tab } from '../../classes/tab';

/**
 * Generated class for the NewTopicModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-topic-modal',
  templateUrl: 'new-topic-modal.html',
  providers: [
    UserService,
    TabsService,
    TopicService
  ]
})
export class NewTopicModal {

  tabs: Tab[];
  newTopicData: {
    tab: 'share',
    title: '',
    content: ''
  };
  newTopicId: '';

  constructor(
      private userService: UserService,
      private tabsService: TabsService,
      private topicService: TopicService,
      public viewCtrl: ViewController
    ) {
    this.tabs = this.tabsService.getTabs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTopicModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  saveNewTopic() {
    console.log('new topic data:', this.newTopicData);
    this.topicService.saveNewTopic(this.newTopicData).then((response) => {
      this.newTopicId = response['topic_id'];
      //$scope.closeNewTopicModal();
    });
  };

}
