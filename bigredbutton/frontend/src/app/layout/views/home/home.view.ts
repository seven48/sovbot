import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRoomSettings, IMember } from '@app/lib/models';

@Component({
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
})
export class HomeView implements OnInit {
  public settings: IRoomSettings;
  public members: IMember[];

  constructor(
    private readonly _route: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.settings = this._route.snapshot.data.roomSettings;
    this.members = this._route.snapshot.data.members;
  }

}
