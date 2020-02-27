import { Component, OnInit, ViewChild,  Output, EventEmitter } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
  providers: [InvestorService]
})
export class LinechartComponent implements OnInit {
   

   public companySymbol: string;
   public timelineDays: number = 5;
   @Output() chartTypeFromChild = new EventEmitter<string>();

  public lineChartData: ChartDataSets[] = [
    { data: [5,5,5], label: 'Price' },
    { data: [5,5,5], label: 'Low' },
    { data: [5,5,5], label: 'High' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { 
      backgroundColor: 'rgba(3, 252, 28,0.2)',
      borderColor: 'rgba(3, 252, 28,1)',
      pointBackgroundColor: 'rgba(3, 252, 28,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(3, 252, 28,0.8)'
    },
    { 
      backgroundColor: 'rgba(3, 148, 252,0.2)',
      borderColor: 'rgba(3, 148, 252,1)',
      pointBackgroundColor: 'rgba(3, 148, 252,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(3, 148, 252,1)'
    },
    { 
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 
  

    this.route.params.subscribe(routeParams => {
      this.companySymbol = routeParams.symbolId.substring(1);

     this.getChartData();
        
    });
  }

  ngOnInit(): void {
  }




  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }





  public changeColor() {
    // this can be deleted
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public setInterval(days: number) {
      this.timelineDays = days;
      this.getChartData();
  }

  public setChartType(type: string) {
    this.chartTypeFromChild.emit(type);
  }

  public getChartData() {

    const previousDate = this.getHistoricalDate(this.timelineDays);
    const currentDate = this.getCurrentDate();

    this.investorService.getHistoric(this.companySymbol, previousDate, currentDate).subscribe((data: any) => {
      console.warn(data)
      let priceTemp: number[] = []; 
      let lowTemp: number[] = [];
      let highTemp: number[] = [] ;
     this.lineChartLabels = [];
        data.historical.map((day, index) => {
       
          this.lineChartLabels.push(day.date); 
          priceTemp.push(day.close);
          lowTemp.push(day.low);
          highTemp.push(day.high);
        });
        this.lineChartData[0].data = priceTemp;
        this.lineChartData[1].data = lowTemp;
        this.lineChartData[2].data = highTemp; 
        this.timelineDays = 5;  
    })
  }



  public getCurrentDate() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const todaysDate = year + "-" + month + "-" + day;
      return todaysDate;
  }

    public getHistoricalDate(timeLine: number) {
      const historicDate = new Date();
      historicDate.setDate(historicDate.getDate() - timeLine);
      const month = historicDate.getUTCMonth() + 1;
      const day = historicDate.getUTCDate();
      const year = historicDate.getUTCFullYear();
      const previousDate = year + "-" + month + "-" + day;
      console.warn(previousDate)
      return previousDate;
    }


}




