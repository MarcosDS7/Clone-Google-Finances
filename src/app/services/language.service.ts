import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateEnum } from '../enums/translate';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private translate: TranslateService,
    public route: Router,
    public titleService: Title,
    public metaService: Meta
  ) {
    translate.setDefaultLang(TranslateEnum.EN);
  }
  switchLanguage(lang: string) {
    const langs = this.translate.use(lang);
    langs.subscribe((translate) => {
      this.titleService.setTitle(translate.APP.TITLE);
      this.metaService.updateTag({
        name: 'description',
        content: `${translate.APP.DESCRIPTION}`,
      });
      this.metaService.updateTag({
        name: 'author',
        content: `${translate.APP.AUTHOR}`,
      });
      this.metaService.updateTag({
        name: 'keywords',
        content: `${translate.APP.KEYWORDS}`,
      });
    });
    return langs;
  }
}
