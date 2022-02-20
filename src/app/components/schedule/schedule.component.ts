import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  calendarList: any[] = [];

  ngOnInit(): void {
    this.calendarList.push(
      {
        month: 'FEV',
        day: '22',
        name: 'Cosan S.A.',
        date: '22 de fev. de 2022, 11:00',
        icon: 'calendar_month',
      },
      {
        month: 'FEV',
        day: '22',
        name: 'Inter',
        date: '22 de fev. de 2022, 11:00',
        icon: 'calendar_month',
      },
      {
        month: 'FEV',
        day: '23',
        name: 'Localiza',
        date: '23 de fev. de 2022, 12:00',
        icon: 'calendar_month',
      },
      {
        month: 'FEV',
        day: '23',
        name: 'Gerdau',
        date: '23 de fev. de 2022, 14:00',
        icon: 'calendar_month',
      },
      {
        month: 'FEV',
        day: '24',
        name: 'Petrobras',
        date: '24 de fev. de 2022, 10:30',
        icon: 'calendar_month',
      },
      {
        month: 'FEV',
        day: '24',
        name: 'AMBEV',
        date: '24 de fev. de 2022, 12:30',
        icon: 'calendar_month',
      }
    );
  }
}
