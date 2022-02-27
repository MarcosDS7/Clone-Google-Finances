import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-on-high',
  templateUrl: './on-high.component.html',
  styleUrls: ['./on-high.component.scss'],
})
export class OnHighComponent implements OnInit {
  actionsHighList: any[] = [];

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.actionsHighList.push(
      {
        code: 'CASH3',
        name: 'Meliuz SA',
        currentValue: '2,81',
        variation: '+R$ 0,100',
        percentage: '3,69%',
        icon: 'arrow_upward',
      },
      {
        code: 'MGLU3',
        name: 'Magazine Luiza',
        currentValue: '6,67',
        variation: '+R$ 0,19',
        percentage: '2,93%',
        icon: 'arrow_upward',
      },
      {
        code: 'BCFF11',
        name: 'Fundos de Investimentos I...',
        currentValue: '70,78',
        variation: '+R$ 1,39',
        percentage: '2,00%',
        icon: 'arrow_upward',
      },
      {
        code: 'VIIA3',
        name: 'Via',
        currentValue: '4,08',
        variation: '+R$ 0,060',
        percentage: '1,49%',
        icon: 'arrow_upward',
      },
      {
        code: 'UNIP6',
        name: 'Unipar Carbocloro',
        currentValue: '97,30',
        variation: '-R$ 1,70',
        percentage: '1,72%',
        icon: 'arrow_downward',
      },
      {
        code: 'CSAN3',
        name: 'Cosan S.A.',
        currentValue: '21,99',
        variation: '-R$ 0,28',
        percentage: '1,26%',
        icon: 'arrow_downward',
      }
    );
  }

  active(i: any) {
    document.getElementById(i)!.classList.toggle('text-primary');
    if (document.getElementById(i)!.classList.contains('text-primary')) {
      document.getElementById('follow-' + i)!.innerText =
        this.translate.instant('ONHIGH.TXT_FOLLOWED');
    } else {
      document.getElementById('follow-' + i)!.innerText =
        this.translate.instant('ONHIGH.TXT_FOLLOW');
    }
  }
}
