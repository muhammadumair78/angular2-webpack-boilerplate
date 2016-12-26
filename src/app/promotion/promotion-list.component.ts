import { Component, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from './promotion.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Promotion } from './promotion';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotificationMessages } from '../common/app.constants';

@Component({
    selector: 'app-promotions-list',
    templateUrl: './promotion-list.component.html'
})
export class PromotionListComponent implements OnInit {

    @ViewChild('promotionModal')
    @ViewChild('promotionDeleteModal')

    public modal: ModalComponent;
    public promotionslist: Array<Promotion> = [];
    public activePromotion: Promotion = new Promotion();
    public deleteAblePromotion: Promotion = new Promotion();
    public notifMsgs: any = NotificationMessages;

    constructor(
        private _toastr: ToastsManager,
        private _promotionService: PromotionService
    ) {
    }
    
    ngOnInit() {
        this._promotionService.getPromotionsList().subscribe(result => {
            this.promotionslist = result;
        });
    }
    
    openPromotionDeleteModel(promotion: Promotion) {
        this.deleteAblePromotion = promotion;
    }

    dismissPromotionDeleteModel() {
        let nm = this.notifMsgs.deletePromotion;
        this._promotionService.deletePromotion(this.deleteAblePromotion.id).subscribe(result => {
            let promotionIndex = this.promotionslist.indexOf(this.deleteAblePromotion, 0);
            this.promotionslist.splice(promotionIndex, 1);
            this._toastr.success(nm.success.msg, nm.success.title);
        }, err => {
            this._toastr.error(nm.error.msg, nm.error.title);
        });
    }

    viewPromotion(promotion: Promotion){
        this.activePromotion = promotion;
    }

}