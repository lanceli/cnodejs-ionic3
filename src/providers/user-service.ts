import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from './config-service';
import { User } from '../classes/user';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  private userUrl: string
  private authUrl: string
  private user: User
  private storageKey = 'user'

  constructor(public http: Http, public storage: Storage, public configService: ConfigService) {
    console.log('Hello UserService Provider');
    this.userUrl = configService.api + 'user';
    this.authUrl = configService.api + 'accesstoken';
  }

  getCurrentUser(): Promise<User> {
    console.log('current user:', this.user);
    if (this.user) {
      return new Promise((resolve, reject) => {
        resolve(this.user);
      });
    } else {
      return this.storage.get(this.storageKey).then((user) => {
        console.log('user storage', user);
        this.user = user;
        return this.user;
      });
    }
  }

  getByLoginName(loginName: string): Promise<User> {
    return this.http.get(`${this.userUrl}/${loginName}`)
      .toPromise()
      .then(
        (resposne) => {
          console.log(resposne);
          return resposne.json().data as User;
        }
      )
  }

  login(accesstoken: string): Promise<User> {
    let body = JSON.stringify({
      accesstoken: accesstoken
    });
    let headers = new Headers({
      'content-type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.authUrl, body, options).toPromise().then((response) => {
      //$log.debug('post accesstoken:', response);
      let authResp  = response.json();
      this.user = authResp as User;
      return this.getByLoginName(authResp.loginname).then((user) => {
        this.user = user;
        this.user.id = authResp.id;
        this.user.accesstoken = accesstoken;
        this.user.loginname = authResp.loginname;

        this.storage.ready().then(() => {
          this.storage.set(this.storageKey, user);
        });
        return this.user;
      });
    });
  }
}
