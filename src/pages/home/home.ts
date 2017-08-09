import { Component } from '@angular/core';
import {
  MenuController,
  NavController,
  ActionSheetController,
  AlertController,
} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  activeMenu: string;

  constructor(
    public menu: MenuController,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) {
    this.menu1Active();
  }

  menu1Active() {
    this.activeMenu = "menu1";
    this.menu.enable(true, 'menu1');
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

  showPromptAlert() {
    let prompt = this.alertCtrl.create({
      title: "Login",
      message: "Enter a name for this new album your're so keen on adding",
      inputs: [
        {
          name: "title",
          placeholder: "Title"
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log(`Cancel clicked! data: ${JSON.stringify(data)}`);
          }
        },
        {
          text: "Save",
          handler: data => {
            console.log(`Save clicked! data: ${JSON.stringify(data)}`);
          }
        }
      ]
    });
    prompt.present();
  }
}
