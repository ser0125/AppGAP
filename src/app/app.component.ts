import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng5-breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private breadcrumbService: BreadcrumbService) {
  this.breadcrumbService.addFriendlyNameForRouteRegex('\\/comparar(\\?.*)?', 'Comparar');
  this.breadcrumbService.hideRoute('/inicio');
  }
}
