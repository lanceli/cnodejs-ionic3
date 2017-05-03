import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from './config-service';
import { Message, Messages } from '../classes/message';
import { UserService } from './user-service';

/*
  Generated class for the MessageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageService {
  private countUrl: string
  private messagesUrl: string

  constructor(public http: Http, public configService: ConfigService, private userService: UserService) {
    console.log('Hello MessageService Provider');
    this.countUrl = this.configService.api + 'message/count';
    this.messagesUrl = this.configService.api + 'messages';
  }

  getMessageCount(): Promise<any> {

    console.log('get messages count');
    return this.userService.getCurrentUser().then((currentUser) => {
      return this.http.get(this.countUrl, {
          params: {
            accesstoken: currentUser.accesstoken
          }
        }).toPromise().then(
          (resposne) => {
            console.log(resposne);
            return resposne.json().data;
          }
       );
    });
  }

  getMessages(): Promise<Messages> {
    console.log('get messages');
    return this.userService.getCurrentUser().then((currentUser) => {
      return this.http.get(this.messagesUrl, {
          params: {
            accesstoken: currentUser.accesstoken
          }
        }).toPromise().then(
          (resposne) => {
            return resposne.json().data as Messages;
          }
      );
    });
  }

}
