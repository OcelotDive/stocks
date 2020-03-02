import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  public balanceStatement: Object[];
  public companySymbol: string = "";

  constructor(public investorService: InvestorService, public route: ActivatedRoute) {
    this.scroll();
    this.route.params.subscribe(routeParams => {
    this.companySymbol = routeParams.symbolId.substring(1);

    this.investorService.getAnnualBalance(this.companySymbol).subscribe((data: any) => {
    
      this.balanceStatement = data.financials.slice(0,11).reverse();
    
    })
  })
   }

  ngOnInit() {
  }

  scroll() {
    setTimeout(() => {
    window.scrollTo(0,1200);
    }, 0)
  }

}
