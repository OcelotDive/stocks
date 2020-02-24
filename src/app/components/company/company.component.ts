import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [InvestorService]
})
export class CompanyComponent implements OnInit {

  constructor(public investorService: InvestorService) { 

  }

  ngOnInit() {
  }

}
