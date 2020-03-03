import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
  providers: [InvestorService]
})
export class TickerComponent implements OnInit {
  public chosenQuotes: Object[];

  constructor(public investorService: InvestorService) {
    this.investorService.getChosenInfo().subscribe((data: any) => {
     this.chosenQuotes = data;
     }); 
    
   }

  ngOnInit() {
  }

}
