import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Events} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { TestdatabasePage } from '../testdatabase/testdatabase';
import { StartupPage } from '../startup/startup';
import { AdddogPage } from '../adddog/adddog';
import { ProfilePage } from '../profile/profile';
import { SearchingPage } from '../searching/searching';
import { PalsPage } from '../pals/pals';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//  @ViewChild('username') uname;
//  @ViewChild('password') password;
	uid: string;	//User's ID to grab/write data from database
	
	
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public events: Events) {
	
	this.events.subscribe('data:created', (data) => {	//Gets uid passed into from login page
		console.log( data);
		this.uid = data;
	});
  }

  searching(){
  	this.navCtrl.push(SearchingPage)
	.then(() => {
				this.events.publish('data:created', this.uid);
				console.log('Published', this.uid);
	});
  }
  
  yourPals(){
  	this.navCtrl.push(PalsPage)
	.then(() => {
				this.events.publish('data:created', this.uid);
				console.log('Published', this.uid);
	});
  }
  
  settings(){
  	this.navCtrl.push(SettingsPage)
	.then(() => {
				this.events.publish('data:created', this.uid);
				console.log('Published', this.uid);
	});
  }
  
  yourProfile(){
  	this.navCtrl.push(ProfilePage)
	.then(() => {
				this.events.publish('data:created', this.uid);
				console.log('Published', this.uid);
	});
  }
  
  addDog(){
  	this.navCtrl.push(AdddogPage)
	.then(() => {
				this.events.publish('data:created', this.uid);
				console.log('Published', this.uid);
	});
  }




}
