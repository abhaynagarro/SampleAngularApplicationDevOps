import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SampleService {

    constructor( private _http: Http ) { }

    getData(url?:string) {
        return this._http.get(url ||  '../assets/config/url.json' ).map(( data: Response ) => url? data.text():data.json() );
    }
}


