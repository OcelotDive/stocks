import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ratios',
  templateUrl: './ratios.component.html',
  styleUrls: ['./ratios.component.css']
})

export class RatiosComponent implements OnInit {
  public financialRatios: Object[];
  public companySymbol: string = "";

  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 

    this.scroll();
    this.route.params.subscribe(routeParams => {
    this.companySymbol = routeParams.symbolId.substring(1);

    this.investorService.getFinancialRatios(this.companySymbol).subscribe((data: any) => {
    
      this.financialRatios = data.ratios.slice(0,11).reverse();
    });
  });
  }

  ngOnInit() {
  }

  scroll() {
    setTimeout(() => {
    window.scrollTo(0,2800);
    }, 0)
  }

}
