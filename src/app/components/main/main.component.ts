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
  public sectors: Object[];
  public actives: Object[];



  constructor(public investorService: InvestorService) {
  
    this.investorService.getTopStories().subscribe((data: any) => {
      this.topNewsStories = data.results.slice(0,3);
    })

    this.investorService.getForex().subscribe((data: any) => {
      this.forexPrices = data.forexList.slice(0,8);
    })
  
      this.investorService.getCryptos().subscribe((data: any) => {
        this.cryptoPrices = data.cryptocurrenciesList.slice(0, 8);
   
      })
  

    this.investorService.getCommodities().subscribe((data: any) => {
     
      this.commodityPrices = data;
      
    })


    this.investorService.getSectorPerformance().subscribe((data: any) => {
     data.sectorPerformance.forEach(element => {
       element.changesPercentage = element.changesPercentage.substring(0, element.changesPercentage.length - 1);
     });
      this.sectors = data.sectorPerformance.slice(0,8);
    
    })


 /*  this.investorService.getActives().subscribe((data: any) => {
      this.actives = data.mostActiveStock.slice(0,8);
      console.log(this.actives)
    }) */
 
  }
  ngOnInit() {
   
  }
}
