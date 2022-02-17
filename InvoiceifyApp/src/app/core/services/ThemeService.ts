import { Injectable } from '@angular/core';
import { ThemeTypes } from '../enums';
import { StorageService } from './StorageService';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeToggleSubject$ = new BehaviorSubject<boolean>(false);
  public themeToggle$ = this.themeToggleSubject$.asObservable();

  public currentTheme = ThemeTypes.default;

  constructor(
    private readonly _storageService: StorageService
  ) {}

  private reverseTheme(theme: string): ThemeTypes {
    return theme === ThemeTypes.dark ? ThemeTypes.default : ThemeTypes.dark;
  }

  private loadStylesheet(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  public loadTheme(firstLoad = true): Promise<Event> {
    let theme = this.currentTheme;
    if (firstLoad) {
      const savedTheme = this._storageService.getItem('[invoiceify] theme');
      theme = savedTheme ? JSON.parse(savedTheme) : this.currentTheme;
      const state = theme === 'dark';

      this.currentTheme = theme;
      this.themeToggleSubject$.next(state);
      document.documentElement.classList.add(theme);
    }

    return new Promise<Event>((resolve, reject) => {
      this.loadStylesheet(`${theme}.css`, theme).then(
        (e) => {
          if (!firstLoad) {
            document.documentElement.classList.add(theme);
          }
          this.removeUnusedTheme(this.reverseTheme(theme));
          resolve(e);
        },
        (e) => reject(e)
      );
    });
  }

  private removeUnusedTheme(theme: ThemeTypes): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  public toggleTheme(): Promise<Event> {
    this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }

  public saveFavoriteTheme(): void {
   this._storageService.setItem('[invoiceify] theme', this.currentTheme);
  }
}
