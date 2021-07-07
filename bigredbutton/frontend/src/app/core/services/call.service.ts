import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallService {

  constructor(private readonly _http: HttpClient) { }

  public call(): Observable<any> {
    return this._http.get(`${env.apiUrl}/call`);
  }
}
