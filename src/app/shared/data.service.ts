import { Injectable, NgZone } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
declare var PouchDB:any;
// PouchDB = require('pouchdb');

@Injectable()
export class DataService {
  
  db: any;
  username: any;
  password: any;
  remote: any;
  data: any = [];
  url: any;
  results: any;
  api: any;

  constructor(private _http: Http, private zone: NgZone) { 
 
    // database name
    this.db = new PouchDB('escrow');
    
    // cloudant login details
    this.username = '3f328e05-2137-4460-9dd9-77cc2fa89951-bluemix';
    this.password = '24fc5e78cd70e40d5d0ba888fafb34c28161132a4f6109fb10cf7bb05e358f38';    
    
    // cloudant, couchdb, couchbase remote url
    // eg - https://<your_host>.cloudant.com/todo
    this.remote = 'https://3f328e05-2137-4460-9dd9-77cc2fa89951-bluemix:24fc5e78cd70e40d5d0ba888fafb34c28161132a4f6109fb10cf7bb05e358f38@3f328e05-2137-4460-9dd9-77cc2fa89951-bluemix.cloudant.com/escrow';

    // cloudant, couchdb, couchbase remote url
    // applicable when username/password set. 
    let options = {
      live: true,
      retry: true,
      continuous: true,
      auth: {
        username: this.username,
        password: this.password
      }
    };

    this.db.sync(this.remote, options);
    this.db.setMaxListeners(30);
    
  }

  initCall() {
    // make sure UI is initialised
    // correctly after sync.
    this.zone.run(() => {});
  }

  // NOTE: Another way to retrieve data via a REST call
  getUrl() {
      let headers = new Headers();      
      headers.append("Authorization", "Basic " + btoa(this.username + ":" + this.password)); 
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      this.api = this.remote + '/_all_docs?include_docs=true';
      
      return new Promise(resolve => {
        this._http.get(this.api, {headers: headers})
              .map(res => res.json())
              .subscribe(data => {
                this.results = data;
                
                this.data = [];

                let docs = this.results.rows.map((row:any) => {
                  this.data.push(row.doc);
                });
                          
                resolve(this.data);

                this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change:any) => {
                    this.handleChange(change);
                });

              }); 
      });

  }

  addDocument(doc:any){
    this.db.put(doc);
  }
 
  deleteDocument(id:any) {
    this.db.remove(id);
  }
  getStates(){
    return new Promise(resolve => {
    this.db.get("states").then(function (response:any) {
     
    //  this.data = response;
        resolve(response);

}).catch(function (err:any) {
  console.log(err);
});
});
  }

    getEscrowAcctDetails(){
    return new Promise(resolve => {
    this.db.get("countyProperties").then(function (response:any) {
     
    //  this.data = response;
        resolve(response);

}).catch(function (err:any) {
  console.log(err);
});
});
  }

  getDocuments() {
    return new Promise(resolve => {
      this.db.allDocs({
        include_docs: true,
        limit: 30,
        descending: true
      }).then((result:any) => {
        this.data = [];

        let docs = result.rows.map((row:any) => {
          this.data.push(row.doc);
        });
 
        this.data.reverse();

        resolve(this.data);
        
        this.db.changes({live: true, since: 'now', include_docs: 
          true}).on('change', (change:any) => {
              this.handleChange(change);
        });
 //console.log("this.this.data ",this.data); 
      }).catch((error:any) => {
 
        console.log(error);
 
      }); 
 
    });
 
  }

  updateDocument(obj:any){
    this.db.put({
      _id:"countyProperties",
      
    })
  }
 
  handleChange(change:any){
 
    let changedDoc = null;
    let changedIndex = "";
 
    this.data.forEach((doc:any, index:any) => {
 
      if(doc._id === change.id){
        changedDoc = doc;
        changedIndex = index;
      }
 
    });
 
    //A document was deleted
    if(change.deleted){
      this.data.splice(changedIndex, 1);
    } 
    else {
 
      //A document was updated
      if(changedDoc){
        this.data[changedIndex] = change.doc;
      } 
      //A document was added
      else {
        this.data.push(change.doc);                
      }
 
    }
 
  }  

}
