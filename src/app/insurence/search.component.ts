import {Component,Input} from "@angular/core";

@Component({   
    selector : 'display-table',
    templateUrl: './search.html'

})
export class SearchComponent{
 @Input() states :any;    
}