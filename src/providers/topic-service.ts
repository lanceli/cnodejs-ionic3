import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Topic } from '../pages/topics/topic';

/*
  Generated class for the TopicService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TopicService {
  private topicsUrl: string = 'https://cnodejs.org/api/v1/topics'
  private topicUrl: string = 'https://cnodejs.org/api/v1/topic'
  private currentTab: string = 'all'
  private nextPage: number = 2
  //private hasNextPage: boolean = true
  topics: Topic[] = []

  constructor(public http: Http) {
    console.log('Hello TopicService Provider');
  }

  getTopicById(id: string): Promise<Topic>{
    return this.http.get(`${this.topicUrl}/${id}`)
      .toPromise()
      .then(
        (resposne) => {
          console.log(resposne);
          return resposne.json().data as Topic
        }
      )
  }
  getTopics(tab: string = 'all', page: number = 1, limit: number = 40): Promise<Topic[]> {
    return this.http.get(`${this.topicsUrl}?tab=${tab}&page=${page}&limit=${limit}`)
      .toPromise()
      .then(
        (resposne) => {
          console.log(resposne);
          return resposne.json().data as Topic[]
        }
      );
  }

  pagination(): Promise<Topic[]> {
    console.log(`current tab: ${this.currentTab}, next page ${this.nextPage}`);
    return this.getTopics(this.currentTab, this.nextPage).then(
      (topics) => {
        this.nextPage++;
        this.topics = this.topics.concat(topics)
        return Promise.resolve(this.topics);
      }
    );
  }

}
