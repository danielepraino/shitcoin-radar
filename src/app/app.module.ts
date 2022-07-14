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
import { DarkModeAnimComponent } from './components/animations/dark-mode-anim.component';
import { RadarLogoAnimComponent } from './components/animations/radar-logo-anim.component';
import { AlertAnimComponent } from './components/animations/alert-anim.component';
import { CheckAnimComponent } from './components/animations/check-anim.component';
import { LoadingAnimComponent } from './components/animations/loading-anim.component';
import { DisclaimerComponent } from './components/disclaimer.component';
import { CoinResultComponent } from './components/coin-result.component';

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CoinComponent,
    CoinAlertComponent,
    DarkModeAnimComponent,
    RadarLogoAnimComponent,
    AlertAnimComponent,
    CheckAnimComponent,
    LoadingAnimComponent,
    DisclaimerComponent,
    CoinResultComponent,
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
