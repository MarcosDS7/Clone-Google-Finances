import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  listDataEUA: any[] = [];
  listDataEurope: any[] = [];
  listDataAsia: any[] = [];
  listDataCoin: any[] = [];
  listDataCrypto: any[] = [];

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
    this.listDataEurope.push(
      {
        icon: 'arrow_downward',
        name: 'DAX',
        value: '15.099,56',
        percentage: '-1,75%',
        PercentagePoint: '-268,91',
      },
      {
        icon: 'arrow_downward',
        name: 'FTSE 100',
        value: '7.516,40',
        percentage: '-0,17%',
        PercentagePoint: '-12,44',
      },
      {
        icon: 'arrow_downward',
        name: 'CAC 40',
        value: '6.951,38',
        percentage: '-0,77%',
        PercentagePoint: '-54,25',
      },
      {
        icon: 'arrow_downward',
        name: 'Euro Stoxx 50',
        value: '4.086,58',
        percentage: '-1,31%',
        PercentagePoint: '-54,44',
      }
    );
    this.listDataAsia.push(
      {
        icon: 'arrow_upward',
        name: 'Nikki 255',
        value: '27.439,99',
        percentage: '+0,73%',
        PercentagePoint: '+198,68',
      },
      {
        icon: 'arrow_downward',
        name: 'SSE Composite',
        value: '3.361,44',
        percentage: '-0,97%',
        PercentagePoint: '-32,81',
      },
      {
        icon: 'arrow_upward',
        name: 'Hang Seng',
        value: '24.573,29',
        percentage: '+3,24%',
        PercentagePoint: '+771,03',
      },
      {
        icon: 'arrow_downward',
        name: 'BSE SENSEX',
        value: '58.644,82',
        percentage: '-0,24%',
        PercentagePoint: '-143,20',
      },
      {
        icon: 'arrow_downward',
        name: 'NIFTY 50',
        value: '17.516,30',
        percentage: '-0,25%',
        PercentagePoint: '-43,90',
      }
    );
    this.listDataCoin.push(
      {
        icon: 'arrow_forward',
        name: 'USD/BRL',
        value: '5,3285',
        percentage: '0,00%',
        PercentagePoint: '0,0000',
      },
      {
        icon: 'arrow_forward',
        name: 'EUR/BRL',
        value: '6,1007',
        percentage: '0,00%',
        PercentagePoint: '0,0000',
      },
      {
        icon: 'arrow_forward',
        name: 'GBP/BRL',
        value: '7,2136',
        percentage: '0,00%',
        PercentagePoint: '0,0000',
      },
      {
        icon: 'arrow_forward',
        name: 'JPY/BRL',
        value: '0,0462',
        percentage: '0,00%',
        PercentagePoint: '0,0000',
      },
      {
        icon: 'arrow_forward',
        name: 'AUD/BRL',
        value: '3,7675',
        percentage: '0,00%',
        PercentagePoint: '0,0000',
      }
    );
    this.listDataCrypto.push(
      {
        icon: 'arrow_upward',
        name: 'Bitcoin',
        value: '221.409,93',
        percentage: '+0,29%',
        PercentagePoint: '+630,89',
      },
      {
        icon: 'arrow_downward',
        name: 'Ether',
        value: '15.942,66',
        percentage: '-0,75%',
        PercentagePoint: '-120,10',
      },
      {
        icon: 'arrow_downward',
        name: 'Cardano',
        value: '-0,86%',
        percentage: '-0,84%',
        PercentagePoint: '-0,0502',
      },
      {
        icon: 'arrow_upward',
        name: 'XRP',
        value: '3,5512',
        percentage: '+0,20%',
        PercentagePoint: '+0,0069',
      },
      {
        icon: 'arrow_downward',
        name: 'Dogecoin',
        value: '0,7825',
        percentage: '-0,011%',
        PercentagePoint: '-0,00008',
      }
    );
  }
}
