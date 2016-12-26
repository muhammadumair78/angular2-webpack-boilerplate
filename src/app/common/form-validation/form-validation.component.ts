import { Component, Input, OnInit } from '@angular/core';

import { camelcasetonormal } from '../camelcase-to-normal.pipe';

@Component({
    selector: 'form-validation',
    templateUrl: './form-validation.component.html'
})

export class FormValidationComponent implements OnInit {
    
    @Input() model: any;
    @Input() visible: any;

    public input: any;

    constructor(){
    }

    ngOnInit(): void {
    }

}
