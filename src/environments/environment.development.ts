// Entorno de DESARROLLO (ng serve / build development).
//
// Llamamos directamente al backend local (puerto 8086). Funciona en el
// navegador porque el backend tiene CORS habilitado para http://localhost:4200.
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8086/triplan',
};
