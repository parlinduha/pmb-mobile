import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://pmb-mobile-backend.vercel.app/api/register'; // Update with your login API endpoint

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // Set the headers to handle CORS
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Make the HTTP request with the specified headers
    return this.http.post<any>(this.apiUrl, { email, password }, { headers });
  }

  register(registerData: any): Observable<any> {
    // Set the headers to handle CORS
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Make the HTTP request with the specified headers
    return this.http.post<any>(
      'https://pmb-mobile-backend.vercel.app/api/register',
      registerData,
      { headers }
    ); // Update with your register API endpoint
  }
}
