import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss'],
})
export class TrendComponent implements OnInit {
  trendList: any[] = [];

  ngOnInit(): void {
    this.trendList.push(
      {
        name: 'Índices de mercado',
        icon: 'stacked_line_chart',
      },
      {
        name: 'Mais ativos',
        icon: 'equalizer',
      },
      {
        name: 'Rentáveis',
        icon: 'trending_up',
      },
      {
        name: 'Menos rentáveis',
        icon: 'trending_down',
      },
      {
        name: 'Líderes em sustentabilidade',
        icon: 'compost',
      },
      {
        name: 'Criptomoedas',
        icon: 'copyright',
      },
      {
        name: 'Moedas',
        icon: 'paid',
      }
    );
  }
}
