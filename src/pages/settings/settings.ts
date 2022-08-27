import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
selector: 'page-settings',
templateUrl: 'settings.html'
})
export class SettingsPage {
    [x: string]: any;
    
    constructor(private alertCtrl: AlertController,private menuCtrl: MenuController) {}
    onToggleLights() {
        let alert = this.alertCtrl.create({
        title: 'Êtes-vous certain(e) de vouloir continuer ?',
        subTitle: '',
        buttons: [
        {
        text: 'Annuler',
        role: 'cancel'
        },
        {
        text: 'Confirmer',
        handler: () => console.log('Confirmé !')
        }
        ]
        });
        alert.present();
        }

        onToggleMenu() {
            this.menuCtrl.open();}

}