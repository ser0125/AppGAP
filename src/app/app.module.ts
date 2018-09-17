import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './principal/aside/aside.component';
import { CarListComponent } from './principal/car-list/car-list.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { PrincipalComponent } from './principal/principal.component';
import { CarDetailComponent } from './principal/car-list/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    CarListComponent,
    SearchfilterPipe,
    PrincipalComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
