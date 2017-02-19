import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailAlertPage } from '../detail-alert/detail-alert';
import { FormAlertPage }  from '../form-alert/form-alert';
import { ManualAlertPage }  from '../manual-alert/manual-alert';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  
  alerts = [
    { id : 1, nom : 'Incendie',heure :'20:00', lieu : 'Anderlecht' , adresse : 'Chaussée de mons, 201', description : 'badkskfkgsdgsd' , photo :'' },
    { id : 2, nom : 'Agression',heure :'15:00', lieu : 'Saint-Gilles' , adresse : 'Rue de Danemark, 201', description : 'badkskfkgsdgsd' , photo :'' },
    { id : 3, nom : 'Vol',heure :'09:00', lieu : 'Molembeek' , adresse : 'Rue des Quatres Vents, 201', description : 'badkskfkgsdgsd' , photo :'' },
    { id : 4, nom : 'Incendie',heure :'12:00', lieu : 'Anderlecht' , adresse : 'Chaussée de mons, 201', description : 'badkskfkgsdgsd' , photo :'' },
    { id : 4, nom : 'Incendie',heure :'12:00', lieu : 'Anderlecht' , adresse : 'Chaussée de mons, 201', description : 'badkskfkgsdgsd' , photo :'' }
     
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToAlert()
  {
    this.navCtrl.push(DetailAlertPage);
  }

  goToFormAlert()
  {
    this.navCtrl.push(FormAlertPage);
  }

  goToAlertManual()
  {
    this.navCtrl.push(ManualAlertPage);
  }

}
