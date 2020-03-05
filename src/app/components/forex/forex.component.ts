import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css'],
  providers: [InvestorService]
})

export class ForexComponent implements OnInit {
  public forexFullList: Object[];

  constructor(public investorService: InvestorService) {

    this.investorService.getForex().subscribe((data: any) => {
      this.forexFullList = data.forexList;
    })
   }

  ngOnInit() {
  }

}
