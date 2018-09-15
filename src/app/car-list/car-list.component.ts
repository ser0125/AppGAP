import { Cars } from './../models/car-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: any;
  constructor() {
    this.cars = Cars.cars;
    console.log(this.cars);
   }

  ngOnInit() {
  }

}
