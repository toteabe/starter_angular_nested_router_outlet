import { Component } from '@angular/core';
import {Tab1Component} from "./tab1/tab1.component";
import {Tab2Component} from "./tab2/tab2.component";
import {NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Tab1Component,
    Tab2Component,
    NgIf,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  currentTab: string = 'Tab1';

}
