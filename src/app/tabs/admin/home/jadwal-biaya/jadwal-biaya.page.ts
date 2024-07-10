import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jadwal-biaya',
  templateUrl: './jadwal-biaya.page.html',
  styleUrls: ['./jadwal-biaya.page.scss'],
})
export class JadwalBiayaPage implements OnInit {

  scheduleFees: Array<{ schedule: string, fee: string }> = [
    { schedule: 'Teknik Informatik - Regular Malam', fee: '3,500,000 IDR' },
    { schedule: 'Teknik Informatika - Regular Pagi', fee: '2,000,000 IDR' },
    { schedule: 'Teknik Informatika - Extension', fee: '4,000,000 IDR' },
     { schedule: 'Sistem Informasi - Regular Malam', fee: '3,500,000 IDR' },
    { schedule: 'Sistem Informasi - Regular Pagi', fee: '2,000,000 IDR' },
    { schedule: 'Sistem Informasi - Extension', fee: '4,000,000 IDR' }

  ];

  newSchedule: string = '';
  newFee: string = '';
  editIndex: number | null = null;
  editSchedule: string = '';
  editFee: string = '';

  constructor() { }

  ngOnInit() { }

  addItem() {
    if (this.newSchedule && this.newFee) {
      this.scheduleFees.push({ schedule: this.newSchedule, fee: this.newFee });
      this.newSchedule = '';
      this.newFee = '';
    }
  }

  editItem(index: number) {
    this.editIndex = index;
    this.editSchedule = this.scheduleFees[index].schedule;
    this.editFee = this.scheduleFees[index].fee;
  }

  updateItem() {
    if (this.editIndex !== null && this.editSchedule && this.editFee) {
      this.scheduleFees[this.editIndex] = { schedule: this.editSchedule, fee: this.editFee };
      this.editIndex = null;
      this.editSchedule = '';
      this.editFee = '';
    }
  }

  deleteItem(index: number) {
    this.scheduleFees.splice(index, 1);
  }
}
