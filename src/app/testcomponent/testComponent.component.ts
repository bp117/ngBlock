import { Component, Input, Output, EventEmitter, OnInit, Directive, forwardRef,Attribute,OnChanges, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import { TestService } from '../shared/testService.service';


@Component({  
        template: '',        
        providers: [TestService] 
 
})
export class TestComponent {
         
    /**
     * Inputs from parent component
     **/
      
     constructor(public testService: TestService) {
           
         }
    
    ngOnInit() {        
    
            }
    
    ngAfterViewInit() {
       
    }	

    postData(data:any) {
            this.testService.postData(data).subscribe(
               data =>        
                 data = data,
               
               error => {
                 console.error("Error saving data!");
                 //return Observable.throw(this.error);
               }
            );
        }
  
}