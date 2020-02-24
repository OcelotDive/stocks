import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [InvestorService]
})
export class CompanyComponent implements OnInit {
  public companyName: string;

  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 

  }

  ngOnInit(): void {
  
    this.route.params.subscribe(routeParams => {
      this.companyName = routeParams.symbolId;
    });
  }

}
