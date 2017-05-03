import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Message, Messages } from '../classes/message';
import { UserService } from './user-service';

/*
  Generated class for the MessageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageService {
  private countUrl: string = 'https://cnodejs.org/api/v1/message/count'
  private messagesUrl: string = 'https://cnodejs.org/api/v1/messages'

  constructor(public http: Http, private userService: UserService) {
    console.log('Hello MessageService Provider');
  }

  getMessageCount(): Promise<any> {

    console.log('get messages count');
    let currentUser = this.userService.getCurrentUser();
    return this.http.get(this.countUrl, {
        params: {
          accesstoken: currentUser.accesstoken
        }
      }).toPromise().then(
        (resposne) => {
          console.log(resposne);
          return resposne.json().data;
        }
      )
  }

  getMessages(): Promise<Messages> {
    console.log('get messages');
    let currentUser = this.userService.getCurrentUser();
    return this.http.get(this.messagesUrl, {
        params: {
          accesstoken: currentUser.accesstoken
        }
      }).toPromise().then(
        (resposne) => {
          return resposne.json().data as Messages;
        }
    );
  }

}
