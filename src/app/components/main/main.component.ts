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
  public topNewsStories: Object[];

  constructor(public investorService: InvestorService) {
   this.investorService.getChosenInfo().subscribe((data: any) => {
    this.chosenQuotes = data;
   console.log(this.chosenQuotes)
    }); 


    this.investorService.getTopStories().subscribe((data: any) => {
      this.topNewsStories = data.articles.slice(0,3);
      console.log(data)
    })
   
  }


  ngOnInit() {
   
  }

}
