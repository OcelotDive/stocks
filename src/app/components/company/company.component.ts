import { Component, OnInit } from '@angular/core';



import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [InvestorService]
})
export class CompanyComponent implements OnInit {
  public companySymbol: string = "";
  public companyProfile: Object[] = [];
  public keyMetrics: Object[] = [];
  public chartSetType = 'line'
  public companyRating: Object[];
  public companyStars: Object[] = [];
  public ratingsDetails: Object[];
  public displayFinancialInfoType: string[] = [];
  public displayRatingCard: boolean = true;

  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 
   
    this.route.params.subscribe(routeParams => {
      this.companySymbol = routeParams.symbolId.substring(1);

      this.investorService.getKeyMetrics(this.companySymbol).subscribe((data: any) => {
        if(data['metrics'] === undefined) {
          
          this.keyMetrics = [{}];
        }
        else {
      this.keyMetrics = data['metrics'][0];
        }
     
      })

      this.investorService.getCompanyProfile(this.companySymbol).subscribe((data: any) => {
      this.companyProfile = [data];
       
      });  

      this.investorService.getCompanyRating(this.companySymbol).subscribe((data: any) => {
        this.displayRatingCard = true;
        if(Object.keys(data).length === 0 && data.constructor === Object) {
          data = {
            rating: {
              score: 0,
              recommendation: "None"
            }
          }
          this.displayRatingCard = false;
        }

        this.companyRating = [data];
        this.companyStars.length = data.rating.score;

        for(let value in data.ratingDetails) {
          data.ratingDetails[value]['name'] = value.toString();
          data.ratingDetails[value]['scoreArray'] = new Array<any>(data.ratingDetails[value]['score']);
          this.ratingsDetails = Object.values(data.ratingDetails);  
        }
      })
    });  
  }

  getChartTypeFromChild($event) {
    this.chartSetType = $event;
  }

  displayFinancial(infoType: string) {
    if(this.displayFinancialInfoType.includes(infoType)) {
      this.displayFinancialInfoType.splice(this.displayFinancialInfoType.indexOf(infoType), 1);
    }
    else {
      this.displayFinancialInfoType.push(infoType);
    }
 
  }



  ngOnInit(): void {}
}
