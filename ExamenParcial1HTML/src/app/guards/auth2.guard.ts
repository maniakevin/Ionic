import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth} from "@angular/fire/auth"
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  constructor(private router:Router,private AfAuth:AngularFireAuth){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AfAuth.authState.pipe(map(auth =>{
        if(!isNullOrUndefined(auth)){
          this.router.navigateByUrl('/tabs/pantalla-inicio')
          return false;
        }else{
          return true;
        }
      }
      ));
  }
  
}
