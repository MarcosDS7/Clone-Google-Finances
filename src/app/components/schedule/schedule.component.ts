import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  calendarList: any[] = [];

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((e: LangChangeEvent) => {
      for (let i = 0; i <= this.calendarList.length; i++) {
        this.calendarList.splice(i, this.calendarList.length);
      }

      this.calendarList.push(
        {
          month: e.translations.SCHEDULE.MONTH,
          day: '22',
          name: 'Cosan S.A.',
          date: '22 ' + e.translations.SCHEDULE.MONTHOF + ' 2022, 11:00',
          icon: 'calendar_month',
        },
        {
          month: e.translations.SCHEDULE.MONTH,
          day: '22',
          name: 'Inter',
          date: '22 ' + e.translations.SCHEDULE.MONTHOF + ' 2022, 11:00',
          icon: 'calendar_month',
        },
        {
          month: e.translations.SCHEDULE.MONTH,
          day: '23',
          name: 'Localiza',
          date: '23 ' + e.translations.SCHEDULE.MONTHOF + ' 2022, 12:00',
          icon: 'calendar_month',
        },
        {
          month: e.translations.SCHEDULE.MONTH,
          day: '23',
          name: 'Gerdau',
          date: '23 ' + e.translations.SCHEDULE.MONTHOF + ' 2022, 14:00',
          icon: 'calendar_month',
        },
        {
          month: e.translations.SCHEDULE.MONTH,
          day: '24',
          name: 'Petrobras',
          date: '24 ' + e.translations.SCHEDULE.MONTHOF + ' 2022, 10:30',
          icon: 'calendar_month',
        },
        {
          month: e.translations.SCHEDULE.MONTH,
          day: '24',
          name: 'AMBEV',
          date: '24 ' + e.translations.SCHEDULE.MONTHOF + ' 2022, 12:30',
          icon: 'calendar_month',
        }
      );
    });
  }
}
