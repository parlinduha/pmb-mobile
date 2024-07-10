import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-persyaratan',
  templateUrl: './persyaratan.page.html',
  styleUrls: ['./persyaratan.page.scss'],
})
export class PersyaratanPage implements OnInit {

  requirements: Array<{ title: string, description: string }> = [
   { title: 'Ijazah SMA', description: 'Salinan ijazah SMA yang dilegalisir' },
    { title: 'Transkrip Nilai', description: 'Salinan transkrip nilai yang dilegalisir' }
  ];

  newTitle: string = '';
  newDescription: string = '';
  editIndex: number | null = null;
  editTitle: string = '';
  editDescription: string = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  addItem() {
    if (this.newTitle && this.newDescription) {
      this.requirements.push({ title: this.newTitle, description: this.newDescription });
      this.newTitle = '';
      this.newDescription = '';
    }
  }

  editItem(index: number) {
    this.editIndex = index;
    this.editTitle = this.requirements[index].title;
    this.editDescription = this.requirements[index].description;
  }

  updateItem() {
    if (this.editIndex !== null && this.editTitle && this.editDescription) {
      this.requirements[this.editIndex] = { title: this.editTitle, description: this.editDescription };
      this.editIndex = null;
      this.editTitle = '';
      this.editDescription = '';
    }
  }

  deleteItem(index: number) {
    this.requirements.splice(index, 1);
  }

  async showDetails(requirement: { title: string, description: string }) {
    const alert = await this.alertController.create({
      header: requirement.title,
      message: requirement.description,
      buttons: ['OK']
    });

    await alert.present();
  }
}
