import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiEndpoints } from '../../../core/http/api.config';
import { LoginRequestDto, UsuarioDto } from '../../../shared/models/usuario.model';

/** Acceso al usuario-controller del backend. */
@Injectable({ providedIn: 'root' })
export class UsuarioApiService {
  private readonly http = inject(HttpClient);

  /** GET /usuario */
  getAll(): Observable<UsuarioDto[]> {
    return this.http.get<UsuarioDto[]>(ApiEndpoints.usuarios);
  }

  /** GET /usuario/{email} */
  getByEmail(email: string): Observable<UsuarioDto> {
    return this.http.get<UsuarioDto>(ApiEndpoints.usuario(email));
  }

  /** POST /usuario */
  crear(usuario: UsuarioDto): Observable<unknown> {
    return this.http.post(ApiEndpoints.usuarios, usuario);
  }

  /** PUT /usuario/{email} */
  actualizar(email: string, usuario: UsuarioDto): Observable<unknown> {
    return this.http.put(ApiEndpoints.usuario(email), usuario);
  }

  /** DELETE /usuario/{email} */
  eliminar(email: string): Observable<unknown> {
    return this.http.delete(ApiEndpoints.usuario(email));
  }

  /** POST /usuario/login (el backend responde 200 sin cuerpo). */
  login(credenciales: LoginRequestDto): Observable<void> {
    return this.http.post<void>(ApiEndpoints.login, credenciales);
  }
}
