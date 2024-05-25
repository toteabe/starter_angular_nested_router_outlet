import {Component, inject, OnInit} from '@angular/core';
import {Tab1Component} from "./tab1/tab1.component";
import {Tab2Component} from "./tab2/tab2.component";
import {NgIf} from "@angular/common";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet} from "@angular/router";
import {filter, map} from "rxjs";

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
export class DashboardComponent implements OnInit  {

  currentTab: string = 'Tab1';

  //private activatedRoute = inject(ActivatedRoute);

  //Utilizo inyeccion por constructor de typescript
  constructor(p private router: Router){}
  ngOnInit() {
    console.log("En este instante el componente ha cargado");


    //https://ultimatecourses.com/blog/detecting-route-changes-angular-router
    this.router.events.pipe(
        filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      // this only fires for `NavigationStart` and no other events
      console.log(event);
    });


  }


}
