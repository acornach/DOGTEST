import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, Platform } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

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

	//Variables on Page:
	@ViewChild('fName') fName;
	@ViewChild('lName') lName;
	@ViewChild('lookingFor') lookingFor$;
	@ViewChild('dogName') dogName$;
	@ViewChild('snapDescription') snapDescription$;
	@ViewChild('likesDislikes') likesDislikes$;

	//variables for ProfilePage
	private itemDoc: AngularFirestoreDocument<Item>;
	item: Observable<Item>;			//Firebase Document
	uid: string;								//User id
	items: Observable<any[]>; 	//Collections
	
	fields: Item;
	private userName: string;	//Should be passed similar to uid
	private firstName: string;	//Fetched from Firebase document
	private lastName: string;	//Fetched from Firebase document
	private dogPhotoPath: string;	//Fetched from Firebase image
	private humanPhotoPath: string;	//Fetched from Firebase image

	//Guiding fields:
	private lookingFor: string; //dog park, hiking buddy, etc.
	private characterDescription: string;
	private ownerLikesAndDislikes: string;

	//Dog info
	dogs: Observable<any[]>; 	// Collection from firebase

	//Doc exists?
	private docExists: boolean;


	//Constructor, includes ctrls, etc..
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public   afDB: AngularFireDatabase, private afs: AngularFirestore, private platform: Platform) {

	this.events.subscribe('data:created', (data) => {	//Gets uid passed into from login page
		//console.log( data);
		this.uid = data;

		//once the user id is found, we can see if the user's document exists
		//CHeck if document exists:
		//NEED TO SWITCH TO THIS STATEMENT ONLY
		afs.doc<Item>('humanProfile/'+this.uid).valueChanges().subscribe( res => {
			if(res){
				this.docExists = true;
				console.log("doc: humanProfile/" + this.uid + " found!");
				console.log("doc: humanProfile/" + this.uid + " found!");
				//This line binds a Document tothe user
				this.itemDoc = afs.doc<Item>('humanProfile/yoh59JUTatWayKRim3Th');
				this.itemDoc.valueChanges().forEach( data => { 
					this.firstName = data["firstName"],
					this.fName = this.firstName,
					this.lastName = data["lastName"],
					this.lName = this.lastName
				}); //Access by value
			}
			else{
				this.docExists = false;
				console.log("doc: humanProfile/" + this.uid + " not found");
			}

		});

		//CHeck if document exists:
		afs.doc<Item>('humanProfile/'+'yoh59JUTatWayKRim3Th').valueChanges().subscribe( res => {
			if(res){
				console.log("doc: humanProfile/" + 'yoh59JUTatWayKRim3Th' + " found!");
				//This line binds a Document tothe user
				this.itemDoc = afs.doc<Item>('humanProfile/yoh59JUTatWayKRim3Th');
				this.itemDoc.valueChanges().forEach( data => { 
					this.firstName = data["firstName"],
					this.fName = this.firstName,
					this.lastName = data["lastName"],
					this.lName = this.lastName
				}); //Access by value
			}
			else{
				console.log("doc: humanProfile/" + 'yoh59JUTatWayKRim3Th' + " not found");
			}

		});

	});
	

	//This line binds items to the collection humanProfile
	//this.items = afs.collection('humanProfile').valueChanges();
	//console.log(this.items);




		
  }

	//this.item = this.itemDoc.valueChanges().pipe();
	//console.log(this.itemDoc.get);
	//console.log(this.item)
	
	
	
	//this.userDoc = fireStore.doc<any>('humanProfile/' + this.uid);	//Creates a document in database with their user ID
	/*this.userDoc.set({
    firstName: 'Allison',
	lastName: 'Little',
    email: '',
	dogID: '',
    // Other info you want to add here
  })*/
  //}
  
  

  ionViewDidLoad() {
		console.log('ionViewDidLoad ProfilePage');
}

//Updating methods
	updateFirstName(){
		console.log('New First name: ' + this.fName)
	}

	updateLastName(){
		console.log('New Last name: ' + this.lName)
	}

	updateInfo(){
		//This line will create a document in humanProfile collection with the ID
		this.afs.collection('humanProfile').doc(this.uid).set({
			firstName: this.fName,
			lastNamae: this.lName
		}
		);

	}

	updateDogName(){

	}

	updateLookingFor(){

	}

	updateSnapDescription(){

	}

	updateLikesDislikes(){

	}
}
