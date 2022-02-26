import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsList: any[] = [];
  localList: any[] = [];
  worldwideList: any[] = [];

  ngOnInit(): void {
    this.newsList.push(
      {
        source: 'Valor Investe',
        hours: 'há 6 horas',
        news: 'Imposto de Renda 2022: Receita Federal divulga regras para declaração esta semana',
        image: './assets/img/1.jpeg',
      },
      {
        source: 'O Município',
        hours: 'há 4 horas',
        news: 'Fundos públicos e INSS também são fontes de dinheiro esquecido; veja como consultar',
        image: './assets/img/2.jpeg',
      },
      {
        source: 'O Município',
        hours: 'há 1 dia',
        news: 'Rádio Caca (RACA): A criptomoeda “da mãe de Elon Musk” que despencou 65% em 6 meses',
        image: './assets/img/3.jpeg',
      },
      {
        source: 'Edital Concursos Brasil',
        hours: 'há 7 horas',
        news: 'Como garantir a aposentadoria do MEI com valor superior a um salário',
        image: './assets/img/4.jpeg',
      },
      {
        source: 'G1',
        hours: 'há 1 dia',
        news: 'Amortizar o financiamento ou investir em renda fixa? Com alta da Selic, veja o que vale a pena',
        image: './assets/img/5.png',
      },
      {
        source: 'Economia & Negócios',
        hours: 'há 9 horas',
        news: 'Após perder indústrias, Osasco vira polo tecnológico',
        image: './assets/img/6.jpeg',
      },
      {
        source: 'TudoCelular.com',
        hours: 'há 1 dia',
        news: 'Americanas e Submarino: usuários reportam instabilidade e redirecionamento para site',
        image: './assets/img/7.jpeg',
      },
      {
        source: 'CenárioMT',
        hours: 'há 3 horas',
        news: 'Saiba onde assistir Venezia x Genoa pelo campeonato italiano neste domingo 20/02',
        image: './assets/img/8.jpeg',
      }
    );

    this.localList.push(
      {
        source: 'Money Times',
        hours: 'há 1 horas',
        news: '5 ações para buscar lucro no curto prazo e superar o Ibovespa, segundo a MyCap',
        image: './assets/img/9.jpeg',
      },
      {
        source: 'InfoMoney',
        hours: 'há 1 dia',
        news: 'Carnaval 2022: veja como será funcionamento de bancos, B3 e serviços públicos em SP',
        image: './assets/img/10.jpeg',
      },
      {
        source: 'Investing.com',
        hours: 'há 7 horas',
        news: 'Ibovespa, Dólar, Petrobras, Lojas Renner, JHSF, Minerva: Giro Semanal dos Gráficos',
        image: './assets/img/11.jpeg',
      },
      {
        source: 'Investing.com',
        hours: 'há 1 dia',
        news: 'Fechamento da Semana - IBOV interrompe série de altas',
        image: './assets/img/12.jpeg',
      },
      {
        source: 'Valor Econômico',
        hours: 'há 1 dia',
        news: 'B3 autoriza Bmg a manter circulação de ações abaixo do mínimo',
        image: './assets/img/13.png',
      },
      {
        source: 'Valor Econômico',
        hours: 'há 1 dia',
        news: 'Ibovespa fecha em queda pressionado por crise geopolítica',
        image: './assets/img/14.jpeg',
      },
      {
        source: 'E-Investidor',
        hours: 'há 1 dia',
        news: 'Ibovespa hoje: Rumo (RAIL3), Locaweb (LWSA3) e Natura (NTCO3) são os destaques negativos',
        image: './assets/img/15.jpeg',
      },
      {
        source: 'Economia & Negócios',
        hours: 'há 1 dia',
        news: 'Termômetro Broadcast Bolsa: Quadro de expectativas para Ibovespa está mais equilibrado',
        image: './assets/img/16.jpeg',
      },
      {
        source: 'G1',
        hours: 'há 3 dia',
        news: 'Bovespa fecha em queda após atingir maior patamar em 5 meses',
        image: './assets/img/17.jpeg',
      }
    );

    this.worldwideList.push(
      {
        source: 'Seu Dinheiro',
        hours: 'há 1 dia',
        news: 'Bolsa de Nova York fecha em queda com tensão geopolítica; Dow Jones, S&P 500 e Nasdaq amargam perdas na semana',
        image: './assets/img/18.jpeg',
      },
      {
        source: 'InfoMoney',
        hours: 'há 2 dia',
        news: 'Índices futuros dos EUA sobem após Dow Jones registrar pior sessão do ano: os assuntos que vão movimentar o mercado hoje',
        image: './assets/img/19.jpeg',
      },
      {
        source: 'ADVFN',
        hours: 'há 2 dia',
        news: 'Dow Jones teve pior declínio de 2022 à medida que tensões Rússia-Ucrânia preocupa investidores',
        image: './assets/img/20.jpeg',
      },
      {
        source: 'The Economic Times',
        hours: 'há 10 horas',
        news: '​All signs indicate stock market will be under pressure for next 6 months',
        image: './assets/img/21.jpeg',
      },
      {
        source: 'The Economic Times',
        hours: 'há 1 dia',
        news: '70% of Sensex stocks will go nowhere, bet on smallcaps to compound your money: Shankar Sharma',
        image: './assets/img/22.jpeg',
      },
      {
        source: 'MarketWatch',
        hours: 'há 2 dia',
        news: 'FTSE wraps up losing week, but Evraz shines as investors watch Russia-Ukraine developments',
        image: './assets/img/16.jpeg',
      },
      {
        source: 'Yahoo Finance',
        hours: 'há 1 dia',
        news: '3 FTSE 100 stocks I’d avoid like the plague!',
        image: './assets/img/23.jpeg',
      },
      {
        source: 'Morningstar',
        hours: 'há 2 dia',
        news: 'FTSE 100 to Edge Higher; Retail Sales Recover',
        image: './assets/img/24.png',
      },
      {
        source: 'Nasdaq',
        hours: 'há 2 dia',
        news: 'Tokyos Nikkei share average opens down 1.24 pct',
        image: './assets/img/25.jpeg',
      }
    );
  }
}
