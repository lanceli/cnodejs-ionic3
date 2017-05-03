import {Injectable} from '@angular/core';
declare const process: any; // Typescript compiler will complain without this
@Injectable()

export class ConfigService {
  public api:string;
  public token:string;
  constructor() {
    console.log(process);
    if (process.env.IONIC_ENV === 'prod') {
      this.api = 'https://cnodejs.org/api/v1/';
    } else {
      this.api = 'http://localhost:3000/api/v1/';
      this.token = ' 08bb9fe1-d42a-44ca-bae5-7c90585f8d7b';
    }
  }
}

