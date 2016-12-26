import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Routing modules
import { routing } from './app.routing';

//Third Party
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

// Common modules
import { CommonService } from './common/common.service';
import { HttpService } from './common/http.service';
import { LocalStorageService } from './common/local-storage.service';
import { FormValidationComponent } from './common/form-validation/form-validation.component';
import { EqualValidator } from './common/equal-validator.directive';
import { camelcasetonormal } from './common/camelcase-to-normal.pipe';

import { DashboardComponent } from './dashboard/dashboard.component';

// Shell modules
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';

import { PromotionListComponent } from './promotion/promotion-list.component';
import { PromotionFormComponent } from './promotion/promotion-form.component';

import { ShellService } from './shell/shell.service';
import { PromotionService } from './promotion/promotion.service';

let toastOptions: ToastOptions = new ToastOptions({
  animate: 'flyRight',
  positionClass: 'toast-top-right',
  showCloseButton: true,
  toastLife: 10000
});

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    routing,
    ToastModule.forRoot(toastOptions),
    Ng2Bs3ModalModule,
  ],
  declarations: [
      AppComponent,
      ShellComponent,
      HeaderComponent,
      SidebarComponent,

      // Directive
      EqualValidator,
      camelcasetonormal,
      FormValidationComponent,
      
      DashboardComponent,

      PromotionListComponent,
      PromotionFormComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [
      CommonService,
      HttpService,
      LocalStorageService,
      ShellService,
      PromotionService,
  ]
})
export class AppModule { }
