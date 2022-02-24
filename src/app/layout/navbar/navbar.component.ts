import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  listImages: any[] = [];
  listActives: any[] = [];
  sidebar: boolean;

  constructor(private translateService: LanguageService, public route: Router) {
    this.sidebar = false;
    window.onscroll = () => {
      if (this.sidebar === true) {
        this.sidebar = false;
      }
    };
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
