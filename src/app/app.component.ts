import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title =
    'Google Finance: preços da bolsa de valores, cotações em tempo real e notícias sobre o mercado financeiro';

  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.toastrService.success(
      '<i class="bi bi-currency-dollar text-success"></i>',
      'Preços da bolsa de valores, cotações em tempo real e notícias sobre o mercado financeiro',
      {
        progressBar: true,
      }
    );
  }
}
