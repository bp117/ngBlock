import {Component} from "@angular/core";
import { DataService } from '../shared/data.service';

@Component({   
    templateUrl: './notifications.html',
     providers: [DataService]

})
export class NotificationComponent{
    
     messages: any = [];
     notifications : any =[];
       
    constructor(public dataService: DataService) {}
    
        ngOnInit() {
                
             }
    
    ngAfterViewInit() {
               
        this.dataService.getDocuments().then((data) => {
                this.messages = data;
             console.log("this.messages ",this.messages);  
             this.notifications = data[4].notifications;            
            console.log("this.notifications ",this.notifications); 
              
        }).catch((ex) => {
                console.error('Error fetching users', ex);
        });

     }
    
}