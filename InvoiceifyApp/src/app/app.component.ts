import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/ThemeService';
import { AuthService } from './pages/auth/core/services';
import { EventsService } from './core/services/EventsService';
import { IMenu } from './core/interfaces';
import { menuItems } from '../environments/menuItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public isCollapsed = false;
  public menu: IMenu[] = menuItems;

  constructor(
    public readonly themeService: ThemeService,
    public readonly authService: AuthService,
    public readonly eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  public onThemeToggle(): void {
    this.themeService.toggleTheme().then();
    this.themeService.saveFavoriteTheme();
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
