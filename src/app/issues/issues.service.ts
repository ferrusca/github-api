import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Issue } from '../models/issue.interface';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  getIssuesUrl = 'https://api.github.com/search/issues';

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getIssues(): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(this.getIssuesUrl);
  }

  search(query: string): Observable<Issue[]>{
    return this.httpClient.get<Issue[]>(this.getIssuesUrl, {
      params: { q: `repo:facebook/react+${query}` }
    }).pipe(map((data: any) => data.items));
  }


}
