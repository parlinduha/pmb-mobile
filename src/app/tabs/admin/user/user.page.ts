import { EditUserComponent } from './edit-user/edit-user.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './../../../service/student/student.service';
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
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getStudentsData();
  }

  getStudentsData() {
    this.studentService.getStudents().subscribe(
      (data: any[]) => {
        console.log(data);
        this.students = data;
        this.filteredStudents = [...data];
      },
      (error) => {
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

  editStudent() {
    this.modalCtrl
      .create({
        component: EditUserComponent,
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  deleteStudent(student: any) {
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus ${student.name}?`
    );

    if (confirmDelete) {
      // Panggil fungsi dari service atau metode yang sesuai
      this.studentService.getStudentById(student.id).subscribe(
        () => {
          // Refresh data setelah penghapusan
          this.getStudentsData();
        },
        (error) => {
          console.error('Error deleting student:', error);
        }
      );
    }
  }

  viewStudentDetail(student: any) {
    // Menghubungkan ke halaman detail dengan menyertakan ID mahasiswa
    this.router.navigate(['/detail', student.id]);
  }
}
