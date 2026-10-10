# 🌎 Social Travel App

Aplicación web de estilo red social enfocada en compartir publicaciones, personalizar perfiles y descubrir contenido visual relacionado con viajes, lugares y experiencias.

## 📌 Descripción

La aplicación permite al usuario personalizar su perfil, crear publicaciones con texto e imágenes, interactuar con ellas y guardar contenido de interés.

El proyecto está desarrollado con **React** y utiliza **MockAPI** como servicio temporal para gestionar y almacenar los datos mediante diferentes endpoints.

## ✨ Funcionalidades

### 👤 Perfil de usuario

El usuario puede personalizar su perfil mediante formularios desplegados en pop-ups:

- Imagen de banner.
- Imagen de perfil.
- Nombre de usuario.
- Descripción personal.
- Imágenes de tableros relacionadas con sus gustos e intereses.

### 📝 Publicaciones

El usuario puede crear publicaciones mediante un formulario desplegado en un pop-up.

Cada publicación puede incluir:

- Texto o descripción.
- Imagen.
- Likes.
- Estado de guardado.
- Opción para eliminar la publicación.
- Sección de comentarios.

Las publicaciones se muestran en el feed principal y permiten al usuario interactuar con ellas.

### 💾 Publicaciones guardadas

Las publicaciones marcadas como guardadas se almacenan en una sección independiente.

El usuario podrá consultar posteriormente las publicaciones que haya guardado.

## 🔌 API y almacenamiento

Actualmente, la aplicación utiliza **MockAPI** para simular el backend y gestionar los datos mediante una API REST.

Se utilizan tres endpoints principales:

| Endpoint | Datos gestionados |
|---|---|
| **Perfil** | Banner, imagen de perfil, nombre, descripción y tableros |
| **Publicaciones** | Imagen, texto, likes y estado de guardado |
| **Guardados** | Publicaciones guardadas por el usuario |

Las operaciones de creación, actualización y eliminación de contenido se realizan mediante solicitudes HTTP a la API.

### 🔮 Backend futuro

MockAPI se utiliza actualmente como una solución temporal para simular la comunicación con un backend.

Como parte de la evolución del proyecto, se planea reemplazar MockAPI por un **backend propio**, manteniendo la estructura de la API y trasladando la gestión de usuarios, publicaciones, comentarios y contenido guardado a un servidor propio.


## 💬 Comentarios   z

Se incorporará una sección de comentarios que se desplegará debajo de cada publicación, permitiendo visualizar e interactuar con los comentarios asociados a cada post.

## 🌐 API de terceros

Como parte de los requisitos del **Sprint 20**, el proyecto incorpora una API de terceros.

Actualmente, esta integración se encuentra ubicada en el footer como implementación inicial. Como mejora futura, se planea trasladarla a una sección independiente dentro del menú de navegación para mostrar y renderizar el contenido proporcionado por dicha API.

## 🛠️ Tecnologías

- React
- JavaScript
- HTML5
- CSS3
- MockAPI
- REST API
- Git / GitHub
- Vite

## 🚀 Próximas mejoras

- Implementación completa de comentarios.
- Integración de la API de terceros en una sección independiente.
- Reemplazo de MockAPI por un backend propio.
- Gestión de usuarios y autenticación.
- Mejoras de diseño responsive.
- Mejoras de experiencia de usuario.
- Optimización de la gestión de publicaciones y contenido guardado.

#enlace https://l.facebook.com/l.php?u=https%3A%2F%2Fmoonlit-buttercream-377e10.netlify.app%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgVicmlkETE4ZXZmaVNqdDVQUVpQa3FQc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHh1-FLIafK8Sd8pzNLuotcJak5f6skv2mio7mEd4joyG4wuB1z-ci4P2ryxG_aem_GmxTGmPgnmW9k_kwh-7HbA&h=AUD0PV9M2NEElhTqKJuZlo2QmmV55OJ78cqOCsnjTM83iLq4TWpjO7N2w1HY8Y968B530vpXDdjI4YXB4EeIKTz_ihR1Ajh9vLfEQ2fLlnw-ckHSD5N2N1j_z_5sPYMhwth9Yg