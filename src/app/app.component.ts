import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsService } from '../providers/tabs-service';
import { Tab } from '../classes/tab';


@Component({
  templateUrl: 'app.html',
  providers: [TabsService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = 'topics';

  tabs: Tab[];

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private tabsService: TabsService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp() {
  }

  ngAfterViewInit() {
    console.log('ng after view init');
    this.tabs = this.tabsService.getTabs();
  }

  openTab(tab: any) {
    console.log('open tab', tab)
    this.nav.setRoot('topics', {
      tab: tab.value
    });
  }
}
