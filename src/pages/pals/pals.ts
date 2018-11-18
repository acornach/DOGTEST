import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
/**
 * Generated class for the PalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pals',
  templateUrl: 'pals.html',
})
export class PalsPage {
  uid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
	
	this.events.subscribe('data:created', (data) => {	//Gets uid passed into from login page
		console.log( data);
		this.uid = data;
	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PalsPage');
  }

}
