import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { Topic } from '../../classes/topic';

import { TopicService } from '../../providers/topic-service';

/*
  Generated class for the Topics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@IonicPage({
  name: 'topics',
  segment: 'topics/:tab'
})
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
  providers: [TopicService]
})
export class TopicsPage {

  topics: Topic[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private topicService: TopicService) {
  }

  ngOnInit(): void {
    let newTab = this.navParams.get('tab');
    if (newTab) {
      console.log('changing tab');
      this.topicService.currentTab = newTab;
    }
    console.log('current tab', this.topicService.currentTab);
    this.doRefresh();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsPage');
  }

  onSelect(topic: Topic): void {
    console.log(topic)
    this.navCtrl.push('topic', {id: topic.id})
  }

  getTopics(): void {
    this.topicService.getTopics().then(
      topics => this.topics = topics
    );
  }

  doRefresh(refresher = undefined): void {
    console.log('do refresh')
    this.topicService.refresh().then(
      (topics) => {
        this.topics = topics;
        if (refresher) {
          refresher.complete();
        }
      }
    );
  }

  loadMore(infiniteScroll): void {
    console.log('do infinite')
    this.topicService.pagination().then(
      (topics) => {
        this.topics = this.topics.concat(topics)
        infiniteScroll.complete();
      }
    );
  }

}
