import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonFileService {
  // private apiUrl = 'http://192.168.177.30:3000/api/';
  private apiUrl = 'https://pmbstmikwiduri.netlify.app/api/';
  private registerUrl = 'https://pmbstmikwiduri.netlify.app/api/maba';

  constructor(private http: HttpClient) {}

  getStudentByEmail(email: string): any {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    return students.find((student: any) => student.email === email);
  }

  getStudents() {
    const localStorages = localStorage.getItem('students');
    return localStorages ? JSON.parse(localStorages) : [];
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

 studentRegisterPmb(data: any, files: any): Observable<any> {
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

  // Kirim data ke server
  return this.http.post(this.registerUrl, formData).pipe(
    map((response) => {
      console.log('Student registered to server', response);
      return response;
    }),
    catchError(this.handleError<any>('studentRegisterPmb', data))
  );
}


  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'register');
  }

  // jadwal route
 getJadwal(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'jadwal');
 }

   // Tambahkan fungsi lain di bawah ini jika diperlukan
  createJadwal(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'jadwal', data);
  }

  updateJadwal(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}jadwal/${id}`, data);
  }

  deleteJadwal(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}jadwal/${id}`);
  }


  // end  of jadwal

  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl + 'register', user).pipe(
      map((newUser) => {
        console.log('User registered', newUser);
        return newUser;
      }),
      catchError(this.handleError<any>('registerUser', user))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
