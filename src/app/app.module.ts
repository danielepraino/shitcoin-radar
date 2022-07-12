import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar.component';
import { CoinComponent } from './components/coin.component';
import { CoinAlertComponent } from './components/coin-alert.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DarkModeComponent } from './components/dark-mode.component';
import { RadarLogoComponent } from './components/radar-logo.component';
import { AlertAnimComponent } from './components/alert-anim.component';
import { CheckAnimComponent } from './components/check-anim.component';

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CoinComponent,
    CoinAlertComponent,
    DarkModeComponent,
    RadarLogoComponent,
    AlertAnimComponent,
    CheckAnimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
