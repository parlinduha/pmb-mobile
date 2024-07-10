import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perkuliahan',
  templateUrl: './perkuliahan.page.html',
  styleUrls: ['./perkuliahan.page.scss'],
})
export class PerkuliahanPage implements OnInit {

  courses: Array<{ title: string, description: string }> = [
    { title: 'Computer Science 101', description: 'Introduction to Computer Science' },
    { title: 'Mathematics 101', description: 'Introduction to Algebra' }
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
      this.courses.push({ title: this.newTitle, description: this.newDescription });
      this.newTitle = '';
      this.newDescription = '';
    }
  }

  editItem(index: number) {
    this.editIndex = index;
    this.editTitle = this.courses[index].title;
    this.editDescription = this.courses[index].description;
  }

  updateItem() {
    if (this.editIndex !== null && this.editTitle && this.editDescription) {
      this.courses[this.editIndex] = { title: this.editTitle, description: this.editDescription };
      this.editIndex = null;
      this.editTitle = '';
      this.editDescription = '';
    }
  }

  deleteItem(index: number) {
    this.courses.splice(index, 1);
  }

  async showDetails(course: { title: string, description: string }) {
    const alert = await this.alertController.create({
      header: course.title,
      message: course.description,
      buttons: ['OK']
    });

    await alert.present();
  }
}
