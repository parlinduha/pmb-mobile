import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  infos = [
    { id: 1, title: 'Registration Open', description: 'New student registration is open now.', date: '2024-07-01' },
    { id: 2, title: 'Orientation Day', description: 'Orientation for new students.', date: '2024-07-10' },
    { id: 3, title: 'Class Start', description: 'Classes will begin from August.', date: '2024-08-01' },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  addInfo() {
    this.router.navigate(['tabs/admin/info/add']);
  }

  editInfo(id: number) {
    this.router.navigate(['tabs/admin/info/edit/' + id]);
    // console.log(`Edit Info with ID: ${id}`);
  }

  deleteInfo(id: number) {
    this.infos = this.infos.filter(info => info.id !== id);
  }
}
