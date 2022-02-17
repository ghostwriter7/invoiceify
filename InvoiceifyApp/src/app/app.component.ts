import { Component } from '@angular/core';
import { ThemeService } from './core/services/ThemeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public isCollapsed = false;

  constructor(
    public readonly themeService: ThemeService
  ) {}

  public onThemeToggle(): void {
    this.themeService.toggleTheme().then();
    this.themeService.saveFavoriteTheme();
  }
}
