import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { TimeHistoryComponent } from './time-history/time-history.component';

const routes: Routes = [
  { path: '', component: TimeSheetComponent },
  { path: 'history', component: TimeHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }
