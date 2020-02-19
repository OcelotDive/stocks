import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class InvestorService {
  public  chosenUrl: string;
  public majorIndexes: string;
  public newsSource: string = 'the-wall-street-journal';
  public newsStories: string;
  public key: string;

    constructor(private http: HttpClient) {
        this.chosenUrl = 'https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,JPM,MSFT,NVDA';
        this.majorIndexes = 'https://financialmodelingprep.com/api/v3/majors-indexes';
        this.newsStories = 'https://newsapi.org/v1/articles?source=';
        this.key = '&sortBy=top&apiKey=ca9303cd118242fd94495589428e10ad';
        
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
        return this.http.get(`${this.newsStories}${this.newsSource}${this.key}`)
    }




}
    
