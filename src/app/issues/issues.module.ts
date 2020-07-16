import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IssuesRoutingModule } from './issues-routing.module';

@NgModule({
  imports: [CommonModule,
    FormsModule, 
    IssuesRoutingModule, ReactiveFormsModule],
  declarations: [...IssuesRoutingModule.components],
  providers: [...IssuesRoutingModule.providers],
})
export class IssuesModule { }
