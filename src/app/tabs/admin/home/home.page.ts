import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate_to_jadwal() {
    this.router.navigate(['tabs/admin/home/jadwal']);
  }
  navigate_to_kuliah() {
    this.router.navigate(['tabs/admin/home/kuliah']);
  }
   navigate_to_persyaratan() {
    this.router.navigate(['tabs/admin/home/persyaratan']);
  }
  navigate_to_prosedur() {
    this.router.navigate(['tabs/admin/home/prosedur']);
  }

}
