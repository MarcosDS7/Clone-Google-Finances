import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsList: any[] = [];
  localList: any[] = [];
  worldwideList: any[] = [];

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((e: LangChangeEvent) => {
      for (let i = 0; i <= this.newsList.length; i++) {
        this.newsList.splice(i, this.newsList.length);
        this.localList.splice(i, this.localList.length);
        this.worldwideList.splice(i, this.worldwideList.length);
      }

      this.newsList.push(
        {
          source: 'Valor Investe',
          hours: e.translations.NEW.NEW_LIST.NEW1.DATE,
          news: e.translations.NEW.NEW_LIST.NEW1.NAME,
          image: './assets/img/1.jpeg',
        },
        {
          source: 'O Município',
          hours: e.translations.NEW.NEW_LIST.NEW2.DATE,
          news: e.translations.NEW.NEW_LIST.NEW2.NAME,
          image: './assets/img/2.jpeg',
        },
        {
          source: 'O Município',
          hours: e.translations.NEW.NEW_LIST.NEW3.DATE,
          news: e.translations.NEW.NEW_LIST.NEW3.NAME,
          image: './assets/img/3.jpeg',
        },
        {
          source: 'Edital Concursos Brasil',
          hours: e.translations.NEW.NEW_LIST.NEW4.DATE,
          news: e.translations.NEW.NEW_LIST.NEW4.NAME,
          image: './assets/img/4.jpeg',
        },
        {
          source: 'G1',
          hours: e.translations.NEW.NEW_LIST.NEW5.DATE,
          news: e.translations.NEW.NEW_LIST.NEW5.NAME,
          image: './assets/img/5.png',
        },
        {
          source: 'Economia & Negócios',
          hours: e.translations.NEW.NEW_LIST.NEW6.DATE,
          news: e.translations.NEW.NEW_LIST.NEW6.NAME,
          image: './assets/img/6.jpeg',
        },
        {
          source: 'TudoCelular.com',
          hours: e.translations.NEW.NEW_LIST.NEW7.DATE,
          news: e.translations.NEW.NEW_LIST.NEW7.NAME,
          image: './assets/img/7.jpeg',
        },
        {
          source: 'CenárioMT',
          hours: e.translations.NEW.NEW_LIST.NEW8.DATE,
          news: e.translations.NEW.NEW_LIST.NEW8.NAME,
          image: './assets/img/8.jpeg',
        },
        {
          source: 'TudoCelular.com',
          hours: e.translations.NEW.NEW_LIST.NEW9.DATE,
          news: e.translations.NEW.NEW_LIST.NEW9.NAME,
          image: './assets/img/26.jpeg',
        }
      );

      this.localList.push(
        {
          source: 'Money Times',
          hours: e.translations.NEW.LOCAL_LIST.NEW1.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW1.NAME,
          image: './assets/img/9.jpeg',
        },
        {
          source: 'InfoMoney',
          hours: e.translations.NEW.LOCAL_LIST.NEW2.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW2.NAME,
          image: './assets/img/10.jpeg',
        },
        {
          source: 'Investing.com',
          hours: e.translations.NEW.LOCAL_LIST.NEW3.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW3.NAME,
          image: './assets/img/11.jpeg',
        },
        {
          source: 'Investing.com',
          hours: e.translations.NEW.LOCAL_LIST.NEW4.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW4.NAME,
          image: './assets/img/12.jpeg',
        },
        {
          source: 'Valor Econômico',
          hours: e.translations.NEW.LOCAL_LIST.NEW5.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW5.NAME,
          image: './assets/img/13.png',
        },
        {
          source: 'Valor Econômico',
          hours: e.translations.NEW.LOCAL_LIST.NEW6.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW6.NAME,
          image: './assets/img/14.jpeg',
        },
        {
          source: 'E-Investidor',
          hours: e.translations.NEW.LOCAL_LIST.NEW7.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW7.NAME,
          image: './assets/img/15.jpeg',
        },
        {
          source: 'Economia & Negócios',
          hours: e.translations.NEW.LOCAL_LIST.NEW8.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW8.NAME,
          image: './assets/img/16.jpeg',
        },
        {
          source: 'G1',
          hours: e.translations.NEW.LOCAL_LIST.NEW9.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW9.NAME,
          image: './assets/img/17.jpeg',
        }
      );

      this.worldwideList.push(
        {
          source: 'Seu Dinheiro',
          hours: e.translations.NEW.WORD_WIDE_LIST.NEW1.DATE,
          news: e.translations.NEW.WORD_WIDE_LIST.NEW1.NAME,
          image: './assets/img/18.jpeg',
        },
        {
          source: 'InfoMoney',
          hours: e.translations.NEW.WORD_WIDE_LIST.NEW2.DATE,
          news: e.translations.NEW.WORD_WIDE_LIST.NEW2.NAME,
          image: './assets/img/19.jpeg',
        },
        {
          source: 'ADVFN',
          hours: e.translations.NEW.WORD_WIDE_LIST.NEW3.DATE,
          news: e.translations.NEW.WORD_WIDE_LIST.NEW3.NAME,
          image: './assets/img/20.jpeg',
        },
        {
          source: 'The Economic Times',
          hours: e.translations.NEW.WORD_WIDE_LIST.NEW4.DATE,
          news: e.translations.NEW.WORD_WIDE_LIST.NEW4.NAME,
          image: './assets/img/21.jpeg',
        },
        {
          source: 'The Economic Times',
          hours: e.translations.NEW.WORD_WIDE_LIST.NEW5.DATE,
          news: e.translations.NEW.WORD_WIDE_LIST.NEW5.NAME,
          image: './assets/img/22.jpeg',
        },
        {
          source: 'MarketWatch',
          hours: e.translations.NEW.WORD_WIDE_LIST.NEW6.DATE,
          news: e.translations.NEW.WORD_WIDE_LIST.NEW6.NAME,
          image: './assets/img/16.jpeg',
        },
        {
          source: 'Yahoo Finance',
          hours: e.translations.NEW.WORD_WIDE_LIST.NEW7.DATE,
          news: e.translations.NEW.WORD_WIDE_LIST.NEW7.NAME,
          image: './assets/img/23.jpeg',
        },
        {
          source: 'Morningstar',
          hours: e.translations.NEW.WORD_WIDE_LIST.NEW8.DATE,
          news: e.translations.NEW.WORD_WIDE_LIST.NEW8.NAME,
          image: './assets/img/24.png',
        },
        {
          source: 'Nasdaq',
          hours: e.translations.NEW.LOCAL_LIST.NEW9.DATE,
          news: e.translations.NEW.LOCAL_LIST.NEW9.NAME,
          image: './assets/img/25.jpeg',
        }
      );
    });
  }
}
