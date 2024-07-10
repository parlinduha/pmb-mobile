import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonFileService {
  private registerUrl = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient) {}


   getStudentByEmail(email: string): any {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    return students.find((student: any) => student.email === email);
   }
  getStudents() {
    const localStorages = localStorage.getItem('students');
    return localStorages ? JSON.parse(localStorages) : [];
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.registerUrl, user).pipe(
      map(newUser => {
        console.log("User registered", newUser);
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
