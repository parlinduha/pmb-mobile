import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditProfileComponent } from '../../edit-profile/edit-profile.component';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 activeUser: any;

  constructor(
    private modalCtrl: ModalController,
    private router: Router // Inject Router
  ) {
    const localStorages = localStorage.getItem('userActive');
    this.activeUser = localStorages ? JSON.parse(localStorages) : {};
  }

  ngOnInit() {}

  onEditProfile() {
    this.modalCtrl
      .create({
        component: EditProfileComponent,
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      const localStorages = localStorage.getItem('userActive');
      this.activeUser = localStorages ? JSON.parse(localStorages) : {};
      event.target.complete();
    }, 2000);
  }

  onLogout() {
    // Lakukan logout dan arahkan ke halaman login
    // Misalnya, hapus data pengguna aktif dari penyimpanan lokal
    localStorage.removeItem('userActive');
    // Navigasi ke halaman login
    this.router.navigateByUrl('/auth');
  }
}
