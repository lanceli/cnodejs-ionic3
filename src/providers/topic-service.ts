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
  topics: Topic[] = [
  { id: '1', title: 'asd1' },
  { id: '2', title: 'asd2' },
  { id: '3', title: 'asd3' },
  { id: '4', title: 'asd4' },
  { id: '5', title: 'asd5' },
  { id: '6', title: 'asd6' }
  ]

  constructor(public http: Http) {
    console.log('Hello TopicService Provider');
  }

  getTopics(): Promise<Topic[]> {
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
