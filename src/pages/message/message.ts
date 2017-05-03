import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Message, Messages } from '../../classes/message';
import { MessageService } from '../../providers/message-service';
/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'message',
  segment: 'message'
})
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
  providers: [MessageService]
})
export class MessagePage {

  messages: Messages;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private messageService: MessageService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  ngOnInit(): void {
    this.loadMessage();
  }

  loadMessage() {
    this.messageService.getMessages().then((messages) => {
      console.log(messages);
      this.messages = messages;
      console.log(this);
    });
  }

  gotoUserPage(loginName: String): void {
    console.log('goto user', loginName);
    this.navCtrl.push('user', {loginName: loginName});
  }

  gotoTopicPage(id: String): void {
    console.log('goto topic', id);
    this.navCtrl.push('topic', {id: id});
  }


}
