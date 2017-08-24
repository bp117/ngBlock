import { Injectable }     from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';


import { Observable }     from 'rxjs/Observable';

declare var webContextRef: string;

@Injectable()
export class TestService {
        
   
	private _add_service_details_url = webContextRef+'/svcadmin/add_domain';
    
    constructor (private http: Http) {}
    
  
    postData(data :any){       
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.put('/api/data/', body, options ).map((res: Response) => res.json());
    
    }   
	
  
}