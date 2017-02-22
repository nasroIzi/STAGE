import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthentificationPage } from '../authentification/authentification';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToAuthentification()
  {
    this.navCtrl.push(AuthentificationPage)
  }
}