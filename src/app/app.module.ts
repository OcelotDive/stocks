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
import { SearchByColourPipe } from './components/main/search-by-colour.pipe';
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent,
    TickerComponent,
    NewsPageComponent,
    ForexComponent,
    SearchByColourPipe,
    CryptocurrenciesComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
