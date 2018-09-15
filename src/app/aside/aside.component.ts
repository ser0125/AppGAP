import { Cars } from './../models/car-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  resultados: number;
  branches: string[];
  constructor() {
    this.resultados = Cars.cars.length;
    this.branches = Cars.branches;
   }

  ngOnInit() {
  }

  filtrarResultados() {

  }

}
