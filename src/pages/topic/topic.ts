import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { Topic } from '../../classes/topic';
import { TopicService } from '../../providers/topic-service';
/*
  Generated class for the Topic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage({
  name: 'topic',
  segment: 'topic/:id'
})
@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html',
  providers: [TopicService]
})
export class TopicPage {

  topic: Topic

  constructor(public navCtrl: NavController, public navParams: NavParams, private topicService: TopicService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicPage');
  }

  ngOnInit(): void {
    this.getTopic()
  }

  doRefresh(refresher): void {
    this.getTopic().then(
      (topic) => {
        refresher.complete();
      }
    );
  }

  getTopic(): Promise<void> {
    return this.topicService.getTopicById(this.navParams.get('id')).then(
      (topic) => {
        this.topic = topic
        console.log(this.topic)
      }
    );
  }

  gotoUser(loginName: String): void {
    console.log('goto user', loginName);
    this.navCtrl.push('user', {loginName: loginName})
  }
}
