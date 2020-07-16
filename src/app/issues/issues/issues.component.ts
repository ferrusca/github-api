import { Component, OnInit, OnDestroy } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Issue } from '../../models/issue.interface';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  searchBarPlaceholder = 'Search all issues';
  issues$: Observable<Issue[]>;
  searchTerm$ = new Subject<string>();

  constructor(
    private issuesService: IssuesService,
  ) { }

  ngOnInit(): void {
    this.issues$ = this.searchTerm$.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        return this.issuesService.search(searchTerm);
      })
    );
  }

  search(event): void {
    const { target: { value: searchTerm } } = event;
    this.searchTerm$.next(searchTerm);
  }

}
