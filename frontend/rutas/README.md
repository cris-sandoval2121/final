# 🌎 Social Travel App

Aplicación web de estilo red social para compartir publicaciones, personalizar un perfil y descubrir contenido visual.

## Descripción

El proyecto está desarrollado con React y Vite. MockAPI proporciona almacenamiento temporal para publicaciones y elementos guardados. Los datos del perfil todavía se mantienen únicamente en el estado de React.

## Funcionalidades actuales

### Perfil ff

- Abrir formularios emergentes para editar el nombre, la imagen de perfil, la descripción y la imagen del banner
- Validar que las URLs de imagen usen HTTP o HTTPS y terminen en una extensión de imagen admitida.
- Los cambios de perfil se conservan mientras la aplicación está abierta, pero todavía no se guardan en el servidor ni persisten al recargar la página.

### Publicaciones

- Consultar publicaciones desde MockAPI y crear publicaciones con texto e imagen.
- Validar el texto de la publicación y la URL de la imagen antes de enviarla.
- Abrir una imagen para verla junto con el texto de su publicación, expandir textos largos y eliminar publicaciones.
- Guardar o quitar una publicación de la lista de guardados.

Las extensiones admitidas para las URLs de imagen son `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`, `.bmp` y `.svg`. Se permiten parámetros en la URL después de la extensión.

### Publicaciones guardadas

La sección **Guardados** ya está implementada y disponible desde la navegación en la ruta `/guardados`. Muestra las publicaciones guardadas y obtiene los datos de MockAPI. Guardar o quitar publicaciones también actualiza el endpoint de guardados.

### Búsqueda y contenido externo

- La ruta `/Buscar` muestra la interfaz de búsqueda; sus resultados todavía son de ejemplo y la búsqueda real está pendiente.
- La página principal muestra una galería de anime populares obtenida desde la API GraphQL de AniList. Esta galería no es la futura galería de imágenes del usuario.

## API y almacenamiento

MockAPI se usa actualmente para estas operaciones:

| Recurso | Operaciones actuales | Datos |
|---|---|---|
| `/publicaciones` | GET, POST y DELETE por ID | Texto e imagen de cada publicación |
| `/guardados` | GET, POST y DELETE por ID | Identificadores de las publicaciones guardadas |

El perfil aún no cuenta con endpoints: nombre, descripción, imagen de perfil e imagen del banner se administran en `ProfileContext` en el cliente.

## Tecnologías

- React y JavaScript
- Vite
- HTML y CSS
- MockAPI (API REST)
- AniList GraphQL

## Ejecución local

Desde la carpeta `frontend/rutas`:

```bash
npm install
npm run dev
```

Otros comandos disponibles:

```bash
npm run lint
npm run build
```

## Próximas mejoras

- Agregar endpoints de perfil para guardar y recuperar el nombre, la descripción, la imagen de perfil y la imagen del banner.
- Crear una sección independiente de galería de imágenes.
- Implementar la búsqueda real de publicaciones.
- Incorporar comentarios e interacciones de likes.
- Reemplazar MockAPI por un backend propio y agregar autenticación.