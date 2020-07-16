import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'issues'
  },
  {
    path: 'issues',
    loadChildren: () => import('./issues/issues.module').then(m => m.IssuesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
