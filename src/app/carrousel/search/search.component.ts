import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  interestList: any[] = [];

  ngOnInit(): void {
    this.interestList.push(
      {
        code: 'ITSA3',
        name: 'Itaúsa',
        value: 'R$ 10,27',
        percentage: '0,00%',
      },
      {
        code: 'BBDC3',
        name: 'Bradesco',
        value: 'R$ 17,61',
        percentage: '0,00%',
      },
      {
        code: 'NUBR33',
        name: 'Nubank Holding Bdr',
        value: 'R$ 7,50',
        percentage: '0,00%',
      },
      {
        code: 'ABEV3',
        name: 'AMBEV',
        value: 'R$ 14,71',
        percentage: '0,00%',
      },
      {
        code: 'HGLG11',
        name: 'CSHG LOGÍSTICA FDO...',
        value: 'R$ 165,98',
        percentage: '0,00%',
      },
      {
        code: 'OIBR3',
        name: 'Oi',
        value: 'R$ 0,81',
        percentage: '0,00%',
      },
      {
        code: 'BBAS3',
        name: 'Banco do Brasil',
        value: 'R$ 35,61',
        percentage: '0,00%',
      },
      {
        code: 'IRBR3',
        name: 'IRB Brasil RE',
        value: 'R$ 3,21',
        percentage: '0,00%',
      },
      {
        code: 'ITUB3',
        name: 'Itaú Unibanco',
        value: 'R$ 22,22',
        percentage: '0,00%',
      },
      {
        code: 'ÍNDICE',
        name: 'Ibovespa',
        value: '112.891,80',
        percentage: '0,00%',
      },
      {
        code: 'BRPR3',
        name: 'BR Properties S.A.',
        value: 'R$ 7,33',
        percentage: '0,00%',
      },
      {
        code: 'SANB11',
        name: 'Banco Santander...',
        value: 'R$ 31,61',
        percentage: '0,00%',
      },
      {
        code: 'GOOGL',
        name: 'Alphabet Inc',
        value: '$ 2.596,27',
        percentage: '0,00%',
      },
      {
        code: 'ITSA4',
        name: 'Itaúsa',
        value: 'R$ 10,23',
        percentage: '0,00%',
      },
      {
        code: 'RAPT4',
        name: 'Empresas Randon',
        value: 'R$ 10,66',
        percentage: '0,00%',
      },
      {
        code: 'TOTS3',
        name: 'Totvs',
        value: 'R$ 32,61',
        percentage: '0,00%',
      },
      {
        code: 'BBAS3',
        name: 'Banco do Brasil',
        value: 'R$ 35,61',
        percentage: '0,00%',
      },
      {
        code: 'MGLU3',
        name: 'Magazine Luiza',
        value: 'R$ 6,07',
        percentage: '0,00%',
      }
    );
  }
}
