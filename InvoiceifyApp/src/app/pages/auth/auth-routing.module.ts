import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInUpComponent } from './pages/sign-in-up/sign-in-up.component';

const routes: Routes = [
  { path: 'login', component: SignInUpComponent },
  { path: 'signup', component: SignInUpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
