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
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6iryUD7JOHfSxPhjZe-DQhHsE-9fPALJ1qEza9wnCySMR6c2tan5sYRs-fkE',
      },
      {
        source: 'O Município',
        hours: 'há 4 horas',
        news: 'Fundos públicos e INSS também são fontes de dinheiro esquecido; veja como consultar',
        image:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQr34ecP-lgrZTaXOc7CbAqeMHkxiwNDRpCuhUqM2dqPDaKAdGXIiUF3ocgsxY',
      },
      {
        source: 'O Município',
        hours: 'há 1 dia',
        news: 'Rádio Caca (RACA): A criptomoeda “da mãe de Elon Musk” que despencou 65% em 6 meses',
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7NwxlxbhASRVQiM-r0MwQJh7DmaONJBrStM39h550ueYqh2m88lg0_R6RqJg',
      },
      {
        source: 'Edital Concursos Brasil',
        hours: 'há 7 horas',
        news: 'Como garantir a aposentadoria do MEI com valor superior a um salário',
        image:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYzh1a9TLUEdWEb7VEByifRzD6pgQJi0LqLIA7lNKU4M55NknAluTD373He5c',
      },
      {
        source: 'G1',
        hours: 'há 1 dia',
        news: 'Amortizar o financiamento ou investir em renda fixa? Com alta da Selic, veja o que vale a pena',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YrEU2xmWyZpVXqAJE1GZaF0-1b1Oik-RDAtNa1EBtR6r3i9q-KSByNJSI38',
      },
      {
        source: 'Economia & Negócios',
        hours: 'há 9 horas',
        news: 'Após perder indústrias, Osasco vira polo tecnológico',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBnZWx_aSbrunYrMucLDQoL0hMQUCdmMe2TvAZ-fUOuaHn5iWYvxN8A0Yb4w',
      },
      {
        source: 'TudoCelular.com',
        hours: 'há 1 dia',
        news: 'Americanas e Submarino: usuários reportam instabilidade e redirecionamento para site',
        image:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhvSJs5Dj-B0yC8-poSpi8bYxju7QQSChZenSQ7T78ktgobAdI521BsCW_FbE',
      },
      {
        source: 'CenárioMT',
        hours: 'há 3 horas',
        news: 'Saiba onde assistir Venezia x Genoa pelo campeonato italiano neste domingo 20/02',
        image:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtwB8MipvevLKkWUwSB5EQLFZSWjawic4qUgeR65a3XT8N2YFWjaYPzru1iRY',
      }
    );

    this.localList.push(
      {
        source: 'Money Times',
        hours: 'há 1 horas',
        news: '5 ações para buscar lucro no curto prazo e superar o Ibovespa, segundo a MyCap',
        image:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ3C8zsY66Z_UZoaU6LcpuusYU5dTfSdpBZ0YB_-P7rMDDV2saguJtBNLA-Vac',
      },
      {
        source: 'InfoMoney',
        hours: 'há 1 dia',
        news: 'Carnaval 2022: veja como será funcionamento de bancos, B3 e serviços públicos em SP',
        image:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8RtD2VQ8T56BOk-mGQsj6JvogUznmcAFUr28W6O2XnpLBNQ_ru1wpSUJV1jc',
      },
      {
        source: 'Investing.com',
        hours: 'há 7 horas',
        news: 'Ibovespa, Dólar, Petrobras, Lojas Renner, JHSF, Minerva: Giro Semanal dos Gráficos',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BtcUGyOlVfr1QgOnM0R7tNkXCXHB2YvrBsXKC0kdlzagEBJBDb8wGyMbq_0',
      },
      {
        source: 'Investing.com',
        hours: 'há 1 dia',
        news: 'Fechamento da Semana - IBOV interrompe série de altas',
        image:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSR4mHPeHwDxTICwbnz5Xbucf0yNkUV3e4cmiHOnwvB1XQlGCY3Id08gBskg90',
      },
      {
        source: 'Valor Econômico',
        hours: 'há 1 dia',
        news: 'B3 autoriza Bmg a manter circulação de ações abaixo do mínimo',
        image:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW6MrAb4rKq92xkwo7KBqmYOfFdO6smTvAwz1f3jOepJYq8nijTMpCLslVzuE',
      },
      {
        source: 'Valor Econômico',
        hours: 'há 1 dia',
        news: 'Ibovespa fecha em queda pressionado por crise geopolítica',
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7Ri0ODcS7SEPg6ppmga_RO5ujHY5cMRqNZE41vU-8g6hJqLi2MeB-ff2zp_s',
      },
      {
        source: 'E-Investidor',
        hours: 'há 1 dia',
        news: 'Ibovespa hoje: Rumo (RAIL3), Locaweb (LWSA3) e Natura (NTCO3) são os destaques negativos',
        image:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScFPBS6o8JUU8bFGOwmxOTtvzuf5sWLv9iiJbmQutQyWG50JICtKX6g7nxUr4',
      },
      {
        source: 'Economia & Negócios',
        hours: 'há 1 dia',
        news: 'Termômetro Broadcast Bolsa: Quadro de expectativas para Ibovespa está mais equilibrado',
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKRnE7hmRfhgX3-4m8yBGiL_CnTl4kzRhcBQnARAYKz2xmtZY0w-44Nx-WyjE',
      },
      {
        source: 'G1',
        hours: 'há 3 dia',
        news: 'Bovespa fecha em queda após atingir maior patamar em 5 meses',
        image:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-guC-x1d4ul2TAfxtDVuV07uXkNrHndfePT8Oky355oPnafUwtCSq37ixRbM',
      }
    );

    this.worldwideList.push(
      {
        source: 'Seu Dinheiro',
        hours: 'há 1 dia',
        news: 'Bolsa de Nova York fecha em queda com tensão geopolítica; Dow Jones, S&P 500 e Nasdaq amargam perdas na semana',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVk-zOM1b7fIc3P9obwk1XcGTkgyWldU8NLfMjovJAptlvz5K7WzZewnmeEM',
      },
      {
        source: 'InfoMoney',
        hours: 'há 2 dia',
        news: 'Índices futuros dos EUA sobem após Dow Jones registrar pior sessão do ano: os assuntos que vão movimentar o mercado hoje',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nJpuo1Qub3MgzaMHUyXCCUmX87iYgKKNLf_-d1iKu3QGe8k7R8bBRPNAhRA',
      },
      {
        source: 'ADVFN',
        hours: 'há 2 dia',
        news: 'Dow Jones teve pior declínio de 2022 à medida que tensões Rússia-Ucrânia preocupa investidores',
        image:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-Jr5yP0lzUq_h2SjuZ01ATy4p9KmCFpjZqgXMYRLqwJRbyT7U2GocMAhXQAs',
      },
      {
        source: 'The Economic Times',
        hours: 'há 10 horas',
        news: '​All signs indicate stock market will be under pressure for next 6 months',
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0FBoEsR_BY-03TxRaKqbK4EXR5-olY9g9gCQ1ydz-SLiXoOrdyxZJoKd0IDg',
      },
      {
        source: 'The Economic Times',
        hours: 'há 1 dia',
        news: '70% of Sensex stocks will go nowhere, bet on smallcaps to compound your money: Shankar Sharma',
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwzZWCvHHrINQnzOB7zhMOZJEomgkR_oBBgM-2pI3cdXKSMBwYQlx1iVNMtYs',
      },
      {
        source: 'MarketWatch',
        hours: 'há 2 dia',
        news: 'FTSE wraps up losing week, but Evraz shines as investors watch Russia-Ukraine developments',
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQ6KpI8sAYhrG02pEhq9SXS1sbWQGwTDmYhx3yCmA3wBlUD9V8NhS_PfHoP9Y',
      },
      {
        source: 'Yahoo Finance',
        hours: 'há 1 dia',
        news: '3 FTSE 100 stocks I’d avoid like the plague!',
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKRnE7hmRfhgX3-4m8yBGiL_CnTl4kzRhcBQnARAYKz2xmtZY0w-44Nx-WyjE',
      },
      {
        source: 'Morningstar',
        hours: 'há 2 dia',
        news: 'FTSE 100 to Edge Higher; Retail Sales Recover',
        image:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuC6nSfrbYyO0E84PD3UuX_gN4CDwJ6HUDXzuDhXlkcKjwobtNwwz4gJjmJ3Q',
      },
      {
        source: 'Nasdaq',
        hours: 'há 2 dia',
        news: 'Tokyos Nikkei share average opens down 1.24 pct',
        image:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNdNnEwHIUrutoQpLv3ttntmgR15KgaspCJx0RJJpPxjIwPrxPSRUYWSJmrmU',
      }
    );
  }
}
