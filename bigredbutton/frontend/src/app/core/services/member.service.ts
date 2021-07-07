import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from '@env';
import { IMember } from '@app/lib/models';

@Injectable({
  providedIn: 'root',
})
export class MemberService {

  constructor(private readonly _http: HttpClient) { }

  public get list(): Observable<IMember[]> {
    return this._http.get<IMember[]>(`${env.apiUrl}/members`);
  }

}
