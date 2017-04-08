import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UserPage } from '../pages/user/user';
import { TopicsPage } from '../pages/topics/topics';
import { TopicPage } from '../pages/topic/topic';

@NgModule({
  declarations: [
    MyApp,
    UserPage,
    TopicsPage,
    TopicPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      locationStrategy: 'hash'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserPage,
    TopicsPage,
    TopicPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
