import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-prosedur',
  templateUrl: './prosedur.page.html',
  styleUrls: ['./prosedur.page.scss'],
})
export class ProsedurPage implements OnInit {

  procedures: Array<{ title: string, description: string }> = [
    { title: 'Registration', description: 'Step by step registration process' },
    { title: 'Payment', description: 'How to make a payment' }
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
      this.procedures.push({ title: this.newTitle, description: this.newDescription });
      this.newTitle = '';
      this.newDescription = '';
    }
  }

  editItem(index: number) {
    this.editIndex = index;
    this.editTitle = this.procedures[index].title;
    this.editDescription = this.procedures[index].description;
  }

  updateItem() {
    if (this.editIndex !== null && this.editTitle && this.editDescription) {
      this.procedures[this.editIndex] = { title: this.editTitle, description: this.editDescription };
      this.editIndex = null;
      this.editTitle = '';
      this.editDescription = '';
    }
  }

  deleteItem(index: number) {
    this.procedures.splice(index, 1);
  }

  async showDetails(procedure: { title: string, description: string }) {
    const alert = await this.alertController.create({
      header: procedure.title,
      message: procedure.description,
      buttons: ['OK']
    });

    await alert.present();
  }
}
