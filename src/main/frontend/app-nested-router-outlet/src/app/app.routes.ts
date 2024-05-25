import { Routes } from '@angular/router';
import { DashboardComponent } from  './dashboard/dashboard.component'
import {Tab1Component} from "./dashboard/tab1/tab1.component";
import {Tab2Component} from "./dashboard/tab2/tab2.component";
export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'first',
                component: Tab1Component
            },
            {
                path: 'second',
                component: Tab2Component
            }
        ]
    }
];
