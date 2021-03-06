import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  public balanceStatement: Object[];
  public companySymbol: string = "";
  public noData: boolean = true;

  constructor(public investorService: InvestorService, public route: ActivatedRoute) {
    this.scroll();
   
    this.route.params.subscribe(routeParams => {
    this.companySymbol = routeParams.symbolId.substring(1);

    this.investorService.getAnnualBalance(this.companySymbol).subscribe((data: any) => {
      if(data.financials === undefined) {
        this.noData = false;
        return;
      } 
      this.balanceStatement = data.financials.slice(0,11).reverse();
    
    })
  })
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

 export_table_to_csv(filename) {
	var csv = [];
  var rows = Array.from(document.querySelectorAll("h4, th, td"));
  var table = [document.querySelector("table")];

  for(let j = 0; j < table.length; j++) { 
     var formatedText = "";
    
     rows.forEach(element => {
      if(element.tagName == 'H4') {
        formatedText += '\n' + '\n' +(element.textContent.replace(/,/g, '') + ',').split(" ").join(' ') + '\n';
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

handleCsvClick() {
  
  
	this.export_table_to_csv("table.csv");
};


  ngOnInit() {
  }

  scroll() {
    setTimeout(() => {
    window.scrollTo(0,1200);
    }, 0)
  }

}
