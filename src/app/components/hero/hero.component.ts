import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  listDataEUA: any[] = [];
  ngOnInit(): void {
    this.listDataEUA.push(
      {
        icon: 'arrow_upward',
        name: 'Dow Jones',
        value: '35.405,24',
        percentage: '+0,78%',
        PercentagePoint: '+273,38',
      },
      {
        icon: 'arrow_upward',
        name: 'S&P 500',
        value: '4.546,54',
        percentage: '+0,69%',
        PercentagePoint: '+30,99',
      },
      {
        icon: 'arrow_upward',
        name: 'Nasdaq',
        value: '14.346,00',
        percentage: '+0,75%',
        PercentagePoint: '+106,12',
      },
      {
        icon: 'arrow_upward',
        name: 'Russell 2000',
        value: '2.050,74',
        percentage: '+1,10%',
        PercentagePoint: '+22,29',
      },
      {
        icon: 'arrow_downward',
        name: 'VIX',
        value: '21,96',
        percentage: '-11,56%',
        PercentagePoint: '-2,87',
      }
    );
  }
}
