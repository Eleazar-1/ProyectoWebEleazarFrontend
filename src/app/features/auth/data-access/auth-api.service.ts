import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthUser } from '../../../shared/models/user.model';
import { UsuarioDto } from '../../../shared/models/usuario.model';
import { UsuarioApiService } from './usuario-api.service';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly usuarioApi = inject(UsuarioApiService);

  /**
   * Login: POST /usuario/login (no devuelve cuerpo) y, si va bien,
   * recupera el usuario con GET /usuario/{email} para rellenar la sesión.
   */
  login(email: string, password: string): Observable<AuthUser> {
    return this.usuarioApi.login({ email, password }).pipe(
      switchMap(() => this.usuarioApi.getByEmail(email)),
      map(toAuthUser),
    );
  }

  /**
   * Registro: POST /usuario y devuelve los datos básicos para la sesión.
   */
  register(name: string, email: string, password: string): Observable<AuthUser> {
    const nuevo: UsuarioDto = { nombre: name, email, password };
    return this.usuarioApi.crear(nuevo).pipe(map(() => ({ name, email })));
  }
}

/** Convierte el UsuarioDto del backend en el modelo de sesión del frontend. */
function toAuthUser(dto: UsuarioDto): AuthUser {
  return { name: dto.nombre?.trim() || nameFromEmail(dto.email), email: dto.email };
}

function nameFromEmail(email: string): string {
  return email
    .split('@')[0]
    .replace(/[._-]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
