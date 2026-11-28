// Entorno de PRODUCCIÓN (build por defecto, el que se usa al desplegar).
//
// 👉 Al desplegar, cambia SOLO esta `apiUrl`:
//   - Si el frontend y el backend se sirven desde el mismo dominio
//     (recomendado, detrás de un proxy inverso): deja la ruta relativa '/triplan'.
//   - Si el backend está en otro dominio: pon la URL absoluta, p. ej.
//     'https://api.tudominio.com/triplan' (asegúrate de habilitar CORS en el backend).
export const environment = {
  production: true,
  apiUrl: '/triplan',
};
