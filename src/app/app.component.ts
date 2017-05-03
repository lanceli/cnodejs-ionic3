import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsService } from '../providers/tabs-service';
import { UserService } from '../providers/user-service';
import { MessageService } from '../providers/message-service';
import { Tab } from '../classes/tab';
import { User } from '../classes/user';


@Component({
  templateUrl: 'app.html',
  providers: [
    TabsService,
    UserService,
    MessageService
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = 'topics';

  tabs: Tab[];

  user: User;
  messagesCount: 0;

  constructor(
    public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private tabsService: TabsService,
    private userService: UserService,
    private messageService: MessageService,
    private alertCtrl: AlertController
  ) {
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

  gotoUserPage(loginName: String) {
    console.log('goto user', loginName);
    this.nav.setRoot('user', {loginName: loginName})
  }

  gotoMessagePage() {
    console.log('go to message page')
    this.nav.setRoot('message');
  }

  getMessageCount() {
    this.messageService.getMessageCount().then((response) => {
      this.messagesCount = response.data;
      //setBadge($scope.messagesCount);
    }, function(response) {
      //$log.log('get messages count fail', response);
    });
  };

  // login action callback
  loginCallback(user: User) {
    console.log('login callback', arguments);
    this.user = user;
    this.getMessageCount();
  }

  login() {
    console.log('login');
    let alert = this.alertCtrl.create({
      title: '输入Access Token',
      subTitle: 'PC端登录cnodejs.org后，在设置页可以找到Access Token',
      inputs: [
        {
          name: 'token',
          placeholder: 'Token'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '提交',
          handler: data => {
            console.log(data);
            if (data.token) {
              this.userService.login(data.token).then((response) => {
                this.loginCallback(response);
              });
            }
          }
        }
      ]
    });
    alert.present();
  }
}
