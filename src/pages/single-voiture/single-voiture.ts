import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/public_api';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Voiture } from '../../models/Voiture';
import { VoituresService } from '../../services/voitures.service';


@Component({
  selector: 'page-single-voiture',
  templateUrl: 'single-voiture.html',
})
export class SingleVoiturePage implements OnInit{
  index: number;
voiture: Voiture;
constructor(public navParams: NavParams,
public viewCtrl: ViewController,
public voituresService: VoituresService) {
}
ngOnInit() {
this.index = this.navParams.get('index');
this.voiture = this.voituresService.voituresList[this.index];
}
dismissModal() {
this.viewCtrl.dismiss();
}
onToggleVoiture() {
this.voiture.isOn = !this.voiture.isOn;
}


//formulaire
onSubmitForm(form: NgForm) {
  console.log(form.value);
  this.dismissModal();
  }
  onDeleteHours() {
  this.voiture.startTime = '';
  this.voiture.endTime = '';
  this.dismissModal();
  }

  }

