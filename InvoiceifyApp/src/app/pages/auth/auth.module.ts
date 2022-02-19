import { NgModule } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInUpComponent } from './pages/sign-in-up/sign-in-up.component';

@NgModule({
declarations: [
  SignInUpComponent
],
  imports: [
    UiModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
})
export class AuthModule {

}
