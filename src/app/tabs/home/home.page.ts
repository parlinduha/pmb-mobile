import { Component } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  students: any;

  constructor(private studentsService: StudentsService, private router: Router) {}

  ionViewWillEnter() {
    this.students = this.studentsService.getStudents();
    console.log(' students', this.students[0].name);
  }

  jadwal_biaya() {
    this.router.navigate(['tabs/home/jadwal-biaya']);
  }
  prosedure() {
    this.router.navigate(['tabs/home/prosedur']);
  }
  persyaratan() {
    this.router.navigate(['tabs/home/persyaratan']);
  }
  kuliah() {
    this.router.navigate(['tabs/home/perkuliahan']);
  }

  navigateInfo() {
    this.router.navigate(['tabs/info']);
  }

}
