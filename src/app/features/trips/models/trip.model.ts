import { UsuarioDto } from '../../../shared/models/usuario.model';

/** Viaje del backend (OpenAPI de Triplan). */
export interface Viaje {
  /**
   * Identificador que el backend usa en las rutas (/viaje/{idViaje}).
   * No aparece en el schema del OpenAPI, por eso es opcional aquí.
   */
  id?: string;
  nombre: string;
  destino: string;
  /** Fecha ISO 8601 (date-time). */
  fechaInicio: string;
  /** Fecha ISO 8601 (date-time). */
  fechaFin: string;
  /** Double > 0 según el backend. */
  presupuesto?: number;
  creador?: UsuarioDto;
}
