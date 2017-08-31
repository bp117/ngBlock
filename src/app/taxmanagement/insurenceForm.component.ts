import {Component, Output,Input} from '@angular/core';
import { NgForm }  from '@angular/forms';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'display-insurance-modal',
  templateUrl: 'insurenceForm.component.html',
   providers: [DataService]
})
export class InsurenceFormComponent {
        
     @Output() states : any;
         escrowDashboard:boolean = false;
         messages: any = [];
    counties : any =[];
        
    
    
    ngAfterViewInit() {
        console.log("ngAfterViewInit Method");
        this.dataService.getDocuments().then((data) => {
                this.messages = data;
             console.log("this.messages ",this.messages);  
               this.counties = data[0].counties;
            this.states = data[5].states;
            console.log("this.counties ",this.counties); 
             console.log("this.states ",this.states);  
        }).catch((ex) => {
                console.error('Error fetching users', ex);
        });

     }
    
        constructor(public dataService: DataService) {
            /* this.states = [{viewValue:"NJ"},{viewValue:"WV"},{viewValue:"MN"},{viewValue:"SD"},{viewValue:"OK"},{viewValue:"AK"},{viewValue:"AL"},
                 {viewValue:"ND"},{viewValue:"WY"},{viewValue:"CA"},{viewValue:"MA"},{viewValue:"VA"},{viewValue:"WI"},{viewValue:"AR"},
                 {viewValue:"NM"},{viewValue:"MD"},{viewValue:"TN"},{viewValue:"OH"},{viewValue:"NE"},{viewValue:"NH"},{viewValue:"ME"},
                {viewValue:"GA"},{viewValue:"IL"},{viewValue:"MI"},{viewValue:"KS"},{viewValue:"UT"},{viewValue:"NY"},{viewValue:"RI"},
                {viewValue:"DE"},{viewValue:"DC"},{viewValue:"SC"},{viewValue:"IA"},{viewValue:"MT"},{viewValue:"CO"},{viewValue:"VT"},
                {viewValue:"CT"},{viewValue:"FL"},{viewValue:"MS"},{viewValue:"IN"},{viewValue:"MO"},{viewValue:"LA"},{viewValue:"TX"},
                {viewValue:"ID"},{viewValue:"WA"},{viewValue:"NV"},{viewValue:"HI"},{viewValue:"PA"},{viewValue:"NC"},{viewValue:"KY"},
                {viewValue:"AZ"},{viewValue:"OR"}];*/
             }

        ngOnInit(){
            this.tableVisible = false;
            this.dataService.initCall();
            }
    

        interestRate = 2;
        data: string;
        tableVisible : boolean = false; 
 
    
    
    
    
    //counties = [{viewValue:"GA"},{viewValue:"IL"},{viewValue:"MI"}];
    /*getCountyList(item : any){
        countiesList = [{viewValue: 'Savings', value: 'NJ'},
                    {viewValue: 'Basic Checking', value: 'WV'},
                    {viewValue: 'Interest-Bearing Checking', value: 'MN'}];
        
        for(let c of countiesList){            
            if(c.value == item)
             this.counties = this.counties.add(c);
            }       
        
        }*/    
  
   
    onSubmit(insuranceForm : any) {           
            console.log("insuranceForm  ",insuranceForm);
        }

  
    private change(value: any) {
       console.log('Selected value is: ', value);
     }
   search(insuranceForm : any) {           
            console.log("insuranceForm in Search ",insuranceForm);
               this.tableVisible = true;
       
        }
}
    