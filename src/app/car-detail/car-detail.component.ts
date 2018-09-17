import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  id: number;
  car: Car;
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.car = this.sharedService.getCar(this.id);
        console.log(this.sharedService.getCar(this.id));
      }
    );
  }

}
