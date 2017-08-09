import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Modify your album",
      buttons: [
        {
          text: "Destructive",
          role: "destructive",
          handler: () => {
            console.log("Destructive clicked");
          }
        },
        {
          text: "Achive",
          handler: () => {
            console.log("Archive clicked");
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: "New Friend!",
      subTitle: "Your friend, Obi wan Kenobi, just accepted your friend request!",
      buttons: [
        {
          text: "OK",
          role: "ok",
          handler: () => {
            console.log("Alert's OK clicked!");
          }
        }
      ]
    });
    alert.present();
  }
}
