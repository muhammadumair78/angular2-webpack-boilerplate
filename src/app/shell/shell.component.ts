import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from "@angular/router";

import { LocalStorageService } from '../common/local-storage.service';
import { CommonService } from '../common/common.service';

@Component({
    selector: 'app-shell',
    templateUrl:  './shell.component.html'
})

export class ShellComponent implements OnInit {

    public isAuthenticated: boolean;
    public publicRoutes: Array<string>;

    constructor(
        private _localStorageService: LocalStorageService,
        private _commonService: CommonService,
        private _router: Router
    ) {
        _router.events.subscribe((event: NavigationEvent) => {

            if(event instanceof NavigationStart){
                console.log("Route Change start")
            }
        });
    }

    ngOnInit() {
    }
}