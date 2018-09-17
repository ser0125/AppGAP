import { CompareCarsComponent } from './compare-cars/compare-cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { PrincipalComponent } from './principal/principal.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const appRoutes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: PrincipalComponent},
    { path: 'inicio/:id', component: CarDetailComponent},
    { path: 'comparar', component: CompareCarsComponent},
    { path: '**', redirectTo: '/inicio'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
