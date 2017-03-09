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
  private topicsUrl = 'https://cnodejs.org/api/v1/topics'
  private topicUrl = 'https://cnodejs.org/api/v1/topic'
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
          return resposne.json().data as Topic[]
        }
      )
  }
  getTopics(): Promise<Topic[]> {
    if (this.topics.length) {
      return Promise.resolve(this.topics)
    } else {
      return this.http.get(this.topicsUrl)
        .toPromise()
        .then(
          (resposne) => {
            console.log(resposne);
            return resposne.json().data as Topic[]
          }
        )
    }
  }

}
