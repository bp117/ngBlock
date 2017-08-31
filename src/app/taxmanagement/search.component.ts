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
  ledgerFormVisible : boolean = false;
    address : any =[];
   
    i:any;
    
   
    openLedger(){
        this.ledgerFormVisible = true;
        console.log("testing ledger");

    }
     ngOnChanges(){
       console.log("County",this.addrList);
     }

   

}