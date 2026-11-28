// Modelos que coinciden con los DTOs del backend (OpenAPI de Triplan).

/** UsuarioDto del backend. */
export interface UsuarioDto {
  /** Nombre visible del usuario. */
  nombre?: string;
  email: string;
  /** Solo se ENVÍA al backend (writeOnly en el OpenAPI); nunca llega en las respuestas. */
  password?: string;
  avatar?: string;
  /** Fecha ISO 8601 (date-time). */
  fechaRegistro?: string;
}

/** LoginRequestDto del backend. */
export interface LoginRequestDto {
  email: string;
  password: string;
}
