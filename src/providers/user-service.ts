import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../classes/user';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  private userUrl: string = 'https://cnodejs.org/api/v1/user'

  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  getByLoginName(loginName: string): Promise<User> {
    return this.http.get(`${this.userUrl}/${loginName}`)
      .toPromise()
      .then(
        (resposne) => {
          console.log(resposne);
          return resposne.json().data as User
        }
      )
  }

}
