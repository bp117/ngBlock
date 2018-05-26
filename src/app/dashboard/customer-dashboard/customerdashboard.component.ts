import {Component,OnInit} from "@angular/core";
import {Observable} from 'rxjs/Rx';
import { TestService } from '../../shared/testService.service';

@Component({       
    templateUrl: './customerdashboard.html',
    providers: [TestService] 

})
export class CustomerDashboardComponent implements OnInit{
   
messages: any = [];
    response : any ;
    tran: string;    
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
     j:any =[];
  postData(data : any) {
        console.log("Post Data Method");
        
            this.testService.postData(this.data).subscribe(
               data => {       
                 this.response = data
                 this.tran =   this.replaceLineBreak(this.response.result.message);
                  this.j = JSON.parse(this.tran).transactions;
                 console.log("test  ",this.j);
               },               
               error => {
                 console.error("Error saving data!");
                 //return Observable.throw(this.error);
               }
            );
        }
  
   replaceLineBreak(s:string) {
    s =  s && s.replace('["','[');
    s = s && s.replace('""',',');
    return s && s.replace('"""""""','');
  }
   
}
