import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { Topic } from './topic';

import { TopicPage } from '../topic/topic';
import { TopicService } from '../../providers/topic-service';

/*
  Generated class for the Topics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@IonicPage({
	name: 'topics'
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
		this.getTopics()
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
