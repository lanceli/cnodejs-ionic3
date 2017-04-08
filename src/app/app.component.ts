import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, Deeplinks } from 'ionic-native';

import { TopicsPage } from '../pages/topics/topics';
import { UserPage } from '../pages/user/user';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TopicsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  ngAfterViewInit() {
		console.log('ng after view init')
		Deeplinks.routeWithNavController(this.nav, {
			'/topics': TopicsPage,
			'/user/:loginname': UserPage
		}).subscribe((match) => {
			console.log('Successfully routed', match);
		}, (nomatch) => {
			console.warn('Unmatched Route', nomatch);
		});
  }
}
