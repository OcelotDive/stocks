import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class InvestorService {
  public companyStockList: string;
  public chosenUrl: string;
  public majorIndexes: string;
  public newsSource: string = 'the-wall-street-journal';
  public newsStories: string;
  public forex: string;
  public cryptos: string;
  public companyProfile: string;
  public ratioUrl: string;
  public keyMetrics: string;
  public historicalStockPrice: string;
  public annualIncomeStatementUrl: string;
  public annualBalanceStatementUrl: string;
  public annualCashFlowStatement: string;
  public financialRatios: string;
  public companyRatingUrl: string;
  public commoditiesUrl: string;
  public sectorUrl: string;
  public key: string;

    constructor(private http: HttpClient) {
        this.companyStockList = 'https://financialmodelingprep.com/api/v3/company/stock/list';
        this.chosenUrl = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,JPM,MSFT,NVDA';
        this.majorIndexes = 'https://financialmodelingprep.com/api/v3/majors-indexes';
        this.forex = 'https://financialmodelingprep.com/api/v3/forex';
        this.cryptos = 'https://financialmodelingprep.com/api/v3/cryptocurrencies';
        this.newsStories = 'https://newsapi.org/v1/articles?source= ';
        this.companyProfile = 'https://financialmodelingprep.com/api/v3/company/profile/';
        this.keyMetrics = 'https://financialmodelingprep.com/api/v3/company-key-metrics/'
        this.historicalStockPrice = 'https://financialmodelingprep.com/api/v3/historical-price-full/';
        this.annualIncomeStatementUrl = 'https://financialmodelingprep.com/api/v3/financials/income-statement/';
        this.annualBalanceStatementUrl = 'https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/';
        this.annualCashFlowStatement = 'https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/';
        this.ratioUrl = 'https://financialmodelingprep.com/api/v3/financial-ratios/';
        this.companyRatingUrl = 'https://financialmodelingprep.com/api/v3/company/rating/';
        this.commoditiesUrl = 'https://financialmodelingprep.com/api/v3/quote/GCUSD,SIUSD,CLUSD,KCUSX,CUSX,SBUSX,NGUSD,LCUSX';
        this.sectorUrl = 'https://financialmodelingprep.com/api/v3/stock/sectors-performance';
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
    getKeyMetrics(symbol: string) {
        return this.http.get(`${this.keyMetrics}${symbol}`);
    }
    getHistoric(symbol: string, previousDate: string, currentDate: string) {
        return this.http.get(`${this.historicalStockPrice}${symbol}?from=${previousDate}&to=${currentDate}`);
    }
    getAnnualIncome(symbol: string) {
        return this.http.get(`${this.annualIncomeStatementUrl}${symbol}`);
    }
    getAnnualBalance(symbol: string) {
        return this.http.get(`${this.annualBalanceStatementUrl}${symbol}`);
    }
    getAnnualCashFlow(symbol: string) {
        return this.http.get(`${this.annualCashFlowStatement}${symbol}`);
    }
     getFinancialRatios(symbol: string) {
        return this.http.get(`${this.ratioUrl}${symbol}`);
    }
    getCompanyRating(symbol: string) {
        return this.http.get(`${this.companyRatingUrl}${symbol}`);
    }
    getCommodities() {
        return this.http.get(`${this.commoditiesUrl}`);
    }
    getSectorPerformance() {
        return this.http.get(`${this.sectorUrl}`);
    }


}
    
