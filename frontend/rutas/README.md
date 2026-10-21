# 🌎 Rutas — Social Travel App

**Rutas** es una aplicación web desarrollada con React que combina funciones de una red social con la posibilidad de descubrir contenido visual, buscar animes, personalizar un perfil e interactuar con publicaciones.

## Descripción

El proyecto está desarrollado con React y Vite. Actualmente utiliza MockAPI como API REST para gestionar publicaciones, elementos guardados y datos del perfil. También integra AniList para buscar animes y mostrar contenido relacionado.

La aplicación incorpora funcionalidades de interacción con publicaciones, navegación entre secciones y personalización del perfil. Algunas características, como la galería personal, todavía utilizan almacenamiento local en el navegador.

## Funcionalidades actuales

### 👤 Perfil de usuario

- Editar el nombre del usuario.
- Cambiar la imagen de perfil.
- Actualizar la descripción del perfil.
- Cambiar la imagen del banner.
- Guardar y recuperar los datos del perfil mediante endpoints de la API.
- Utilizar los datos obtenidos del endpoint para mostrar el nombre y la imagen de perfil en los diferentes componentes de la aplicación.

La gestión del perfil ya no depende de `useContext` para compartir el nombre y la imagen de perfil entre los distintos campos de la página. Estos datos se gestionan mediante las solicitudes a los endpoints correspondientes.

### 📝 Publicaciones

- Consultar publicaciones desde MockAPI.
- Crear publicaciones con texto e imagen.
- Validar el contenido y la URL de la imagen antes de crear una publicación.
- Abrir imágenes para visualizar el contenido de una publicación.
- Expandir textos largos.
- Eliminar publicaciones.
- Dar y quitar likes mediante solicitudes `PUT` que actualizan los datos de la publicación.
- Guardar y quitar publicaciones de la sección de guardados.
- Actualizar el estado de las publicaciones guardadas y reflejar los cambios en la interfaz.

Las URLs de imagen admiten las extensiones `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`, `.bmp` y `.svg`. Se permiten parámetros en la URL después de la extensión.

### 🔖 Publicaciones guardadas

- Consultar las publicaciones guardadas desde la sección correspondiente.
- Guardar publicaciones y quitarlas de la lista.
- Actualizar los datos mediante los endpoints de la API.
- Mostrar un pequeño indicador rojo en la esquina superior derecha de una publicación cuando está guardada.
- Acceder directamente a la publicación guardada al hacer clic en el indicador.
- Sincronizar la acción de guardar o quitar de guardados entre las distintas secciones de la aplicación.

La sección de guardados está disponible en la ruta `/guardados`.

### 🔎 Búsqueda de animes

- Buscar animes mediante la API de AniList.
- Mostrar resultados reales de búsqueda en lugar de contenido de ejemplo.
- Presentar los resultados en grupos de tres elementos.
- Facilitar el descubrimiento de contenido visual relacionado con anime.

La búsqueda utiliza la API GraphQL de AniList.

### 🖼️ Galería personal

- Incorporar una sección de galería para mostrar imágenes.
- Guardar las imágenes y los datos correspondientes utilizando `localStorage`.

**Limitación actual:** la galería se almacena localmente en el navegador. Por tanto, sus datos no se sincronizan con un servidor ni entre diferentes dispositivos.

## API y almacenamiento

La aplicación utiliza actualmente MockAPI para las operaciones de datos que ya están integradas.

| Recurso | Operaciones | Datos |
|---|---|---|
| `/publicaciones` | GET, POST, PUT y DELETE por ID | Texto, imagen y datos de interacción de las publicaciones |
| `/guardados` | GET, POST y DELETE por ID | Identificadores de las publicaciones guardadas |
| Endpoints del perfil | Consultas y actualizaciones según la implementación | Nombre, descripción, imagen de perfil y banner |
| `localStorage` | Lectura y escritura local | Datos de la galería personal |
| AniList GraphQL | Consultas de búsqueda | Información y resultados de animes |

Los métodos y las rutas concretas de los endpoints del perfil dependen de la configuración actual de MockAPI.

### Almacenamiento y persistencia

- **MockAPI:** almacena los datos de las publicaciones, los elementos guardados y el perfil mediante los endpoints configurados.
- **localStorage:** conserva la información de la galería en el navegador.
- **AniList:** proporciona los resultados de búsqueda de animes mediante una API externa.

## Tecnologías

- React
- JavaScript
- Vite
- HTML5 y CSS3
- API REST y MockAPI
- GraphQL y AniList
- `localStorage`
- Git y GitHub

## Ejecución local

Desde la carpeta `frontend/rutas`, ejecuta:

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

### Funcionalidades pendientes

- Implementar comentarios en las publicaciones.
- Incorporar el registro de usuarios y el inicio de sesión.
- Crear perfiles individuales asociados a cada usuario.
- Implementar autenticación y autorización.
- Gestionar las publicaciones y los elementos guardados de acuerdo con el usuario autenticado.
- Evaluar la migración de la galería a un almacenamiento persistente en el servidor.

### Backend y arquitectura

- Sustituir MockAPI por un backend propio.
- Crear una API que gestione usuarios, perfiles, publicaciones, comentarios, likes y elementos guardados.
- Incorporar una base de datos persistente.
- Añadir validación y autorización en el servidor.
- Gestionar de forma segura las sesiones y las credenciales.
- Preparar la aplicación para su despliegue en producción.

## Estado del proyecto

Rutas se encuentra en desarrollo. Ya cuenta con funcionalidades de perfil persistente mediante endpoints, creación y gestión de publicaciones, likes, elementos guardados, búsqueda de animes y una galería local.

El siguiente paso es completar las interacciones sociales y desarrollar un backend propio que permita gestionar usuarios, autenticación y datos de manera centralizada.

LINK: https://moonlit-buttercream-377e10.netlify.app/