import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-route-simulator',
  templateUrl: './route-simulator.component.html',
  styleUrls: ['./route-simulator.component.css']
})
export class RouteSimulatorComponent implements OnInit {
  path: string;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
  }
  goToRoute() {
    const link = [this.path];
    console.log(link);
    this.router.navigate(link);
  }

}
