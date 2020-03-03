import { Component, OnInit,} from '@angular/core';
import { InvestorService } from '../../services/investor.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [InvestorService]
})

export class MainComponent implements OnInit {
  
  public topNewsStories: Object[];
  public forexPrices: Object[];
  public cryptoPrices: Object[];
  public commodityPrices: Object[];

  constructor(public investorService: InvestorService) {
  
    this.investorService.getTopStories().subscribe((data: any) => {
      this.topNewsStories = data.articles.slice(0,3);
    })

    this.investorService.getForex().subscribe((data: any) => {
      this.forexPrices = data.forexList.slice(0,8);
    })

    this.investorService.getCryptos().subscribe((data: any) => {
      this.cryptoPrices = data.cryptocurrenciesList.slice(0,8);
   
    })

    this.investorService.getCommodities().subscribe((data: any) => {
      console.warn(data)
      this.commodityPrices = data;
    })
 
  }




  ngOnInit() {
   
  }

}
