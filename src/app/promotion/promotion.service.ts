import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { HttpService } from '../common/http.service';
import { AppUrls } from '../common/app.constants';

@Injectable()
export class PromotionService {

    public _appUrls: any;

    constructor (
        private _http: Http,
        private _httpService: HttpService
    ) {
        this._appUrls = AppUrls;
    }

    getPromotionsList(): Observable<any> {
        return this._httpService.get('https://jsonplaceholder.typicode.com/posts');
    }

    getPromotion(id: number): Observable<any> {
        return this._httpService.get('https://jsonplaceholder.typicode.com/posts/'+id);
    }

    savePromotion(data: any){
        if(data.Id){
            return this._httpService.put('https://jsonplaceholder.typicode.com/posts', data);
        } else {
            return this._httpService.post('https://jsonplaceholder.typicode.com/posts', data);
        }
    }

    deletePromotion(id: number){
        return this._httpService.delete('https://jsonplaceholder.typicode.com/posts/'+id);
    }

}
