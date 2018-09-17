import { SharedService } from './../../shared.service';
import { Cars } from './../../models/car-data';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  resultados: number;
  branches: string[];
  searchText: string;
  constructor(private sharedService: SharedService) {
    this.resultados = Cars.cars.length;
    this.branches = Cars.branches;
   }

  ngOnInit() {
  }

  onChange(newValue) {
    this.sharedService.changeText(newValue);
  }

}
