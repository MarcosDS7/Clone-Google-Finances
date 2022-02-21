import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.scss'],
})
export class FollowedComponent implements OnInit {
  followedList: any[] = [];

  ngOnInit(): void {
    this.followedList.push(
      {
        code: 'PETR4',
        name: 'Petrobras',
        followers: '224 mil seguindo',
        percentage: '0,00%',
      },
      {
        code: 'ITSA4',
        name: 'Itaúsa',
        followers: '129 mil seguindo',
        percentage: '0,00%',
      },
      {
        code: 'BBAS3',
        name: 'Banco do Brasil',
        followers: '128 mil seguindo',
        percentage: '0,00%',
      },
      {
        code: 'MGLU3',
        name: 'Magazine Luiza',
        followers: '104 mil seguindo',
        percentage: '0,00%',
      },
      {
        code: 'VALE3',
        name: 'Vale S.A.',
        followers: '99,7 mil seguindo',
        percentage: '0,00%',
      }
    );
  }
}
