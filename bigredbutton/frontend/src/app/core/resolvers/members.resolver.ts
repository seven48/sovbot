import { MemberService } from './../services/member.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Resolve } from '@angular/router';
import { IMember } from '@app/lib/models';


@Injectable()
export class MembersResolver implements Resolve<IMember[]> {
  constructor(private readonly _memberSvc: MemberService) {}

  resolve(): Observable<IMember[]> {
    return this._memberSvc.list;
  }
}