import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.scss']
})
export class SignInUpComponent implements OnInit {
  public mode: 'LOGIN' | 'SIGNUP' = 'LOGIN';
  public form!: FormGroup;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      'email': this._fb.control(null, [Validators.required, Validators.email]),
      'password': this._fb.control(null, Validators.required)
    });

    this._route.url.subscribe(segments => {
      this.mode = segments[0].path === 'login' ? 'LOGIN' : 'SIGNUP';
    });
  }

  public onSubmit(): void {
    const { email, password } = this.form.value;

    this._authService.login(email, password);
  }

}
