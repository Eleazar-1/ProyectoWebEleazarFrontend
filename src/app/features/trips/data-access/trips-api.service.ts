import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiEndpoints } from '../../../core/http/api.config';
import { Viaje } from '../models/trip.model';
import { Participante } from '../models/participant.model';

/** Acceso al viajes-controller del backend. */
@Injectable({ providedIn: 'root' })
export class TripsApiService {
  private readonly http = inject(HttpClient);

  /** GET /viaje */
  getAll(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(ApiEndpoints.viajes);
  }

  /** GET /viaje/{email} — viajes creados por ese usuario. */
  getByCreador(email: string): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(ApiEndpoints.viajesPorCreador(email));
  }

  /** GET /usuario/{email}/viajes — viajes en los que participa el usuario. */
  getByUsuario(email: string): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(ApiEndpoints.viajesDeUsuario(email));
  }

  /** GET /viaje/consulta?nombre=&user= */
  buscar(nombre: string, user: string): Observable<Viaje> {
    const params = new HttpParams().set('nombre', nombre).set('user', user);
    return this.http.get<Viaje>(ApiEndpoints.viajeConsulta, { params });
  }

  /** POST /viaje */
  crear(viaje: Viaje): Observable<unknown> {
    return this.http.post(ApiEndpoints.viajes, viaje);
  }

  /** PUT /viaje/{idViaje} */
  actualizar(idViaje: string, viaje: Viaje): Observable<unknown> {
    return this.http.put(ApiEndpoints.viaje(idViaje), viaje);
  }

  /** DELETE /viaje/{idViaje} */
  eliminar(idViaje: string): Observable<unknown> {
    return this.http.delete(ApiEndpoints.viaje(idViaje));
  }

  /** GET /viaje/{idViaje}/{idUsuario}/participantes */
  getParticipantes(idViaje: string, idUsuario: string): Observable<Participante[]> {
    return this.http.get<Participante[]>(ApiEndpoints.participantes(idViaje, idUsuario));
  }

  /** POST /viaje/{idViaje}/{idUsuario}/participantes — añade por lista de emails. */
  addParticipantes(idViaje: string, idUsuario: string, emails: string[]): Observable<unknown> {
    return this.http.post(ApiEndpoints.participantes(idViaje, idUsuario), emails);
  }

  /** DELETE /viaje/{idViaje}/{idUsuario}/participantes/{usermail} */
  removeParticipante(idViaje: string, idUsuario: string, usermail: string): Observable<unknown> {
    return this.http.delete(ApiEndpoints.participante(idViaje, idUsuario, usermail));
  }
}
