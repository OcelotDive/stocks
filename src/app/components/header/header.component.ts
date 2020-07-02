import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [InvestorService]
})
export class HeaderComponent implements OnInit {
  public companyStockList: any[];
  public companySearchText: string = "";
  public companyLookUp: string ="";
  public displayMenu: boolean = false;

  constructor(public investorService: InvestorService) {
    
    this.investorService.getSymbolsList().subscribe((data: any) => {
      this.companyStockList = data.symbolsList;
      console.warn(this.companyStockList)
    });
   }

   handleCompanyClick(symbol: string) {
    this.companyLookUp = symbol;
    this.companySearchText = "";
   }
   
   @ViewChild('menuModal', null) elRef: ElementRef; 
   handleBurgerClick(node: HTMLElement) {
    node.classList.toggle("change");
    this.displayMenu = !this.displayMenu;
    if(this.displayMenu){
      this.elRef.nativeElement.style.opacity = 1;
      this.elRef.nativeElement.style.zIndex = 9999;
    }
    else {
      this.elRef.nativeElement.style.opacity = 0;
      this.elRef.nativeElement.style.zIndex = -3;
    }
   }

  ngOnInit() {
   
  }
}
