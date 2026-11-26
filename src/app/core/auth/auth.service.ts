import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthUser } from '../../shared/models/user.model';

const STORAGE_KEY = 'triplyUser';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly userSignal = signal<AuthUser | null>(this.readSession());

  readonly user = this.userSignal.asReadonly();
  readonly isAuthenticated = computed(() => this.userSignal() !== null);

  setSession(user: AuthUser): void {
    this.userSignal.set(user);
    if (this.isBrowser) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  }

  logout(): void {
    this.userSignal.set(null);
    if (this.isBrowser) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  private readSession(): AuthUser | null {
    if (!this.isBrowser) {
      return null;
    }
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  }
}
