import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  providers: [InvestorService]
})

export class NewsPageComponent implements OnInit {

  public storyList: Object[];
  
  constructor(public investorService: InvestorService) {
    this.investorService.getTopStories().subscribe((data: any) => {
      this.storyList = data.results;
    })
  }

  onRadioChange(inputValue: any) {
    this.investorService.getTopStoriesFull(inputValue.value).subscribe((data: any) => {
      this.storyList = data.results;
    })
  }

 

  ngOnInit() {
  }

}
