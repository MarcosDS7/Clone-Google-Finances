import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend-market',
  templateUrl: './trend-market.component.html',
  styleUrls: ['./trend-market.component.scss'],
})
export class TrendMarketComponent implements OnInit {
  trendList: any[] = [];

  ngOnInit(): void {
    this.trendList.push(
      {
        code: 'MGLU3',
        name: 'Magazine Luiza',
        variation: 'R$ 5,91',
        percentage: '2,64%',
        icon: 'arrow_downward',
      },
      {
        code: 'PETR4',
        name: 'Petrobras',
        variation: 'R$ 34,22',
        percentage: '1,42%%',
        icon: 'arrow_upward',
      },
      {
        code: 'VIIA3',
        name: 'Via',
        variation: 'R$ 3,82',
        percentage: '1,29%',
        icon: 'arrow_downward',
      },
      {
        code: 'OIBR3',
        name: 'Oi',
        variation: 'R$ 0,80',
        percentage: '1,23%',
        icon: 'arrow_downward',
      },
      {
        code: 'B3SA3',
        name: 'B3 SA - Brasil Bolsa Balcao',
        variation: 'R$ 14,59',
        percentage: '1,39%',
        icon: 'arrow_upward',
      },
      {
        code: 'CIEL3',
        name: 'Cielo',
        variation: 'R$ 2,60',
        percentage: '0,38%',
        icon: 'arrow_downward',
      }
    );
  }
}
