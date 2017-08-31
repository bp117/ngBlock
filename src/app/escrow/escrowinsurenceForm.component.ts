import {Component, Output,Input} from '@angular/core';
import { NgForm }  from '@angular/forms';

import {DataService} from '../shared/data.service';


@Component({
  selector: 'display-escrowinsurance-modal',
  templateUrl: './escrowinsurenceForm.component.html',
   providers: [DataService]
})
export class EscrowInsurenceFormComponent {
        
         @Output() states : any;
         escrowDashboard:boolean = false;

        statesList:any; 
        selectedCounty:string;
    interestRate = 2;
        data: string;
        //tableVisible : boolean = false; 
 
    
    constructor(public dataService:DataService){

    }
    
    

    counties :any;
    countiesList:any
    getCountyList(name : any){
            this.countiesList = this.statesList.filter((item:any)=> item.state_name == name); 
            this.counties = this.countiesList[0].county_List;
           console.log("Counties:",this.counties);
        }    


  
   acctDetails:any;
    onSubmit(insuranceForm : any) {    
         this.escrowDashboard = true;       
            console.log("insuranceForm  ",insuranceForm);
              this.dataService.getEscrowAcctDetails().then((res:any) => {
            this.acctDetails = res.propertyList.filter((item:any)=> item.county == insuranceForm.county); 
             //   this.acctDetails = res.propertyList;
                console.log(this.acctDetails)  ;
        }).catch((ex:any) => {
                console.error('Error fetching users', ex);
        }); 
        }

  
    private change(value: any) {
       console.log('Selected value is: ', value);
     }
   search(insuranceForm : any) {           
         
     // this.escrowDashboard = true;
      this.selectedCounty = insuranceForm.county;
      console.log(this.selectedCounty);
        }

        
  
    ngOnInit(){
           
             this.dataService.initCall();
            }
    
     ngAfterViewInit() {
        console.log("ngAfterViewInit Method");
        this.dataService.getStates().then((res:any) => {
                this.statesList = res.states;
                console.log(this.statesList)  ;
        }).catch((ex:any) => {
                console.error('Error fetching users', ex);
        });

     }
}
    