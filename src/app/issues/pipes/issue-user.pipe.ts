import { Pipe, PipeTransform } from "@angular/core";
import { Issue } from "../../models/issue.interface";

@Pipe({name: 'IssueUserUsername'})
export class IssueUserUsernamePipe implements PipeTransform {
  transform(issue: Issue): string {
    return issue.user.login;
  }
}