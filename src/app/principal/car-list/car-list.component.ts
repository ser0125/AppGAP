import { SharedService } from './../../shared.service';
import { Car } from './../../models/car.model';
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
  compareValue = true;
  currentBoxes = 0;
  constructor(private sharedService: SharedService) {
   }

  ngOnInit() {
    this.subscription = this.sharedService.textChanged
    .subscribe((searchText: string) => {
      this.searchText = searchText;
    });
    this.cars = this.sharedService.getCars();
  }
  onChange(car: any, isChecked: boolean) {
    if (isChecked) {
      this.compareValue = false;
      car.checked = true;
      this.currentBoxes++;
    } else {
      car.checked = false;
      this.currentBoxes--;
      if (this.currentBoxes === 0) {
        this.compareValue = true;
      }
    }
  }
  checkCurrentBoxes(car) {
    if (car.checked && this.currentBoxes === 2 || this.currentBoxes !== 2) {
      return false;
    } else {
      return true;
    }
  }
}
