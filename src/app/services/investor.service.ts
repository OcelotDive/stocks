import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class InvestorService {
    nasdaqUrl: string;
    constructor(private http: HttpClient) {
        this.nasdaqUrl = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,JPM,MSFT,NVDA';
        
    }

    getMatchInfo() {
        return this.http.get(`${this.nasdaqUrl}`);
            
}




}
    
