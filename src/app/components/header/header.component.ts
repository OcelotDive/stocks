import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [InvestorService]
})
export class HeaderComponent implements OnInit {
  public companyStockList: Object[];
  public companySearchText: string = "";
  public companyLookUp: string ="";
  constructor(public investorService: InvestorService) {
    
    this.investorService.getSymbolsList().subscribe((data: any) => {
      this.companyStockList = data.symbolsList;
    
   
    })

   }

   handleCompanyClick(symbol: string) {
    this.companyLookUp = symbol;
    this.companySearchText = "";
   }


  ngOnInit() {
   
  }

}
