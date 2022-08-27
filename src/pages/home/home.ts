import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { VoituresPage } from '../voitures/voitures';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  voituresPage = VoituresPage;
  image = '';
  
  

  constructor(public navCtrl: NavController,private menuCtrl:MenuController,public camera: Camera) {

  }


  async addPhoto(source: string) {
    if (source === 'camera') {
    console.log('camera');
    const cameraPhoto = await this.openCamera();
    this.image = 'data:image/jpg;base64,' + cameraPhoto;
    } else {
    console.log('library');
    const libraryImage = await this.openLibrary();
    this.image = 'data:image/jpg;base64,' + libraryImage;
    }
    }

    async openCamera() {
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
      };
      return await this.camera.getPicture(options);
      }


      async openLibrary() {
        const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 1000,
        targetHeight: 1000,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        return await this.camera.getPicture(options);

      }









 // onGoToAppareils() {
   // this.navCtrl.push(VoituresPage);
    //}

    onToggleMenu() {
      this.menuCtrl.open();}

}
