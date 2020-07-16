import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { IssueComponent } from './issue/issue.component';
import { IssueNumberPipe } from './pipes/issue-number.pipe';
import { LabelBackgroundPipe } from './pipes/label-background.pipe';
import { IssueUserUsernamePipe } from './pipes/issue-user.pipe';
import { IssueTimeAgoPipe } from './pipes/issue-time-ago.pipe';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IssuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class IssuesRoutingModule {
  static components = [IssuesComponent, IssueComponent, IssueNumberPipe, LabelBackgroundPipe, IssueUserUsernamePipe, IssueTimeAgoPipe];
  static providers = [];
}
