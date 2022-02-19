import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { IUser } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from '../../../../core/services/StorageService';
import { EventsService } from '../../../../core/services/EventsService';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject$ = new ReplaySubject<IUser | null>(1);
  public user$ = this.userSubject$.asObservable();
  public isLoggedIn$ = this.user$.pipe(map(user => !!user));

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
    private readonly _storageService: StorageService,
    private readonly _eventsService: EventsService,
    private readonly _notifyService: NzNotificationService
  ) {}

  public login(email: string, password: string): void {
    this._eventsService.startLoading();

    setTimeout(() => {
      this._eventsService.stopLoading();
      this.userSubject$.next({ id: '123455'});
      this._router.navigate(['/welcome']);
      this._notifyService.success('Welcome back!', 'You\'re logged in!');
    }, 1000);
  }

  public logout(): void {
    this.userSubject$.next(null);
    this._router.navigate(['/auth/login']);
  }

  public autoLogin(): void {
    const user = this._storageService.getItem('[invoiceify] auth');

    this.userSubject$.next(user ? user : null);
  }

}
