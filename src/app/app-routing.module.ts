import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './scenes/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './scenes/dashboard/dashboard.module#DashboardModule' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
