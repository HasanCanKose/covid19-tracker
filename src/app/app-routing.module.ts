import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorldComponent} from './modules/statistic/world/world.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WorldComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
