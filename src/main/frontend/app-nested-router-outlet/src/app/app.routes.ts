import { Routes } from '@angular/router';
import { DashboardComponent } from  './dashboard/dashboard.component'
import {Tab1Component} from "./dashboard/tab1/tab1.component";
import {Tab2Component} from "./dashboard/tab2/tab2.component";

//https://blog.devgenius.io/the-art-of-nested-router-outlets-in-angular-dafb38245a30
export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
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
