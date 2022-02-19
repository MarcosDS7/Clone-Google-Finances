import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnHighComponent } from './components/on-high/on-high.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { YourWalletsComponent } from './components/your-wallets/your-wallets.component';
import { TrendComponent } from './components/trend/trend.component';
import { YourListsComponent } from './components/your-lists/your-lists.component';
import { InterestComponent } from './carrousel/interest/interest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    OnHighComponent,
    YourWalletsComponent,
    TrendComponent,
    YourListsComponent,
    InterestComponent,
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      titleClass: 'fw-normal fs-6 font-monospace',
      iconClasses: {
        success: 'toast-success-dark',
      },
      enableHtml: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
