import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getStudentByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/email/${email}`);
  }

  studentUpdate(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${data.id}`, data);
  }

  registerStudent(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, { headers });
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user).pipe(
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
