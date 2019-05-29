import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService) { }

  canActivate(): Observable<boolean> | boolean {
    return this.auth.isAdmin().pipe(map(isAdmin => {
      if (isAdmin) return true;

      this.router.navigate(['/']);
      return false;
    }));
  }
}
