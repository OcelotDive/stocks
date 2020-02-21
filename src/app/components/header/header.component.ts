import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [InvestorService]
})
export class HeaderComponent implements OnInit {

  constructor(public investorService: InvestorService) {
    
   }

  ngOnInit() {
  }

}
