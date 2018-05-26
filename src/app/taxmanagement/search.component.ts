import {Component,Input} from "@angular/core";
import { DataService } from '../shared/data.service';

@Component({   
    selector : 'display-table',
    templateUrl: './search.html',
     providers: [DataService]

})
export class SearchComponent{
 @Input() addrList :any;  
   messages: any = []; 
   taxDeduction:any;
  ledgerFormVisible : boolean = false;
    address : any =[];
   
    i:any;
    
   
    openLedger(value:any){
        this.ledgerFormVisible = true;
        console.log("testing ledger",value);
         this.taxDeduction=value;

    }
     ngOnChanges(){
       console.log("County",this.addrList);
     }

   

}