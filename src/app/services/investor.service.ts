import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class InvestorService {
    chosenUrl: string;
    majorIndexes: string;
    constructor(private http: HttpClient) {
        this.chosenUrl = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,JPM,MSFT,NVDA';
        this.majorIndexes = 'https://financialmodelingprep.com/api/v3/majors-indexes';
        
    }

    getChosenInfo() {
        return this.http.get(`${this.chosenUrl}`);       
    }
    getMajorIndexes() {
        return this.http.get(`${this.majorIndexes}`);
    }



}
    
