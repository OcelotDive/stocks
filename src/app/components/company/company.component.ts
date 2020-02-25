import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [InvestorService]
})
export class CompanyComponent implements OnInit {
  public companySymbol: string;
  public companyProfile: Object[];
  public keyMetrics: Object[];



  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 
   
    this.route.params.subscribe(routeParams => {
      this.companySymbol = routeParams.symbolId.substring(1);

      this.investorService.getCompanyProfile(this.companySymbol).subscribe((data: any) => {
        this.companyProfile = [data];
       // console.log(data)
      });

      this.investorService.getFinancialRatios(this.companySymbol).subscribe((data: any) => {
       // console.log(data)
      })

      this.investorService.getKeyMetrics(this.companySymbol).subscribe((data: any) => {
        this.keyMetrics = data.metrics[0];
      })

    });  
  }

  ngOnInit(): void {
    
   
  }

}
