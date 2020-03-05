import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [InvestorService]
})

export class CarouselComponent implements OnInit {
  public majorIndexes: Object[];
  public majorIndexesSecond: Object[];
  public majorIndexesThird: Object[];

  constructor(public investorService: InvestorService) {
    
    this.investorService.getMajorIndexes().subscribe((data: any) => {
      this.majorIndexes = data.majorIndexesList.slice(0,5);
      this.majorIndexesSecond = data.majorIndexesList.slice(5,10);
      this.majorIndexesThird = data.majorIndexesList.slice(10,15);
   });
  }

  ngOnInit() {
   
  }
}
