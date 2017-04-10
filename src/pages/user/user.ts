import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { User } from '../../classes/user';
import { UserService } from '../../providers/user-service';
/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage({
	name: 'user'
})
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
	providers: [UserService]
})
export class UserPage {

	user: User

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

	ngOnInit(): void {
		this.getUser()
	}

	getUser(): void {
		this.userService.getByLoginName(this.navParams.get('loginName')).then(
			(user) => {
        this.user = user
        console.log(this.user)
      }
		);
	}

}
