import { SharedService } from './../../shared.service';
import { Car } from './../../models/car.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  carParams = [];
  constructor(private sharedService: SharedService,
              private router: Router) {
   }

  ngOnInit() {
    this.subscription = this.sharedService.textChanged
    .subscribe((searchText: string) => {
      this.searchText = searchText;
    });
    this.cars = this.sharedService.getCars();
  }
  onChange(car: Car, isChecked: boolean) {
    if (isChecked) {
      this.compareValue = false;
      this.currentBoxes++;
      this.carParams.push(car);
    } else {
      this.currentBoxes--;
      this.carParams = this.carParams.filter(function(items) {
        return items.id !== car.id;
      });
      if (this.currentBoxes === 0) {
        this.compareValue = true;
      }
    }
  }
  checkCurrentBoxes(car) {
    if (car.value && this.currentBoxes === 2 || this.currentBoxes !== 2) {
      return false;
    } else {
      return true;
    }
  }
  onCompare() {
    this.router.navigate(['/comparar'], { queryParams: { firstId: this.carParams[0].id, secondId: this.carParams[1].id } });
  }
}
