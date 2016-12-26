import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    private _localStorage: any;

    constructor() {
        if(!window.localStorage) {
            throw "Browser doesn't support LocalStorageService";
        }
        this._localStorage = window.localStorage;
    }

    map(key: string, value?: any) {
        if(!key){
            throw "key cannot be empty or null";
        }

        // Setter
        if(value) {
            this._localStorage.setItem(key, JSON.stringify(value));
            return this;
        }

        // Getter
        let val = this._localStorage.getItem(key);

        // Check if parsable
        try{
            val =  JSON.parse(val);
        }catch(ex){

        }finally {
            return val;
        }
    }

    has(key: string): boolean {
        return this._localStorage.hasOwnProperty(key);
    }

    destroy(key: string) {
        if(this._localStorage.hasOwnProperty(key)){
            delete this._localStorage[key];
        }
    }

    clearStorage() {
        let keys: string [] = Object.keys(this._localStorage);
        for(let i = 0; i < keys.length; i++){
            delete this._localStorage[keys[i]];
        }
    }
}
