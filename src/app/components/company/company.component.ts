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
  public companySymbol: string;
  public companyProfile: Object[];

  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 
    this.route.params.subscribe(routeParams => {
      this.companySymbol = routeParams.symbolId.substring(1);
    });
    this.investorService.getCompanyProfile(this.companySymbol).subscribe((data: any) => {
      this.companyProfile = data;
      console.log(data)
    })
    
    
  }

  ngOnInit(): void {
  
   
  }

}
