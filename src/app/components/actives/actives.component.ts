import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.css'],
  providers: [InvestorService]
})
export class ActivesComponent implements OnInit {

  public activesFullList: Object[];

  constructor(public investorService: InvestorService) { 

    this.investorService.getActives().subscribe((data: any) => {
      this.activesFullList = data.mostActiveStock;
    })
  }

  ngOnInit() {
  }

}
