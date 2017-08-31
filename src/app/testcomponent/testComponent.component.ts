/*import { Component, Input, Output, EventEmitter, OnInit, Directive, forwardRef,Attribute,OnChanges, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import { TestService } from '../shared/testService.service';


@Component({  
        template: '',        
        providers: [TestService] 
 
})
export class TestComponent { */
         
    /**
     * Inputs from parent component
     **/
  /*    
     constructor(public testService: TestService) {
           
         }
    
    ngOnInit() {        
    
            }
    
    ngAfterViewInit() {
       
    }	
    
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

    postData(this.data) {
            this.testService.postData(this.data).subscribe(
               data =>        
                 data = data,
               
               error => {
                 console.error("Error saving data!");
                 //return Observable.throw(this.error);
               }
            );
        }
  
}
*/