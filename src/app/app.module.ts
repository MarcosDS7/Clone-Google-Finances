import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, HttpLoaderFactory } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnHighComponent } from './components/on-high/on-high.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YourWalletsComponent } from './components/your-wallets/your-wallets.component';
import { TrendComponent } from './components/trend/trend.component';
import { YourListsComponent } from './components/your-lists/your-lists.component';
import { NewsComponent } from './components/news/news.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FollowedComponent } from './components/followed/followed.component';
import { InterestComponent } from './carrousel/interest/interest.component';
import { SwiperModule } from 'swiper/angular';
import { SearchComponent } from './carrousel/search/search.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TrendMarketComponent } from './components/trend-market/trend-market.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    OnHighComponent,
    YourWalletsComponent,
    TrendComponent,
    YourListsComponent,
    NewsComponent,
    ScheduleComponent,
    FollowedComponent,
    InterestComponent,
    SearchComponent,
    FooterComponent,
    TrendMarketComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    SwiperModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-bottom-right',
      titleClass: 'fw-normal fs-6 font-monospace',
      iconClasses: {
        success: 'toast-success-dark',
      },
      enableHtml: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
