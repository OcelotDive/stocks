import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public companySymbol: string;
  public timelineDays: number = 5;
  @Output() chartTypeFromChild = new EventEmitter<string>();

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

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Price' },
    { data: [], label: 'Low' },
    { data: [], label: 'High' }
  ];

  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 
    this.route.params.subscribe(routeParams => {

      this.companySymbol = routeParams.symbolId.substring(1);

     this.getChartData();
        
    });
  }

  ngOnInit() {
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
   this.barChartLabels = [];
      data.historical.map((day, index) => {
     
        this.barChartLabels.push(day.date); 
        priceTemp.push(day.close);
        lowTemp.push(day.low);
        highTemp.push(day.high);
      });
      this.barChartData[0].data = priceTemp;
      this.barChartData[1].data = lowTemp;
      this.barChartData[2].data = highTemp; 
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
