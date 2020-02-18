import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [InvestorService]
})

export class MainComponent implements OnInit {
  public chosenQuotes: Object[];
  public majorIndexes: Object[];
  public majorIndexesSecond: Object[];
  public majorIndexesThird: Object[];
  public slideIndex: number;

  constructor(public investorService: InvestorService) {
  
   this.investorService.getChosenInfo().subscribe((data: any) => {
    this.chosenQuotes= data;
      console.log(this.chosenQuotes)
   
    
    }); 

    this.investorService.getMajorIndexes().subscribe((data: any) => {
       this.majorIndexes = data.majorIndexesList.slice(0,5);
       this.majorIndexesSecond = data.majorIndexesList.slice(5,10);
       this.majorIndexesThird = data.majorIndexesList.slice(10,15);
       console.log(data)
    })
   
  }


  ngOnInit() {
   
  }

}
