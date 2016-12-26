import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { HttpService } from '../common/http.service';
import { AppUrls } from '../common/app.constants';

@Injectable()
export class ShellService {

    public _appUrls: any;

    constructor (
        private _httpService: HttpService
    ) {
        this._appUrls = AppUrls;
    }

}
