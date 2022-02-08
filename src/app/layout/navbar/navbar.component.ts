import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  listImages: any[] = [];
  sidebar: boolean;

  constructor() {
    this.sidebar = false;
  }

  openSidebar() {
    this.sidebar = true;
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
  }
}
