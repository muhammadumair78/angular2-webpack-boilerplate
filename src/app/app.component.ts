import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'my-app',
  template: `
    <app-shell></app-shell>
  `,
  styleUrls: [String('../styles/main.scss')]
})
export class AppComponent { 
  constructor(
        private _toastr: ToastsManager,
        private vRef: ViewContainerRef
    ) {
        this._toastr.setRootViewContainerRef(vRef);
    }
}
