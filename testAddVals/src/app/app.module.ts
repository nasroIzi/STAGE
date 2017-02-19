import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FormAlertPage } from '../pages/form-alert/form-alert';
import { DetailAlertPage } from "../pages/detail-alert/detail-alert";
import { ManualAlertPage } from '../pages/manual-alert/manual-alert';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    FormAlertPage,
    DetailAlertPage,
    ManualAlertPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
