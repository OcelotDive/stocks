import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class InvestorService {
  public companyStockList: string;
  public chosenUrl: string;
  public majorIndexes: string;
  public newsSource: string = 'business.json?';
  public newsStories: string;
  public forex: string;
  public cryptos: string;
  public companyProfile: string;
  public ratioUrl: string;
  public keyMetrics: string;
  public fmpk: string;
  public fmpk2: string;
  public historicalStockPrice: string;
  public annualIncomeStatementUrl: string;
  public annualBalanceStatementUrl: string;
  public annualCashFlowStatement: string;
  public financialRatios: string;
  public companyRatingUrl: string;
  public commoditiesUrl: string;
  public sectorUrl: string;
  public activeUrl: string;
  public newsk: string;

    constructor(private http: HttpClient) {
        this.companyStockList = 'https://financialmodelingprep.com/api/v3/company/stock/list';
        this.chosenUrl = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,MSFT,NVDA';
        this.majorIndexes = 'https://financialmodelingprep.com/api/v3/majors-indexes';
        this.forex = 'https://financialmodelingprep.com/api/v3/forex';
        this.cryptos = 'https://financialmodelingprep.com/api/v3/cryptocurrencies';
       
        this.newsStories = 'https://api.nytimes.com/svc/topstories/v2/'
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
       
        this.newsk = '';
        // replace api keys
        this.fmpk = '';
        this.fmpk2 = '';
        this.activeUrl = 'https://financialmodelingprep.com/api/v3/stock/actives';    
    }

    getSymbolsList() {
        return this.http.get(`${this.companyStockList}${this.fmpk}`)
    }
    getChosenInfo() {
        return this.http.get(`${this.chosenUrl}${this.fmpk}`);       
    }
    getMajorIndexes() {
        return this.http.get(`${this.majorIndexes}${this.fmpk}`);
    }
    getTopStories() {
        return this.http.get(`${this.newsStories}${this.newsSource}${this.newsk}`)
    }
    getTopStoriesFull(newsSourceChange: string) {
        this.newsSource = newsSourceChange;
        return this.http.get(`${this.newsStories}${this.newsSource}${this.newsk}`);
    }
    getForex() {
        return this.http.get(`${this.forex}${this.fmpk}`);
    }
    getCryptos() {
        return this.http.get(`${this.cryptos}${this.fmpk}`);
    }
    getCompanyProfile(symbol: string) {
        return this.http.get(`${this.companyProfile}${symbol}${this.fmpk}`)
    }
    getKeyMetrics(symbol: string) {
        return this.http.get(`${this.keyMetrics}${symbol}${this.fmpk}`);
    }
    getHistoric(symbol: string, previousDate: string, currentDate: string) {
        return this.http.get(`${this.historicalStockPrice}${symbol}?from=${previousDate}&to=${currentDate}&${this.fmpk2}`);
    }
    getAnnualIncome(symbol: string) {
        return this.http.get(`${this.annualIncomeStatementUrl}${symbol}${this.fmpk}`);
    }
    getAnnualBalance(symbol: string) {
        return this.http.get(`${this.annualBalanceStatementUrl}${symbol}${this.fmpk}`);
    }
    getAnnualCashFlow(symbol: string) {
        return this.http.get(`${this.annualCashFlowStatement}${symbol}${this.fmpk}`);
    }
     getFinancialRatios(symbol: string) {
        return this.http.get(`${this.ratioUrl}${symbol}${this.fmpk}`);
    }
    getCompanyRating(symbol: string) {
        return this.http.get(`${this.companyRatingUrl}${symbol}${this.fmpk}`);
    }
    getCommodities() {
        return this.http.get(`${this.commoditiesUrl}${this.fmpk}`);
    }
    getSectorPerformance() {
        return this.http.get(`${this.sectorUrl}${this.fmpk}`);
    }
    getActives() {
        return this.http.get(`${this.activeUrl}${this.fmpk}`);
    }

}
    
