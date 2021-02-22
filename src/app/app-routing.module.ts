import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorldComponent} from './modules/statistic/world/world.component';
import {CountriesComponent} from './modules/statistic/countries/countries.component';
import {WorldResolver} from './resolvers/world.resolver';
import {CountryResolver} from './resolvers/country.resolver';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WorldComponent, resolve: {statistics: WorldResolver}},
  {path: 'countries/:country', component: CountriesComponent, resolve: {statistics: CountryResolver}}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
