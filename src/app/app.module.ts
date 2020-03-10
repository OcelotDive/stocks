import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
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
import { CompanyComponent } from './components/company/company.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { IncomeComponent } from './components/income/income.component';
import { BalanceComponent } from './components/balance/balance.component';
import { CashflowComponent } from './components/cashflow/cashflow.component';
import { RatiosComponent } from './components/ratios/ratios.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { ActivesComponent } from './components/actives/actives.component';

enableProdMode();


const oldRoutes = [               
    {path: '', redirectTo: 'main', pathMatch: 'full' },
    {path: 'main', component: MainComponent},
    {path: 'main/newslist', component: NewsPageComponent},
    {path: 'main/forex', component: ForexComponent},
    {path: 'main/sectors', component: SectorsComponent},
    {path: 'main/actives', component: ActivesComponent},
    {path: 'main/cryptocurrencies', component: CryptocurrenciesComponent},
    {path: 'main/:symbolId',  component: CompanyComponent}
   ]


const lazyRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full' },
  {path: 'main', component: MainComponent},
  {path: 'main/newslist', loadChildren: () => import('./components/news-page/news-page.component').then(m => m.NewsPageComponent)},
  {path: 'main/forex', loadChildren: () => import('./components/forex/forex.component').then(m => m.ForexComponent)},
  {path: 'main/sectors', loadChildren: () => import('./components/sectors/sectors.component').then(m => m.SectorsComponent)},
  {path: 'main/actives', loadChildren: () => import('./components/actives/actives.component').then(m => m.ActivesComponent)},
  {path: 'main/cryptocurrencies', loadChildren: () => import('./components/cryptocurrencies/cryptocurrencies.component').then(m => m.CryptocurrenciesComponent)},
  {path: 'main/:symbolId', loadChildren: () => import('./components/company/company.component').then(m => m.CompanyComponent)},
 ]

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
    CompanyComponent,
    LinechartComponent,
    BarChartComponent,
    IncomeComponent,
    BalanceComponent,
    CashflowComponent,
    RatiosComponent,
    SectorsComponent,
    ActivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule,
    ChartsModule,
    RouterModule.forRoot(oldRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


