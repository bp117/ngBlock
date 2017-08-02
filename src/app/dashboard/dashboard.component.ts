import {Component,Output} from "@angular/core";

@Component({       
    templateUrl: './dashboard.html'

})
export class DashboardComponent{
    
    @Output() isDashboard : boolean;
    
     constructor(  ) {
       this.isDashboard  = false;
     }
    
    ngOnInit(){
            this.isDashboard = true;
         console.log("dashboard isDashboard Value  ",this.isDashboard);
            }
}
