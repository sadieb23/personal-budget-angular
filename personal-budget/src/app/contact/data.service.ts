// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;

  constructor(private http: HttpClient) { }

  fetchDataIfNeeded(): Observable<any> {
    if (!this.data) {
      return this.http.get<any>('backend_url').pipe(
        tap((responseData: any) => {
          this.data = responseData;
        })
      );
    } else {
      return of(this.data);
    }
  }

  getData(): any {
    return this.data;
  }
}
