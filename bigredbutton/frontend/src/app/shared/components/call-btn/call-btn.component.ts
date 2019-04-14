import { Component } from '@angular/core';
import { CallService } from '@app/core/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-call-btn',
  templateUrl: 'call-btn.component.html',
  styleUrls: ['call-btn.component.scss'],
})
export class CallBtnComponent {
  constructor(
    private readonly _callSvc: CallService,
    private readonly _toastrSvc: ToastrService,
  ) {}

  public call() {
    this._callSvc.call().subscribe((res) => {
      this._toastrSvc.success(res.status);
    })
  }
}
