import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateEnum } from './enums/translate';
import { LanguageService } from './services/language.service';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerService } from 'ngx-spinner';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;

  constructor(
    public translateService: TranslateService,
    public changeLanguageService: LanguageService,
    public route: Router,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService
  ) {
    this.title =
      'Google Finance: preços da bolsa de valores, cotações em tempo real e notícias sobre o mercado financeiro';
    this.translateService.addLangs(Object.values(TranslateEnum));
    this.translateService.setDefaultLang(TranslateEnum.EN);
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastrService.success(
        '<i class="bi bi-currency-dollar text-success"></i>',
        'Preços da bolsa de valores, cotações em tempo real e notícias sobre o mercado financeiro',
        {
          progressBar: true,
        }
      );
    }, 2500);

    const browserLang =
      this.translateService.getBrowserLang() || TranslateEnum.EN;
    this.changeLanguageService.switchLanguage(
      Object.values(TranslateEnum).includes(browserLang as TranslateEnum)
        ? (browserLang as TranslateEnum)
        : TranslateEnum.EN
    );
  }
}
