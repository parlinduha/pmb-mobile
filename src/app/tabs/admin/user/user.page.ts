import { EditUserComponent } from './edit-user/edit-user.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonFileService } from '../../../service/json/json-file.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  students: any[] = [];
  filteredStudents: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private jsonFileService: JsonFileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getStudentsData();
  }

  getStudentsData() {
    this.jsonFileService.getUsers().subscribe(
      (response: any) => {
        if (response.success) {
          console.log(response.data);
          this.students = response.data.map((student:any) => ({ ...student, expanded: false }));
          this.filteredStudents = [...this.students];
        } else {
          console.error('Error: Data not found');
        }
      },
      (error:any) => {
        console.error('Error fetching students data:', error);
      }
    );
  }

  searchStudents(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    console.log('Search Term:', searchTerm);

    this.filteredStudents = this.students.filter((student) => {
      const includes = student.name.toLowerCase().includes(searchTerm);
      console.log(`Student: ${student.name}, Included: ${includes}`);
      return includes;
    });
  }

  toggleStudentDetail(student: any) {
    student.expanded = !student.expanded;
  }

  editStudent(student: any) {
    this.modalCtrl
      .create({
        component: EditUserComponent,
        componentProps: { student }
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  // deleteStudent(student: any) {
  //   const confirmDelete = window.confirm(
  //     `Apakah Anda yakin ingin menghapus ${student.name}?`
  //   );

  //   if (confirmDelete) {
  //     this.studentService.deleteStudentByEmail(student.email).subscribe(
  //       () => {
  //         // Refresh data setelah penghapusan
  //         this.getStudentsData();
  //       },
  //       (error:any) => {
  //         console.error('Error deleting student:', error);
  //       }
  //     );
  //   }
  // }

  viewStudentDetail(student: any) {
    // Menghubungkan ke halaman detail dengan menyertakan ID mahasiswa
    this.router.navigate(['/detail', student.id]);
  }
}
