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
  constructor(private sharedService: SharedService) {
   }

  ngOnInit() {
    this.subscription = this.sharedService.textChanged
    .subscribe((searchText: string) => {
      this.searchText = searchText;
    });
    this.cars = this.sharedService.getCars();
  }

}
