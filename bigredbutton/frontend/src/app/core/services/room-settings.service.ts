import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from '@env';
import { IRoomSettings } from '@app/lib/models';

@Injectable({
  providedIn: 'root',
})
export class RoomSettingsService {

  constructor(private readonly _http: HttpClient) { }

  public get settings(): Observable<IRoomSettings> {
    return this._http.get<IRoomSettings>(`${env.apiUrl}/room-settings`);
  }

}
