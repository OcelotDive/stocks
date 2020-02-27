import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

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

  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 
  
    this.route.params.subscribe(routeParams => {
      this.companySymbol = routeParams.symbolId.substring(1);

      this.investorService.getKeyMetrics(this.companySymbol).subscribe((data: any) => {
        this.keyMetrics = data.metrics[0];
        console.log(data.metrics)
      })

      this.investorService.getCompanyProfile(this.companySymbol).subscribe((data: any) => {
        this.companyProfile = [data];
       
      });

      
        
    });  

  }

  ngOnInit(): void {}



}
