import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Mode } from '../models/mode';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private statusMode: BehaviorSubject<Mode>;
  private readonly defaultMode: Mode;
  private readonly keyMode: string;

  constructor() {
    this.keyMode = 'mode';
    this.defaultMode = Mode.Anonymous;
    this.statusMode = new BehaviorSubject(this.defaultMode);

    this.init();
  }

  status(): Observable<Mode> {
    return this.statusMode.asObservable();
  }

  isAdmin(): Observable<boolean> {
    return this.statusMode.pipe(map(mode => mode === Mode.Admin));
  }

  changeStatus(mode: Mode) {
    this.updateStatus(mode);
  }

  private updateStatus(mode: Mode = this.defaultMode) {
    localStorage.setItem(this.keyMode, mode);
    this.statusMode.next(mode);
  }

  private init() {
    const mode = localStorage.getItem(this.keyMode);
    if (!mode) return this.updateStatus();

    const toSend = ((mode as Mode) === Mode.Admin) ? Mode.Admin : Mode.Anonymous;
    this.statusMode.next(toSend);
  }

}
