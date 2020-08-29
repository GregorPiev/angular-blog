import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type typeAlert = 'success' | 'warning' | 'danger';
export interface Alert {
  type: typeAlert;
  text: string;
}

@Injectable()

export class AlertService {
  public alert$ = new Subject<Alert>();

  success(text: string) {
    this.alert$.next({ type: 'success', text });
  }
  warning(text: string) {
    this.alert$.next({ type: 'success', text });
  }
  danger(text: string) {
    this.alert$.next({ type: 'danger', text });
  }
}
