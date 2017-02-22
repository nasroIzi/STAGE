import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AuthentificationPage } from '../pages/authentification/authentification';
import { ConnexionPage } from '../pages/connexion/connexion';
import { InscriptionPage } from '../pages/inscription/inscription';
import { AlarmePage } from '../pages/alarmes/alarmes';
import { FormAlertPage } from '../pages/form-alert/form-alert';
import { DetailAlertPage } from '../pages/detail-alert/detail-alert';
import { ManualAlertPage } from '../pages/manual-alert/manual-alert';

import { AlarmeService } from '../services/alarmes.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthentificationPage,
    InscriptionPage,
    ConnexionPage,
    AlarmePage,
    FormAlertPage,
    DetailAlertPage,
    ManualAlertPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthentificationPage,
    InscriptionPage,
    ConnexionPage,
    AlarmePage,
    FormAlertPage,
    DetailAlertPage,
    ManualAlertPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AlarmeService]
})
export class AppModule {}
