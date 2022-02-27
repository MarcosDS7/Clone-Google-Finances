import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trend-market',
  templateUrl: './trend-market.component.html',
  styleUrls: ['./trend-market.component.scss'],
})
export class TrendMarketComponent implements OnInit {
  trendList: any[] = [];
  profitableList: any[] = [];
  lessList: any[] = [];

  constructor(public translate: TranslateService) {}

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
        percentage: '1,42%',
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

    this.profitableList.push(
      {
        code: 'SULA11',
        name: 'Sul América SA',
        variation: 'R$ 30,94',
        percentage: '25,16%',
        icon: 'arrow_upward',
      },
      {
        code: 'RDOR3',
        name: 'Rede d or Sao Luiz SA',
        variation: 'R$ 55,50',
        percentage: '8,82%',
        icon: 'arrow_upward',
      },
      {
        code: 'INEP4',
        name: 'Grupo Inepar',
        variation: 'R$ 1,54',
        percentage: '6,21%',
        icon: 'arrow_upward',
      },
      {
        code: 'LAND3',
        name: 'Terra Santa Properties Agricolas SA',
        variation: 'R$ 21,69',
        percentage: '4,83%',
        icon: 'arrow_upward',
      },
      {
        code: 'BRKM3',
        name: 'Braskem',
        variation: 'R$ 44,53',
        percentage: '4,75%',
        icon: 'arrow_upward',
      },
      {
        code: 'CMIG3',
        name: 'Companhia Energética de Minas Gerais',
        variation: 'R$ 17,49',
        percentage: '4,67%',
        icon: 'arrow_upward',
      }
    );

    this.lessList.push(
      {
        code: 'ETER3',
        name: 'Eternit',
        variation: 'R$ 14,75',
        percentage: '0,00%',
        icon: 'arrow_upward',
      },
      {
        code: 'NUBR33',
        name: 'Nubank Holding Bdr',
        variation: 'R$ 6,32',
        percentage: '0,00%',
        icon: 'arrow_upward',
      },
      {
        code: 'Z1OM34',
        name: 'ZOOM',
        variation: 'R$ 24,01',
        percentage: '0,00%',
        icon: 'arrow_upward',
      },
      {
        code: 'C1GP34',
        name: 'Costar Group Inc Bdr',
        variation: 'R$ 2,73',
        percentage: '0,00%',
        icon: 'arrow_upward',
      },
      {
        code: 'RRRP3',
        name: 'R$ 31,59',
        variation: 'R$ 14,75',
        percentage: '0,00%',
        icon: 'arrow_upward',
      },
      {
        code: 'BIDI11',
        name: 'Inter',
        variation: 'R$ 20,96',
        percentage: '0,00%',
        icon: 'arrow_upward',
      }
    );
  }

  active(i: any) {
    document.getElementById('t' + i)!.classList.toggle('text-primary');
    if (document.getElementById('t' + i)!.classList.contains('text-primary')) {
      document.getElementById('t-' + i)!.innerText = this.translate.instant(
        'ONHIGH.TXT_FOLLOWED'
      );
    } else {
      document.getElementById('t-' + i)!.innerText =
        this.translate.instant('ONHIGH.TXT_FOLLOW');
    }
  }

  activeT(i: any) {
    document.getElementById('tr' + i)!.classList.toggle('text-primary');
    if (document.getElementById('tr' + i)!.classList.contains('text-primary')) {
      document.getElementById('tr-' + i)!.innerText = this.translate.instant(
        'ONHIGH.TXT_FOLLOWED'
      );
    } else {
      document.getElementById('tr-' + i)!.innerText =
        this.translate.instant('ONHIGH.TXT_FOLLOW');
    }
  }

  activeTR(i: any) {
    document.getElementById('tre' + i)!.classList.toggle('text-primary');
    if (
      document.getElementById('tre' + i)!.classList.contains('text-primary')
    ) {
      document.getElementById('tre-' + i)!.innerText = this.translate.instant(
        'ONHIGH.TXT_FOLLOWED'
      );
    } else {
      document.getElementById('tre-' + i)!.innerText =
        this.translate.instant('ONHIGH.TXT_FOLLOW');
    }
  }
}
