import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.page.html',
  styleUrls: ['./info-edit.page.scss'],
})
export class InfoEditPage implements OnInit {
  info = {
    id: null as number | null,
    title: '',
    description: '',
    date: new Date().toISOString()
  };

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.info = {
        id: +id,
        title: `Sample Title ${id}`,
        description: `Sample Description ${id}`,
        date: new Date().toISOString()
      };
    }
  }

  updateInfo() {
    console.log('Update Info', this.info);
    this.navCtrl.back();
  }
}
