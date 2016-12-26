import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PromotionListComponent } from './promotion/promotion-list.component';
import { PromotionFormComponent } from './promotion/promotion-form.component';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'promotions-list',
        component: PromotionListComponent
    },
    {
        path: 'promotion-edit/:id',
        component: PromotionFormComponent
    },
    {
        path: 'add-new-promotion',
        component: PromotionFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
