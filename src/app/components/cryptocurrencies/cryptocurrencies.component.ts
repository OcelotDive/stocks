import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css'],
  providers: [InvestorService]
})
export class CryptocurrenciesComponent implements OnInit {
  public cryptoFullList: Object[];
  
  constructor(public investorService: InvestorService) {
    
    this.investorService.getCryptos().subscribe((data: any) => {
      this.cryptoFullList = data.cryptocurrenciesList.slice(0,19);
      console.warn(data); 
    })
   }

  ngOnInit() {
  }

}
