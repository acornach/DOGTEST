import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	uid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
	
	this.events.subscribe('data:created', (data) => {	//Gets uid passed into from login page
		console.log( data);
		this.uid = data;
	});
	
	

	//this.userDoc = fireStore.doc<any>('humanProfile/' + this.uid);	//Creates a document in database with their user ID
	/*this.userDoc.set({
    firstName: 'Allison',
	lastName: 'Little',
    email: '',
	dogID: '',
    // Other info you want to add here
  })*/
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
