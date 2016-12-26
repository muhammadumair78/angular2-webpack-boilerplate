import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PromotionService } from './promotion.service';

import { RegexPattern } from '../common/app.constants';
import { Promotion } from './promotion';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotificationMessages } from '../common/app.constants';

@Component({
    selector: 'app-promotions-form',
    templateUrl: './promotion-form.component.html'
})
export class PromotionFormComponent implements OnInit {

    public promotion: Promotion = new Promotion();
    public regexPattern: any = RegexPattern;
    public notifMsgs: any = NotificationMessages;

    constructor(
        private _promotionService: PromotionService,
        private _route: ActivatedRoute,
        private _toastr: ToastsManager,
        private _router: Router
    ) {
    }
    
    ngOnInit() {
        this._route.params.forEach((param: Params) => {
            let id = +param['id'];
            if(id){
                this._promotionService.getPromotion(id).subscribe(result => {
                    this.promotion = result;
                });
            }
        })
    }

    savePromotion(model: Promotion, isValid: boolean){
        if(isValid){
            let nm = this.notifMsgs.savePromotion;
            this._promotionService.savePromotion(model).subscribe(result => {
                this._router.navigate(['promotions-list']);
                this._toastr.success(nm.success.msg, nm.success.title);
            }, err => {
                this._toastr.error(nm.error.msg, nm.error.title);
            });
        }
    }


}