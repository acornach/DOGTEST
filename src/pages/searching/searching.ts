
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams, Item, Platform } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the SearchingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searching',
  templateUrl: 'searching.html',
})
export class SearchingPage {

  uid: string;
  uLat: number;
  uLong: number;
  oLat: number;
  oLong: number;

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public events: Events, public   afDB: AngularFireDatabase, private afs: AngularFirestore,private geolocation: Geolocation) {
    //const milesPerLatLong = 69;
    
	this.events.subscribe('data:created', (data) => {	//Gets uid passed into from login page
		console.log( data);
    this.uid = data;
    
    this.geolocation.getCurrentPosition().then((resp) => {
			this.uLat = resp.coords.latitude;
			this.uLong = resp.coords.longitude;
      console.log("Lat:  " + this.uLat);
      console.log("Long: " + this.uLong);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     //If have lat/long look for friends
     afs.collection<any>('humanProfile').valueChanges().forEach(data => {
       data.forEach(person => {
         //Searches every person in the database.
         //TODO: Compare to lat longs and print the person out. Should try to obtain the id of the item
         console.log(person['firstName']);
         console.log(person['currLat']);
       })
     });//End get doc
  });
  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchingPage');
  }

}
