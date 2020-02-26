import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class InvestorService {
  public companyStockList: string;
  public chosenUrl: string;
  public majorIndexes: string;
  public newsSource: string = ' the-wall-street-journal';
  public newsStories: string;
  public forex: string;
  public cryptos: string;
  public  companyProfile: string;
  public ratioUrl: string;
  public keyMetrics: string;
  public historicalStockPrice: string;
  public key: string;

    constructor(private http: HttpClient) {
        this.companyStockList = 'https://financialmodelingprep.com/api/v3/company/stock/list';
        this.chosenUrl = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,JPM,MSFT,NVDA';
        this.majorIndexes = 'https://financialmodelingprep.com/api/v3/majors-indexes';
        this.forex = 'https://financialmodelingprep.com/api/v3/forex';
        this.cryptos = 'https://financialmodelingprep.com/api/v3/cryptocurrencies';
        this.newsStories = 'https://newsapi.org/v1/articles?source=';
        this.ratioUrl = 'https://financialmodelingprep.com/api/v3/financial-ratios/'
        this.companyProfile = 'https://financialmodelingprep.com/api/v3/company/profile/';
        this.keyMetrics = 'https://financialmodelingprep.com/api/v3/company-key-metrics/'
        this.historicalStockPrice = 'https://financialmodelingprep.com/api/v3/historical-price-full/';
        this.key = '&sortBy=top&apiKey=ca9303cd118242fd94495589428e10ad';    
    }

    getSymbolsList() {
        return this.http.get(`${this.companyStockList}`)
    }

    getChosenInfo() {
        return this.http.get(`${this.chosenUrl}`);       
    }
    getMajorIndexes() {
        return this.http.get(`${this.majorIndexes}`);
    }
    getTopStories() {
        return this.http.get(`${this.newsStories}${this.newsSource}${this.key}`)
    }
    getTopStoriesFull(newsSourceChange: string) {
        this.newsSource = newsSourceChange;
        return this.http.get(`${this.newsStories}${this.newsSource}${this.key}`);
    }
    getForex() {
        return this.http.get(`${this.forex}`);
    }
    getCryptos() {
        return this.http.get(`${this.cryptos}`);
    }
    getCompanyProfile(symbol: string) {
        return this.http.get(`${this.companyProfile}${symbol}`)
    }
    getFinancialRatios(symbol: string) {
        return this.http.get(`${this.ratioUrl}${symbol}`);
    }
    getKeyMetrics(symbol: string) {
        return this.http.get(`${this.keyMetrics}${symbol}`);
    }
    getHistoric(symbol: string, numDays: number) {
        return this.http.get(`${this.historicalStockPrice}${symbol}?timeseries=${numDays}`);
    }




}
    
