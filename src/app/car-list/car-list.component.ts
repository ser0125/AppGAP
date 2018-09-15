import { Car } from './../models/car.model';
import { Cars } from './../models/car-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[];
  branchValue: string;
  constructor() {
    this.cars = Cars.cars;
   }

  ngOnInit() {
  }

}
