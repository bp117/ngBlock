import {Component,Input} from "@angular/core";
import { DataService } from '../shared/data.service';

@Component({   
    selector : 'display-table',
    templateUrl: './search.html',
     providers: [DataService]

})
export class SearchComponent{
 @Input() states :any;   
  ledgerFormVisible : boolean = false;
    address : any =[];
    messages : any = [];
    i:any;
    
    openLedger(){
        this.ledgerFormVisible = true;
        console.log("testing ledger");
        }
    ngOnInit(){          
            this.dataService.initCall();
            }
    constructor(public dataService: DataService) {
        }
    
     ngAfterViewInit() {
        console.log("ngAfterViewInit Method");
        this.dataService.getDocuments().then((data) => {
                this.messages = data;
             console.log("this.messages ",this.messages);
               
                for(this.i=0;this.i<data[1].properties.length;this.i++){  
                   this.address = data[1].properties[this.i].address;
                    }
            
            console.log("this.address ",this.address); 
             
        }).catch((ex) => {
                console.error('Error fetching users', ex);
        });

     }
}