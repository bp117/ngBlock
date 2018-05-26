import {Component, OnInit} from "@angular/core";
import {Observable} from 'rxjs/Rx';

import { TestService } from '../shared/testService.service';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers :[TestService]
})
export class HomeComponent {

     messages: any = [];
    response : any ;
    
    constructor(public testService: TestService) { }

    data: any = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "3e2956c06845863be46bf6c1ab44564ef2fd16a0aa9f0fff598b7ee9aa5a9de6b17d9101ea1323df2e97ec9f538fdc9b96007e9926bf4782061e05f04061c137"
            },
            "ctorMsg": {
                "function": "CreditIntoEscrowAccount",
                "args": [
                    "escrowId2", "prop100", "10000", "user_type1_1", "1000", "Tax_1", "1000", "TAX"
                ]
            },
            "secureContext": "user_type1_0"
        },
        "id": 0
    };
    
    
    creditAmountToLedger(data : any) {
        console.log("Credit Data Method");
        
            this.testService.postData(this.data).subscribe(
               data =>        
                 this.response = data,
               
               error => {
                 console.error("Error saving data!");
                 //return Observable.throw(this.error);
               }
            );
        }
    
    

}