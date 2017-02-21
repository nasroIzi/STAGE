import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { AlarmeService } from '../../services/alarmes.service';

// à laisser en suspens pour l'instant

@Component({
  templateUrl: 'detail-alert.html'
})
export class DetailAlertPage {  
    public alarme: any = {};
    public isNew = true;
    public action = 'Add';
    public isoDate = '';

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private alarmeS: AlarmeService) {
    }

    ionViewDidLoad() {
        let editAlarme = this.navParams.get('alarme');

        if (editAlarme) {
            this.alarme = editAlarme;
            this.isNew = false;
            this.action = 'Edit';
            this.isoDate = this.alarme.Date.toISOString().slice(0, 10);
        }
    }

    save() {
        this.alarme.Date = new Date(this.isoDate);

        if (this.isNew) {
            this.alarmeS.add(this.alarme)
                .catch(console.error.bind(console));
        } else {
            this.alarmeS.update(this.alarme)
                .catch(console.error.bind(console));
        }

        this.dismiss();
    }

    delete() {
        this.alarmeS.delete(this.alarme)
            .catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.alarme);
    }
}
