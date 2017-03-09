import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Topic } from './topic';

import { TopicPage } from '../topic/topic';
import { TopicService } from '../../providers/topic-service';

/*
  Generated class for the Topics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
	providers: [TopicService]
})
export class TopicsPage {

  topic: Topic = {
    id: '1',
    title: 'asf'
  };
  topics: Topic[] = [
  { id: '1', title: 'asd1' },
  { id: '2', title: 'asd2' },
  { id: '3', title: 'asd3' },
  { id: '4', title: 'asd4' },
  { id: '5', title: 'asd5' },
  { id: '6', title: 'asd6' }
];


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
		this.navCtrl.push(TopicPage)
	}

	getTopics(): void {
		this.topicService.getTopics().then(
			topics => this.topics = topics
		);
	}

}
