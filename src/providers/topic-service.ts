import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from '../providers/config-service';
import { Topic } from '../classes/topic';

import { UserService } from './user-service';

/*
  Generated class for the TopicService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TopicService {
  private topicsUrl: string
  private topicUrl: string
  currentTab: string = 'all'
  private nextPage: number = 2
  private hasNextPage: boolean = true
  topics: Topic[] = []

  constructor(
      public http: Http,
      public configService: ConfigService,
      private userService: UserService
    ) {
    console.log('Hello TopicService Provider');
    this.topicsUrl = configService.api + 'topics';
    this.topicUrl = configService.api + 'topic';
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

  refresh(): Promise<Topic[]> {
    console.log(`current tab: ${this.currentTab}, page number 1`);
    return this.getTopics(this.currentTab, 1).then(
      (topics) => {
        this.nextPage = 2
        this.hasNextPage = true
        this.topics = topics
        return Promise.resolve(this.topics);
      }
    );
  }

  pagination(): Promise<Topic[]> {
    console.log(`current tab: ${this.currentTab}, next page number ${this.nextPage}`);
    return this.getTopics(this.currentTab, this.nextPage).then(
      (topics) => {
        if (topics.length < 10) {
          this.hasNextPage = false
        }
        this.nextPage++;
        this.topics = this.topics.concat(topics)
        return Promise.resolve(this.topics);
      }
    );
  }
  saveNewTopic(newTopicData) {
    return this.userService.getCurrentUser().then((currentUser) => {
      return this.http.post(`${this.topicsUrl}?accesstoken=${currentUser.accesstoken}`, newTopicData).toPromise()
    })
  }

}
