import {Component,Output,Input,OnChanges} from "@angular/core";
import {DataService} from './../shared/data.service';
@Component({       
    selector: 'display-escrowacc-details',
    templateUrl: './escrowAccDetails.html'

})
export class EscrowAccDetailsComponent implements OnChanges {
    @Input() acctList:string;
     constructor(public dataService: DataService) {
         console.log(this.acctList);
    }
        ngOnInit(){
           
            // this.dataService.initCall();
            }
   
ngAfterViewInit() {
        console.log("ngAfterViewInit Method",this.acctList);
      

     } 

     ngOnChanges(){
       console.log("County",this.acctList);
     }
    
}
