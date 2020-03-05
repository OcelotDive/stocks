import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
  providers: [InvestorService]
})
export class IncomeComponent implements OnInit {
  public IncomeStatement: Object[];
  public companySymbol: string = "";

  constructor(public investorService: InvestorService, public route: ActivatedRoute) {

    this.scroll();
    this.route.params.subscribe(routeParams => {
    this.companySymbol = routeParams.symbolId.substring(1);
    this.investorService.getAnnualIncome(this.companySymbol).subscribe((data: any) => {
      this.IncomeStatement = data.financials.slice(0,11).reverse();
    });
  });
   }

  ngOnInit() {
  }

  scroll() {
    setTimeout(() => {
    window.scrollTo(0,1200);
    }, 0)
  }

}
