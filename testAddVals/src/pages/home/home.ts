import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthentificationPage } from '../authentification/authentification';


@Component({
  selector : 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToTabs()
  {
    this.navCtrl.push(AuthentificationPage);
  }
  
}