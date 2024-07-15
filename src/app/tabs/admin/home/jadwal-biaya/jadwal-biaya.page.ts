import { Component, OnInit } from '@angular/core';
import { JsonFileService } from '../../../../service/json/json-file.service';
import { ToastController } from '@ionic/angular';

interface JadwalBiaya {
  id: string;
  title: string;
  fee: string;
}

@Component({
  selector: 'app-jadwal-biaya',
  templateUrl: './jadwal-biaya.page.html',
  styleUrls: ['./jadwal-biaya.page.scss'],
})
export class JadwalBiayaPage implements OnInit {
  scheduleFees: JadwalBiaya[] = [];
  newTitle: string = '';
  newFee: string = '';
  editIndex: number | null = null;
  editTitle: string = '';
  editFee: string = '';

  constructor(private jsonFileService: JsonFileService, private toastController: ToastController) { }

  ngOnInit() {
    this.loadScheduleFees();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  loadScheduleFees() {
    this.jsonFileService.getJadwal().subscribe(
      (data: JadwalBiaya[]) => {
        this.scheduleFees = data;
      },
      (error:any) => {
        console.error('Error loading schedule fees:', error);
        // Handle error (e.g., show a message to the user)
      }
    );
  }

  addItem() {
    if (this.newTitle && this.newFee) {
      const newItem = { title: this.newTitle, fee: this.newFee };
      this.jsonFileService.createJadwal(newItem).subscribe(
        (data: JadwalBiaya) => {
          this.scheduleFees.push(data);
          this.newTitle = '';
          this.newFee = '';
          this.presentToast('Schedule fee added successfully.');
        },
        (error:any) => {
          console.error('Error adding schedule fee:', error);
          // Handle error (e.g., show a message to the user)
        }
      );
    }
  }

  editItem(index: number) {
    this.editIndex = index;
    this.editTitle = this.scheduleFees[index].title;
    this.editFee = this.scheduleFees[index].fee;
  }

  updateItem() {
    if (this.editIndex !== null && this.editTitle && this.editFee) {
      const updatedItem = { title: this.editTitle, fee: this.editFee };
      const id = this.scheduleFees[this.editIndex].id;
      this.jsonFileService.updateJadwal(id, updatedItem).subscribe(
        (data: JadwalBiaya) => {
          this.scheduleFees[this.editIndex!] = data;
          this.editIndex = null;
          this.editTitle = '';
          this.editFee = '';
          this.presentToast('Schedule fee updated successfully.');
        },
        (error:any) => {
          console.error('Error updating schedule fee:', error);
          // Handle error (e.g., show a message to the user)
        }
      );
    }
  }

  deleteItem(index: number) {
    const id = this.scheduleFees[index].id;
    this.jsonFileService.deleteJadwal(id).subscribe(
      () => {
        this.scheduleFees.splice(index, 1);
        this.presentToast('Schedule fee deleted successfully.');
      },
      (error:any) => {
        console.error('Error deleting schedule fee:', error);
        // Handle error (e.g., show a message to the user)
      }
    );
  }
}
