import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthUser } from '../../../shared/models/user.model';

// Demo: sin backend todavía. Cualquier correo válido y contraseña de 4+ caracteres sirven.
@Injectable({ providedIn: 'root' })
export class AuthApiService {
  login(email: string, _password: string): Observable<AuthUser> {
    return of({ name: nameFromEmail(email), email });
  }

  register(name: string, email: string, _password: string): Observable<AuthUser> {
    return of({ name, email });
  }
}

function nameFromEmail(email: string): string {
  return email
    .split('@')[0]
    .replace(/[._-]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
