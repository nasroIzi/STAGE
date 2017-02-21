
import { Component, NgZone } from '@angular/core';
import { ModalController, NavController, Platform } from 'ionic-angular';

import { DetailAlertPage } from '../detail-alert/detail-alert';
import { FormAlertPage }  from '../form-alert/form-alert';
import { ManualAlertPage }  from '../manual-alert/manual-alert';

import { AlarmeService } from '../../services/alarmes.service';

@Component({
  templateUrl: 'alarmes.html'
})
export class AlarmePage {
  
  public alarmes = [];

  constructor(private alarmeS : AlarmeService,
        private navCtrl: NavController,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController) {
        }

  ionViewDidLoad() {
        this.platform.ready().then(() => {

            this.alarmeS.initDB();

            this.alarmeS.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.alarmes = data;
                    });
                })
                .catch(console.debug('samere'));
        });
  }

  showDetail(alarme) {
        let modal = this.modalCtrl.create(DetailAlertPage, { alarme: alarme });
        modal.present();
    }
  
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
