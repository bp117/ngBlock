import {Component} from "@angular/core";
import { DataService } from './shared/data.service';

@Component({
    selector: "myroute-app",
    templateUrl: './dashboard.html'  ,
    providers: [DataService],
})
export class AppComponent{
        messages: any = [];
    constructor(public dataService: DataService){  
    }  
       
    ngOnInit() {      
         this.dataService.initCall();
        
     }
    
    ngAfterViewInit() {
        console.log("ngAfterViewInit Method");
        this.dataService.getDocuments().then((data) => {
                this.messages = data;  
        }).catch((ex) => {
                console.error('Error fetching users', ex);
        });

     }

}