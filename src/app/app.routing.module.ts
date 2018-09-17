import { CarDetailComponent } from './car-detail/car-detail.component';
import { PrincipalComponent } from './principal/principal.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const appRoutes: Routes = [
    { path: '', redirectTo: '/listacarros', pathMatch: 'full' },
    { path: 'listacarros', component: PrincipalComponent },
    { path: 'listacarros/:id', component: CarDetailComponent},
    { path: '**', redirectTo: '/listacarros'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
