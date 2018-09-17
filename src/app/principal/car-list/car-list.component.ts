import { SharedService } from './../../shared.service';
import { Car } from './../../models/car.model';
import { Cars } from './../../models/car-data';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[];
  branchValue: string;
  subscription: Subscription;
  searchText: string;
  constructor(private sharedService: SharedService) {
    this.cars = Cars.cars;
   }

  ngOnInit() {
    this.subscription = this.sharedService.textChanged
    .subscribe((searchText: string) => {
      this.searchText = searchText;
    });
  }

}
