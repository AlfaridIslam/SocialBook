// authentication.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
    { path: 'login', component: UserLoginComponent },
    { path: 'header', component: HeaderComponent, canActivate: [AuthenticationGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];
  

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.checkAuthentication(); // Call your authentication logic

    if (isAuthenticated) {
      return true; // User is authenticated, allow access
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: '/header' }, // Pass the destination URL as a query parameter
      });
      return false;
    }
  }

  // Implement your authentication logic here
  checkAuthentication(): boolean {
    // Assuming signupUsers is an array of objects with properties userName, email, and password
    // Assuming loginObj has properties userName, email, and password
    const isUserExist = this.signupUsers.find(
      (user) => user.email === this.loginObj.email && user.password === this.loginObj.password
    );

    return !!isUserExist;
  }
}
