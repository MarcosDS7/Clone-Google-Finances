import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss'],
})
export class TrendComponent implements OnInit {
  trendList: any[] = [];

  constructor(public translate: TranslateService) {}

  ngOnInit() {
    this.trendList.push(
      {
        name: this.translate.instant('TREND.ITEM1'),
        icon: 'stacked_line_chart',
      },
      {
        name: this.translate.instant('TREND.ITEM2'),
        icon: 'equalizer',
      },
      {
        name: this.translate.instant('TREND.ITEM3'),
        icon: 'trending_up',
      },
      {
        name: this.translate.instant('TREND.ITEM4'),
        icon: 'trending_down',
      },
      {
        name: this.translate.instant('TREND.ITEM5'),
        icon: 'compost',
      },
      {
        name: this.translate.instant('TREND.ITEM6'),
        icon: 'copyright',
      },
      {
        name: this.translate.instant('TREND.ITEM7'),
        icon: 'paid',
      }
    );
  }
}
