import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorldComponent} from './modules/statistic/world/world.component';
import {CountriesComponent} from './modules/statistic/countries/countries.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WorldComponent},
  {path: 'countries/:country', component: CountriesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}