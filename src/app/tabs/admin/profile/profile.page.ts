import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogout() {
    // Lakukan logout dan arahkan ke halaman login
    // Misalnya, hapus data pengguna aktif dari penyimpanan lokal
    localStorage.removeItem('userActive');
    // Navigasi ke halaman login
    this.router.navigateByUrl('/auth');
  }
}
