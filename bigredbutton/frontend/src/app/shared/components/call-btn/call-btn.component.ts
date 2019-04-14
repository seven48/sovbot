import { Component } from '@angular/core';
import { CallService } from '@app/core/services';

@Component({
  selector: 'app-call-btn',
  templateUrl: 'call-btn.component.html',
  styleUrls: ['call-btn.component.scss'],
})
export class CallBtnComponent {
  constructor(
    private readonly _callSvc: CallService,
  ) {}

  public call() {
    this._callSvc.call();
  }
}
