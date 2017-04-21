import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsService } from '../providers/tabs-service';
import { UserService } from '../providers/user-service';
import { Tab } from '../classes/tab';


@Component({
  templateUrl: 'app.html',
  providers: [TabsService, UserService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = 'topics';

  tabs: Tab[];

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private tabsService: TabsService, private userService: UserService, private alertCtrl: AlertController) {
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
                console.log('done')
              });
            }

          }
        }
      ]
    });
    alert.present();
  }
}
