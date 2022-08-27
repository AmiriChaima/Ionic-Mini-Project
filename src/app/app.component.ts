import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { OptionsPage } from '../pages/options/options';
import * as firebase from 'firebase';
import { AuthPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  authPage:any = AuthPage;
  @ViewChild('content') content: NavController;
  isAuth: boolean;
  constructor(platform: Platform,
  statusBar: StatusBar,
  splashScreen: SplashScreen,
  private menuCtrl: MenuController) {
  platform.ready().then(() => {
  statusBar.styleDefault();
  splashScreen.hide();
//parametres de configuration

  const firebaseConfig = {
    apiKey: "AIzaSyCubON1680trMI1ZpkS4UZ3KVyec2z365w",
    authDomain: "ionic-project-4fd3e.firebaseapp.com",
    databaseURL:"https://ionic-project-4fd3e-default-rtdb.firebaseio.com/",
    projectId: "ionic-project-4fd3e",
    storageBucket: "ionic-project-4fd3e.appspot.com",
    messagingSenderId: "195831536191",
    appId: "1:195831536191:web:0cde6ee016ca558e11368a",
    measurementId: "G-YHV3TB0NFE"
  };
  

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(
  (user) => {
  if (user) {
  this.isAuth = true;
  this.content.setRoot(TabsPage);
  } else {
  this.isAuth = false;
  this.content.setRoot(AuthPage, {mode: 'connect'});
  }
  }
  );
  });


  
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
    }
/////////////////////////////
    
    onToggleMenu() {
      this.menuCtrl.open();
    }

  //////////////
    onDisconnect() {
      firebase.auth().signOut();
      this.menuCtrl.close();
      }
  
  }
  
