import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: 'time', loadChildren: './scenes/time/time.module#TimeModule' },
  { path: 'about', loadChildren: './scenes/about/about.module#AboutModule' },
  { path: '', redirectTo: '/time', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
