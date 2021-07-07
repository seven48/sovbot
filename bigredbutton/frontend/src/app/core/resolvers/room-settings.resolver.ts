import { RoomSettingsService } from '@app/core/services';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Resolve } from '@angular/router';
import { IRoomSettings } from '@app/lib/models';


@Injectable()
export class RoomSettingsResolver implements Resolve<IRoomSettings> {
  constructor(private readonly _roomSettingsSvc: RoomSettingsService) {}

  resolve(): Observable<IRoomSettings> {
    return this._roomSettingsSvc.settings;
  }
}