import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { UserPage } from '../user/user';
import { Topic } from '../topics/topic';
import { TopicService } from '../../providers/topic-service';
/*
  Generated class for the Topic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage({
	name: 'topic'
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

	getTopic(): void {
		this.topicService.getTopicById(this.navParams.get('id')).then(
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
