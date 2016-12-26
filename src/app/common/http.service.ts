import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Rx';

import { LocalStorageService } from '../common/local-storage.service';

@Injectable()
export class HttpService  {

    private headers: Headers;
    private options: RequestOptions;
    private headersWithoutToken: Headers;
    private optionsWithoutToken: RequestOptions;
    private centralizeUrl: string = 'api';

    constructor(
        private _http: Http,
        private _localStorageService: LocalStorageService,
        private _router: Router,
    ) {
        let token: string = null;
        if(this._localStorageService.has('accessToken')){
            token = this._localStorageService.map('accessToken')
        }
        this.setHeaders();
        this.setTokenHeaders(token);
    }

    get(url: string, tokenHeaders:boolean = true): Observable<any> {
        let options = tokenHeaders ? this.options : this.optionsWithoutToken;
        let fullUrl = this._processURL(url).toLowerCase();
        return this._http.get(fullUrl, options)
            .map(this._handleResponse)
            .catch(this._handleError);
    }

    post(url: string, body: any, tokenHeaders:boolean = true): Observable<any> {
        let options = tokenHeaders ? this.options : this.optionsWithoutToken;
        let _body = JSON.stringify(body);
        let fullUrl = this._processURL(url).toLowerCase();
        return this._http.post(fullUrl, _body, options)
            .map(this._handleResponse)
            .catch(this._handleError);
    }

    put(url: string, body: any): Observable<any> {
        let _body = JSON.stringify(body);
        let fullUrl = this._processURL(url).toLowerCase();
        return this._http.put(fullUrl, _body, this.options)
            .map(this._handleResponse)
            .catch(this._handleError);
    }

    delete(url: string): Observable<any> {
        let fullUrl = this._processURL(url).toLowerCase();
        return this._http.delete(fullUrl, this.options)
            .map(this._handleResponse)
            .catch(this._handleError);
    }

    setTokenHeaders(token: string){
        if(token){
            this.headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            });
        } else {
            this.headers = new Headers({ 'Content-Type': 'application/json' });
        }
        this.options = new RequestOptions({ headers: this.headers });
    }

    setHeaders(){
        this.headersWithoutToken = new Headers({ 'Content-Type': 'application/json' });
        this.optionsWithoutToken = new RequestOptions({headers:this.headersWithoutToken});
    }

    private _processURL(url: string){
        // return this.centralizeUrl + '/' + url;
        return url;
    }

    private _handleResponse = (response: any, value: any): any => {
        try {
            let body = response.json();
            return body || { };
        }
        catch (e) {
            return { };
        }
    }

    private _handleError = (error: any, value: any) => {

        if(error.status === 500 || error.status === 404){
            //this._router.navigate(['error', error.status]);
        } else if(error.status === 401){
            this._localStorageService.clearStorage();
            this._router.navigate(['dashboard']);
        }

        // log to console instead
        console.error(error);
        let errorBody: any = null;
        try {
            errorBody = JSON.parse(error._body);
        } catch (e) {
            errorBody = { };
        }
        errorBody.status = error.status;
        return Observable.throw(errorBody);
    }
}



