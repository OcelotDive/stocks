import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { ActivatedRoute } from '@angular/router';

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

 export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("tr");
	
    for (var i = 0; i < rows.length; i++) {
		var row = [], headers = rows[i].querySelectorAll("th"), data = rows[i].querySelectorAll('td, th');
		
        for (var j = 0; j < headers.length; j++) 
          var tableText = <HTMLElement> headers[j];
     
          console.log(tableText)
         
         let formatText = tableText.innerText.replace(',', '')
          row.push(formatText);
        
		csv.push(row.join(","));		
	}

    // Download CSV
    this.download_csv(csv.join("\n"), filename);
}

testClick() {
  alert("click")
  var html = document.querySelector("table").outerHTML;
	this.export_table_to_csv(html, "table.csv");
};


  ngOnInit() {
  }

  scroll() {
    setTimeout(() => {
    window.scrollTo(0,1200);
    }, 0)
  }

}
