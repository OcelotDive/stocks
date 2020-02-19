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
  testData=  [{  author: "Eliza Collins",
  title: "What to Watch for in the Nevada Democratic Debate",
  description: "Michael Bloomberg’s rise in polls moves him to the stage at a critical time for several candidates",
  url: "https://www.wsj.com/articles/what-to-watch-for-in-the-nevada-democratic-debate-11582108201?mod=hp_lead_pos2",
  urlToImage: "https://images.wsj.net/im-155163/social",
  publishedAt: "2020-02-19T10:30:00Z",
      }]

  constructor(public investorService: InvestorService) {
    this.investorService.getTopStories().subscribe((data: any) => {
      this.storyList = data.articles;
      console.log(data.articles)

    

    })
   
  }

   
  ngOnInit() {
  }

}
