import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {LoginGuard} from './guards/login.guard';

const redirectToLogIn = () => redirectUnauthorizedTo(['logIn']);

const routes: Routes = [
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  { path: 'portal', canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectToLogIn},
    loadChildren: () => import('./pages/portal/portal.module').then(m => m.HomePageModule)},
  { path: 'logIn', canLoad: [LoginGuard], loadChildren: () => import('./pages/logIn/logIn.module').then(m => m.LoginPageModule)},
  { path: 'signUp', canLoad: [LoginGuard], loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
