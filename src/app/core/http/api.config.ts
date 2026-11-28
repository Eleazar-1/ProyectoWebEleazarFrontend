import { environment } from '../../../environments/environment';

/** URL base del API; cambia automáticamente según el environment activo. */
export const API_BASE_URL = environment.apiUrl;

/**
 * Único lugar donde viven las rutas del backend (según el OpenAPI de Triplan).
 * Si una ruta cambia en el backend, se toca aquí y en ningún otro sitio.
 *
 * Los valores con `@` u otros caracteres se escapan con encodeURIComponent
 * para que el email se pueda usar sin problema en la ruta.
 */
export const ApiEndpoints = {
  // --- Usuarios (usuario-controller) ---
  /** GET lista / POST crear */
  usuarios: `${API_BASE_URL}/usuario`,
  /** GET por email / PUT actualizar / DELETE eliminar */
  usuario: (email: string) => `${API_BASE_URL}/usuario/${encodeURIComponent(email)}`,
  /** POST login */
  login: `${API_BASE_URL}/usuario/login`,
  /** GET viajes de un usuario */
  viajesDeUsuario: (email: string) => `${API_BASE_URL}/usuario/${encodeURIComponent(email)}/viajes`,

  // --- Viajes (viajes-controller) ---
  /** GET todos / POST crear */
  viajes: `${API_BASE_URL}/viaje`,
  /** PUT actualizar / DELETE eliminar (por idViaje) */
  viaje: (idViaje: string) => `${API_BASE_URL}/viaje/${encodeURIComponent(idViaje)}`,
  /** GET viajes por creador (mismo patrón /viaje/{x}, pero aquí x = email) */
  viajesPorCreador: (email: string) => `${API_BASE_URL}/viaje/${encodeURIComponent(email)}`,
  /** GET búsqueda por nombre+user (?nombre=&user=) */
  viajeConsulta: `${API_BASE_URL}/viaje/consulta`,
  /** GET participantes / POST añadir participantes */
  participantes: (idViaje: string, idUsuario: string) =>
    `${API_BASE_URL}/viaje/${encodeURIComponent(idViaje)}/${encodeURIComponent(idUsuario)}/participantes`,
  /** DELETE quitar un participante concreto */
  participante: (idViaje: string, idUsuario: string, usermail: string) =>
    `${API_BASE_URL}/viaje/${encodeURIComponent(idViaje)}/${encodeURIComponent(idUsuario)}/participantes/${encodeURIComponent(usermail)}`,
} as const;
