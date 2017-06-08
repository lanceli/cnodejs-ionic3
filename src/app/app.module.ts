import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { ConfigService } from '../providers/config-service';

import { NewTopicModal } from '../pages/new-topic-modal/new-topic-modal';

@NgModule({
  declarations: [
    MyApp,
    NewTopicModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      locationStrategy: 'hash'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewTopicModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigService
  ]
})
export class AppModule {}
