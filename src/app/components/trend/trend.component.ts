import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss'],
})
export class TrendComponent implements OnInit {
  trendList: any[] = [];

  constructor(public translate: TranslateService) {}

  ngOnInit() {
    this.translate.onLangChange.subscribe((e: LangChangeEvent) => {
      for (let i = 0; i <= this.trendList.length; i++) {
        this.trendList.splice(i, this.trendList.length);
      }

      this.trendList.push(
        {
          name: e.translations.TREND.ITEM1,
          icon: 'stacked_line_chart',
        },
        {
          name: e.translations.TREND.ITEM2,
          icon: 'equalizer',
        },
        {
          name: e.translations.TREND.ITEM3,
          icon: 'trending_up',
        },
        {
          name: e.translations.TREND.ITEM4,
          icon: 'trending_down',
        },
        {
          name: e.translations.TREND.ITEM5,
          icon: 'compost',
        },
        {
          name: e.translations.TREND.ITEM6,
          icon: 'copyright',
        },
        {
          name: e.translations.TREND.ITEM7,
          icon: 'paid',
        }
      );
    });
  }
}
