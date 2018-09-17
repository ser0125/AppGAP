import { SharedService } from './../../shared.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  results: number;
  searchText: string;
  constructor(private sharedService: SharedService) {
   }

  ngOnInit() {
    this.results = this.sharedService.getCars().length;
  }

  onChange(newValue) {
    this.sharedService.changeText(newValue);
  }

}
