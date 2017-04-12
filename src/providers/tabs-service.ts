import { Injectable } from '@angular/core';

import { Tab } from '../classes/tab';
/*
  Generated class for the TabsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TabsService {
  tabs: Tab[] = [
    {
      value: 'all',
      label: '最新'
    },
    {
      value: 'share',
      label: '分享'
    },
    {
      value: 'ask',
      label: '问答'
    },
    {
      value: 'job',
      label: '招聘'
    },
    {
      value: undefined,
      label: '其他'
    }
  ]

  getTabs(): Tab[] {
    return this.tabs;
  }
}

