import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConnexionPage } from '../connexion/connexion';
import { InscriptionPage } from '../inscription/inscription';

@Component({
  templateUrl: 'authentification.html'
})
export class AuthentificationPage {

  loginRoot = ConnexionPage;
  inscriptionRoot = InscriptionPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad authentification');
  }

  // goToHome()
  // {
  //   this.navCtrl.push(HomePage);
  //   // gérer le ngIf avec le bouton home
  // }
}