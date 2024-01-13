import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  getCurrentDateTime(): string {
    const currentDate = new Date();
    const day = this.getDayName(currentDate.getDay());
    const formattedDate = this.formatNumber(currentDate.getDate());
    const month = this.getMonthName(currentDate.getMonth());
    const year = currentDate.getFullYear();
    const hours = this.formatNumber(currentDate.getHours());
    const minutes = this.formatNumber(currentDate.getMinutes());

    return `${day}, ${formattedDate} ${month} ${year} | ${hours}:${minutes}`;
  }

  private getDayName(dayIndex: number): string {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return days[dayIndex];
  }

  private getMonthName(monthIndex: number): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthIndex];
  }

  private formatNumber(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
