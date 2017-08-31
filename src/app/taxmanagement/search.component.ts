import {Component,Input} from "@angular/core";

@Component({   
    selector : 'display-table',
    templateUrl: './search.html'

})
export class SearchComponent{
 @Input() addrList :any;  
   messages: any = []; 
  ledgerFormVisible : boolean = false;
    
   
    openLedger(){
        this.ledgerFormVisible = true;
        console.log("testing ledger");
    }
     ngOnChanges(){
       console.log("County",this.addrList);
     }

}