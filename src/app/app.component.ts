import {Component} from "@angular/core";


@Component({
    selector: "myroute-app",
    templateUrl: './dashboard.html'
   
})
export class AppComponent{
        messages: any = [];
    constructor(){  
    }  
       
    ngOnInit() {      
         //this.dataService.initCall();
        
     }
    
   /* ngAfterViewInit() {
        console.log("ngAfterViewInit Method");
        this.dataService.getDocuments().then((data) => {
                this.messages = data;
             console.log("this.messages ",this.messages);  
                 this.assignValues(this.messages);
        }).catch((ex) => {
                console.error('Error fetching users', ex);
        });

     }
    assignValues(data:any){
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