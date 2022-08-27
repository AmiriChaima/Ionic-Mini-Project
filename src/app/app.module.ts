import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VoituresPage } from '../pages/voitures/voitures';
import { SingleVoiturePage } from '../pages/single-voiture/single-voiture';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { VoituresService } from '../services/voitures.service';
import { Voiture } from '../models/Voiture';

import { OptionsPage } from '../pages/options/options';
import { VoitureFormPage } from '../pages/voitures/voiture-form/voiture-form';
import { AuthService } from '../services/authService.service';
import { AuthPage } from '../pages/auth/auth';

import { SQLite} from '@ionic-native/sqlite';

import {Camera} from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VoituresPage,
    SingleVoiturePage,
    SettingsPage,
    TabsPage,
    OptionsPage, 
    VoitureFormPage,
    AuthPage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VoituresPage,
    SingleVoiturePage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    VoitureFormPage,
    AuthPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VoituresService,
    Voiture,
    AuthService,
 ,
    SQLite,
   

    Camera
  ]
})
export class AppModule {}
