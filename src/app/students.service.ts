import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  getStudents() {
    const localStorages = localStorage.getItem('students');
    return localStorages ? JSON.parse(localStorages) : [];
  }

  getStudentByEmail(email: string): any {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    return students.find((student: any) => student.email === email);
  }

  studentUpdate(data: any) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    let studentIndex = students.findIndex(
      (student: any) => student.email === data.email
    );
    if (studentIndex > -1) {
      students[studentIndex] = data;
      localStorage.setItem('students', JSON.stringify(students));
    }
  }

  studentRegisterPmb(data: any, files: any) {
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));

    if (files.skhun) {
      formData.append('skhun', files.skhun);
    }
    if (files.diploma) {
      formData.append('diploma', files.diploma);
    }
    if (files.ktp) {
      formData.append('ktp', files.ktp);
    }
    if (files.kk) {
      formData.append('kk', files.kk);
    }
    if (files.certificate) {
      formData.append('certificate', files.certificate);
    }

    // Simpan ke localStorage
    let students = this.getStudents();
    students.push({
      ...data,
      skhun: files.skhun ? files.skhun.name : null,
      diploma: files.diploma ? files.diploma.name : null,
      ktp: files.ktp ? files.ktp.name : null,
      kk: files.kk ? files.kk.name : null,
      certificate: files.certificate ? files.certificate.name : null,
    });
    localStorage.setItem('students', JSON.stringify(students));
  }
}
