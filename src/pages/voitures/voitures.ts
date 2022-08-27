import { Component } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from 'ionic-angular';

import { Voiture } from '../../models/Voiture';
import { SingleVoiturePage } from '../single-voiture/single-voiture';

import { VoituresService } from '../../services/voitures.service';
import { MenuController } from 'ionic-angular';
import { VoitureFormPage } from './voiture-form/voiture-form';
import { Subscription } from 'rxjs/Subscription';
import * as firebase from 'firebase';

@Component({
selector: 'page-voitures',
templateUrl: 'voitures.html'
})
export class VoituresPage{
   

    voituresList:Voiture[];

    voituresSubscription: Subscription;
    
    
    constructor(private modalCtrl: ModalController,private voituresService: VoituresService,private menuCtrl: MenuController, private navCtrl:NavController,private toastCtrl: ToastController,
        private loadingCtrl: LoadingController) {


    }
////////////////////////////////
    ionViewWillEnter() {
        this.voituresList = this.voituresService.voituresList.slice();
        }

/// ngOninit
        ngOnInit() {
            this.voituresSubscription = this.voituresService.voitures$.subscribe(
            (voitures: Voiture[]) => {
            this.voituresList = voitures.slice();
            }
            );
            this.voituresService.emitVoitures();
            }


        onLoadVoiture(index: number) {
            let modal = this.modalCtrl.create(SingleVoiturePage, {index: index});
            modal.present();
            }
            
            onToggleMenu() {
                this.menuCtrl.open();}



                onNewVoiture() {
                    this.navCtrl.push(VoitureFormPage);
                    }   
                    
                   
///////////////////////// methode qui s'éxecute lors de l'enregistrement
onSaveList() {
    let loader = this.loadingCtrl.create({
    content: 'Sauvegarde en cours...'
    });
    loader.present();
    this.voituresService.saveData().then(
    () => {
    loader.dismiss();
    this.toastCtrl.create({
    message: 'Données sauvegardées !',
    duration: 3000,
    position: 'bottom'
    }).present();
    },
    (error) => {
    loader.dismiss();
    this.toastCtrl.create({
    message: error,
    duration: 3000,
    position: 'bottom'
    }).present();
    }
    );
    }
 /////////////////////////////////////////////////  
 ////méthode pour la récupération des données 
 
 onFetchList() {
    let loader = this.loadingCtrl.create({
    content: 'Récuperation en cours...'
    });
    loader.present();
    this.voituresService.retrieveData().then(
    () => {
    loader.dismiss();
    this.toastCtrl.create({
    message: 'Données récupérées !',
    duration: 3000,
    position: 'bottom'
    }).present();
    },
    (error) => {
    loader.dismiss();
    this.toastCtrl.create({
    message: error,
    duration: 3000,
    position: 'bottom'
    }).present();
    }
    );
    }
//////////////////////////////////

                   
          }