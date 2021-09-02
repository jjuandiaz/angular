import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "src/app/services/login_auth/login.service";

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private loginService: LoginService, private route:Router) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginService.isAuth()) {
            return true;
        } else {
             this.route.navigate(['login']);
            return false;
        }
    }
}