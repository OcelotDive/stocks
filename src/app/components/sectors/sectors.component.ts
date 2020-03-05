import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css'],
  providers: [InvestorService]
})
export class SectorsComponent implements OnInit {
  public sectorsFullList: Object[];

  constructor(public investorService: InvestorService) {

    this.investorService.getSectorPerformance().subscribe((data: any) => {
      
      data.sectorPerformance.forEach(element => {
        element.changesPercentage = element.changesPercentage.substring(0, element.changesPercentage.length - 1);
      });
      this.sectorsFullList = data.sectorPerformance; 
    }); 
  }

  ngOnInit() {
  }

}
