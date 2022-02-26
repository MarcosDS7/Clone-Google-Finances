import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('header') header: ElementRef;
  @ViewChild('pt') pt: ElementRef;
  @ViewChild('en') en: ElementRef;

  listImages: any[] = [];
  listActives: any[] = [];
  sidebar: boolean;

  constructor(
    private translateService: LanguageService,
    public route: Router,
    public translate: TranslateService
  ) {
    this.sidebar = false;

    window.onscroll = () => {
      if (this.sidebar === true) {
        this.sidebar = false;
      }
      this.header.nativeElement.classList.toggle(
        'header',
        window.scrollY > 100
      );
    };

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === 'pt') {
        this.pt.nativeElement.classList.add('d-none');
        this.en.nativeElement.classList.add('d-block');
        this.en.nativeElement.classList.remove('d-none');
      } else {
        this.en.nativeElement.classList.add('d-none');
        this.pt.nativeElement.classList.add('d-block');
        this.pt.nativeElement.classList.remove('d-none');
      }
    });
  }

  switchLanguage(lang: string) {
    this.translateService.switchLanguage(lang);
  }

  openSidebar() {
    this.sidebar = true;
  }

  closeSidebar() {
    this.sidebar = false;
  }

  ngOnInit(): void {
    this.listImages.push(
      {
        url: 'google-analytics.svg',
        name: 'Analytics',
      },
      {
        url: 'google-cloud.svg',
        name: 'Cloud',
      },
      {
        url: 'google-drive.svg',
        name: 'Drive',
      },
      {
        url: 'google-maps.svg',
        name: 'Maps',
      },
      {
        url: 'google-photos.svg',
        name: 'Photos',
      },
      {
        url: 'google-play.svg',
        name: 'Play',
      }
    );
    this.listActives.push(
      {
        name: 'Magazine Luiza',
        value: '0,00%',
      },
      {
        name: 'Oi',
        value: '0,00%',
      },
      {
        name: 'Via',
        value: '0,00%',
      },
      {
        name: 'Bradesco',
        value: '0,00%',
      },
      {
        name: 'Itaú Unibanco',
        value: '0,00%',
      },
      {
        name: 'Meliuz SA',
        value: '0,00%',
      }
    );
  }
}
