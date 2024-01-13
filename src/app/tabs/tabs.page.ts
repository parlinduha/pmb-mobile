import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild(IonTabs) tabs: IonTabs;
  selectedTab: any;
  userRole: string;

  constructor() {}

  ngOnInit() {
    const userActiveString = localStorage.getItem('userActive');

    if (userActiveString) {
      const userActive = JSON.parse(userActiveString);

      // Assuming 'role' is the property containing the user role in the stored object
      this.userRole = userActive.role || 'admin';
    } else {
      // Handle the case where 'userActive' is not in localStorage
      // Default to 'admin' or any other appropriate action
      this.userRole = 'admin';
    }
  }

  setSelectedTab() {
    this.selectedTab = this.tabs.getSelected();
  }
}
