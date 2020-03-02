import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.css']
})
export class CashflowComponent implements OnInit {
  public cashFlowStatement: Object[];
  public companySymbol: string = "";

  constructor(public investorService: InvestorService, public route: ActivatedRoute) {
    this.scroll();
    this.route.params.subscribe(routeParams => {
      this.companySymbol = routeParams.symbolId.substring(1);
        
      this.investorService.getAnnualCashFlow(this.companySymbol).subscribe((data: any) => {
    
        this.cashFlowStatement = data.financials.slice(0,11).reverse();
       
      
      })
    })
   }

  ngOnInit() {
  }

  scroll() {
    setTimeout(() => {
    window.scrollTo(0,1900);
    }, 0)
  }

}
