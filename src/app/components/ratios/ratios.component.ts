import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ratios',
  templateUrl: './ratios.component.html',
  styleUrls: ['./ratios.component.css']
})

export class RatiosComponent implements OnInit {
  public financialRatios: Object[];
  public companySymbol: string = "";
  public noData: boolean = true;

  constructor(public investorService: InvestorService, public route: ActivatedRoute) { 

    this.scroll();
    this.route.params.subscribe(routeParams => {
    this.companySymbol = routeParams.symbolId.substring(1);

    this.investorService.getFinancialRatios(this.companySymbol).subscribe((data: any) => {
      if(data.ratios === undefined) {
        this.noData = false;
        return;
      } 
      this.financialRatios = data.ratios.slice(0,11).reverse();
    });
  });
  }

  download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

 export_table_to_csv(ratioTable, filename) {
	var csv = [];
  var rows = Array.from(document.querySelectorAll("h4, th, td"));
  var table = [document.querySelector("table")];

  for(let j = 0; j < table.length; j++) { 
     var formatedText = "";
    
     rows.forEach(element => {

      if(element.tagName == 'H4') {
        formatedText += '\n' + (element.textContent.replace(/,/g, '') + ',').split(" ").join(' ');
      }
     else if(element.tagName == 'TH') {
        formatedText += '\n' + (element.textContent.replace(/,/g, '') + ',').split(" ").join(' ');
      }
      else {
       formatedText += (element.textContent.replace(/,/g, '') + ',').split(" ").join(',');
      }
    }) 
    csv.push(formatedText)
     }
       
    // Download CSV
    this.download_csv(csv.join(""), filename);
} 

handleCsvClick(ratioTable: string) {
  
 
	this.export_table_to_csv(ratioTable,"table.csv");
};

  ngOnInit() {
  }

  scroll() {
    setTimeout(() => {
    window.scrollTo(0,2800);
    }, 0)
  }

}
