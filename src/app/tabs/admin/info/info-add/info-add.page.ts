import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-add',
  templateUrl: './info-add.page.html',
  styleUrls: ['./info-add.page.scss'],
})
export class InfoAddPage  {

 info = {
    title: '',
    description: '',
    date: new Date().toISOString()
  };

  constructor(private navCtrl: NavController) { }

  saveInfo() {
    console.log('Save Info', this.info);
    this.navCtrl.back();
  }
}
