import { Injectable }     from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';


import { Observable }     from 'rxjs/Observable';


@Injectable()
export class TestService {
        
   
	private _url = 'https://f29f39c507cd43639862ec95802fbb0e-vp0.us.blockchain.ibm.com:5004/chaincode';
    
    constructor (private http: Http) {}
    
  
    postData(data :any){       
        console.log("Post Data Method :service");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.post(this._url, body, options ).map((res: Response) => res.json());
    
    }   
	
  
}