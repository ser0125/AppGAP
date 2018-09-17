import { Car } from './../models/car.model';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.css']
})
export class CompareCarsComponent implements OnInit {
cars = [];

  constructor(private sharedService: SharedService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.cars.push(this.sharedService.getCar(params.firstId));
        this.cars.push(this.sharedService.getCar(params.secondId));
      }
    );
  }

}
