import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './header/header.component'; // Assuming HeaderComponent is the destination component

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'header', component: HeaderComponent }, // Add this route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
