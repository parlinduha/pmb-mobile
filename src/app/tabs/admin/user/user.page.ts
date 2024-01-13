import { StudentService } from './../../../service/student/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  students: any[] = [];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudentsData();
  }
  getStudentsData() {
    this.studentService.getStudents().subscribe(
      (data: any[]) => {
        console.log(data);
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students data:', error);
      }
    );
  }
}
