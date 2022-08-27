import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Voiture } from '../../../models/Voiture';
import { VoituresService } from '../../../services/voitures.service';
import { NavController } from 'ionic-angular';
@Component({
selector: 'page-voiture-form',
templateUrl: './voiture-form.html'
})
export class VoitureFormPage implements OnInit {
    
voitureForm: FormGroup;
    


constructor(private formBuilder: FormBuilder,private navCtlr:NavController,private voituresService: VoituresService) {}
ngOnInit() {
this.initForm();
}
initForm() {
this.voitureForm = this.formBuilder.group({
name: ['', Validators.required],
description: this.formBuilder.array([])
});
}

getDescriptionArray() {
    return this.voitureForm.get('description') as FormArray;
    }


    onAddDescription() {
        let newControl = this.formBuilder.control('');
        this.getDescriptionArray().controls.push(newControl);}


        onRemoveDescription(index: number) {
            this.getDescriptionArray().removeAt(index);}


            onSubmitForm() {
                let newVoiture = new Voiture(this.voitureForm.get('name').value);
                for (let control of this.getDescriptionArray().controls) {
                newVoiture.description.push(control.value);
                }
                this.voituresService.addVoiture(newVoiture);
                this.navCtlr.pop();
                }

            
        }


 