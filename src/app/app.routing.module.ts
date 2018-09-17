import { CarDetailComponent } from './principal/car-list/car-detail/car-detail.component';
import { PrincipalComponent } from './principal/principal.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const appRoutes: Routes = [
    { path: '', redirectTo: '/listacarros', pathMatch: 'full' },
    { path: 'listacarros', component: PrincipalComponent },
    { path: 'detalle/:id', component: CarDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
