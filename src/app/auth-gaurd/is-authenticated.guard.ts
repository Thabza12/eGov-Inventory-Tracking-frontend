import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { AuthServiceService } from '../services/auth-service.service';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class isAuthenticatedGuard implements CanActivate{

  constructor(public _authService: AuthService, 
              public _router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this._authService.authStatus.pipe(
      tap(authSatus => {
        if (!authSatus) {
          this._router.navigate(['/login'])
        }
      })
    )
  }
};
 