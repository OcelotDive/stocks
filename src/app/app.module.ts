import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { ForexComponent } from './components/forex/forex.component';
import { SearchBySymbolPipe } from './components/header/searchBySymbol';
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';
import { HeaderComponent } from './components/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent,
    TickerComponent,
    NewsPageComponent,
    ForexComponent,
    SearchBySymbolPipe,
    CryptocurrenciesComponent,
    HeaderComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule,
    RouterModule.forRoot([
                    
     {path: '', redirectTo: 'main', pathMatch: 'full' },
     {path: 'main', component: MainComponent},
     {path: 'main/newslist', component: NewsPageComponent},
     {path: 'main/forex', component: ForexComponent},
     {path: 'main/cryptocurrencies', component: CryptocurrenciesComponent},
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
