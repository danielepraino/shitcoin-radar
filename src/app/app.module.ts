import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar.component';
import { CoinComponent } from './components/coin.component';
import { CoinAlertComponent } from './components/coin-alert.component';
import { LottieModule } from 'ngx-lottie';
import { DarkModeAnimComponent } from './components/animations/dark-mode-anim.component';
import { DisclaimerComponent } from './components/disclaimer.component';
import { CoinResultComponent } from './components/coin-result.component';
import { MainComponent } from './views/main.component';
import { ExplanationComponent } from './views/explanation.component';
import { TitleComponent } from './components/title.component';
import { GenericAnimComponent } from './components/animations/generic-anim.component';
import { ErrorComponent } from './components/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    DisclaimerComponent,
    CoinResultComponent,
    MainComponent,
    ExplanationComponent,
    TitleComponent,
    GenericAnimComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
