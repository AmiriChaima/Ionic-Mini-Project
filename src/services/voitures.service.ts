import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Voiture } from "../models/Voiture";
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from 'firebase';
@Injectable(
    
)
export class VoituresService{
    voitures$ = new Subject<Voiture[]>();
    voituresList : Voiture[]= [
        {
        name: 'Golf 7',
        description: [
            'Version:VII (2) 1.0 TSI 115 BLUEMOTION TECHNOLOGY CONFORT BUSINESS BV6 5P',
            'Portes:5',
            'Energie:Ess',
            'Boite: Mécanique',
            'CO2(g/km): 127 (wltp)',
            'Prix:27 900 €',
        
            ],
            url: "../assets/imgs/golf.png",
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
        name: 'HYUNDAI TUCSON 4 ',
        description: [
            'Version: IV 1.6 CRDI 136 HTRAC HY48V CREATIVE DCT-7',
            'Portes:5',
            'Energie:Dies',
            'Boite: Automatique',
            'CO2(g/km): 154 (wltp)',
            'Prix:40 000 €'
            ],
            url: "../assets/imgs/hundai.png",
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
        name: 'Peageot 308 (3e géneration)',
        description: [
            'Version: III 1.2 PURETECH 110 S&S ACTIVE PACK',
            'Portes:5',
            'Energie:Ess',
            'Boite: Automatique',
            'CO2(g/km): 124 (wltp)',
            'Prix:25 450 € €'
            ],
            url: "../assets/imgs/peageaot.png",
            isOn: true,
            startTime: '',
            endTime: ''
        },
{
        name: 'Renault Clio 5',
        description: [
            'Version: V 1.0 CLIO TCE 90 21N LIMITED X-TRONIC',
            'Portes:5',
            'Energie:Ess',
            'Boite: Automatique',
            'CO2(g/km): 129 (wltp)',
            'Prix:21 500 €'
            ],
            url: "../assets/imgs/Renault_clio.png",
            isOn: true,
            startTime: '',
            endTime: ''
        }

        ];

       //ajouter une voiture
        addVoiture(voiture:Voiture) {
            this.voituresList.push(voiture);
            this.emitVoitures();

            }

       /// emettre un subject
            emitVoitures() {
                this.voitures$.next(this.voituresList.slice());
                }   
                
       /////des méthodes pour la récupération et l'enregistrement des données 


       saveData() {
        return new Promise((resolve, reject) => {
        firebase.database().ref('voitures').set(this.voituresList).then(
        (data: DataSnapshot) => {
        resolve(data);
        },
        (error) => {
        reject(error);
        }
        );
        });
        }
        
        retrieveData() {
        return new Promise((resolve, reject) => {
        firebase.database().ref('voitures').once('value').then(
        (data: DataSnapshot) => {
        this.voituresList = data.val();
        this.emitVoitures();
        resolve('Données récupérées avec succès !');
        }, (error) => {
        reject(error);
        }
        );
        });
        }




}