import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigate_to_info_detail(){
    this.router.navigate(['tabs/info/info-detail']);
  }
}
