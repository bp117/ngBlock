
import {Component,OnInit} from "@angular/core";
import {Observable} from 'rxjs/Rx';

import { TestService } from './shared/testService.service';

@Component({
    selector: "myroute-app",
    templateUrl: './dashboard.html',
     providers: [TestService] 
   
})
export class AppComponent implements OnInit {
        
    messages: any = [];
    response : any ;
    data : any = {
                  "jsonrpc": "2.0",
                  "method": "query",
                  "params": {
                    "type": 1,
                    "chaincodeID": {
                      "name": "3e2956c06845863be46bf6c1ab44564ef2fd16a0aa9f0fff598b7ee9aa5a9de6b17d9101ea1323df2e97ec9f538fdc9b96007e9926bf4782061e05f04061c137"
                    },
                    "ctorMsg": {
                      "function": "GetAllTransactions",
                      "args": [
                        "1","15","Testing","escrowId"
                      ]
                    },
                    "secureContext": "user_type1_0"
                  },
                  "id": 0
                };

    
        constructor(public testService: TestService) {
           
         }
    ngOnInit() {      
         console.log("ngOnInit");
         this.postData(this.data);
        
     }
     
  postData(data : any) {
        console.log("Post Data Method");
        
            this.testService.postData(this.data).subscribe(
               data =>        
                 this.response = data,
               
               error => {
                 console.error("Error saving data!");
                 //return Observable.throw(this.error);
               }
            );
        }
   /* assignValues(data:any){
        console.log("COunties couontyName  ",data[0].counties.countyName); 
        console.log("properties address  ",data[1].properties.address);     
         console.log("orgs address  ",data[2].orgs.orgType);     
         console.log("Customers address  ",data[3].Customers.firstName+data[3].Customers.lastName);     
         console.log("notifications   ",data[4].notifications.msg);     
         console.log("states   ",data[5].states); 
        console.log("propertyEscrow   ",data[6].propertyEscrow.escrowAcctId);                   
        }
*/

}