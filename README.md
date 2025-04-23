# Administrador de Productos

Plataforma para la gestión de productos con operaciones CRUD, validación de campos, documentación de API y pruebas automáticas.

# Demostración 
[![Título del Video](https://img.youtube.com/vi/tzvNR_OfsMQ/0.jpg)](https://www.youtube.com/watch?v=tzvNR_OfsMQ)

[Dar Click Aquí para ver el video demostrativo](https://www.youtube.com/watch?v=tzvNR_OfsMQ)


## Funcionalidades

- Validación de campos del formulario y del backend.
- Inserción, modificación y eliminación en base de datos.
- CRUD completo (Crear, Leer, Actualizar, Eliminar).
- Documentación automática de la API REST con Swagger.
- Pruebas automatizadas con Jest.
- Separación entre frontend y backend (cliente-servidor).

## Tecnologías usadas

### Frontend

- **React** con **TypeScript**
- **React Router DOM**
- **Axios**
- **Valibot** (validación)
- **TailwindCSS**
- **Vite** (bundler)

### Backend

- **Node.js** con **TypeScript**
- **Express**
- **Sequelize** y **Sequelize TypeScript**
- **PostgreSQL**
- **Express Validator**
- **Morgan**
- **JWT** (gestión planeada o futura)
- **Nodemailer** (configurable si se requiere notificaciones por correo)

### Documentación y pruebas

- **Swagger** con `swagger-jsdoc` y `swagger-ui-express`
- **Jest** para pruebas unitarias y de integración
- **Supertest** para pruebas de endpoints

# Levantar El FrontEnd

* Duplicar archivo .env-template
* Renombrar archivo a .env
* Insertar la cadena de VITE_API_URL la cual es la URL del backend.


* Correr el comando
```
npm run dev
```


# Levantar Backend

* Duplicar archivo .env-template
* Renombrar archivo a .env
* Insertar la cadena de conexión de Postgree en DATABASE_URL
* Insertar la cadena de VITE_API_URL la cual es la URL del backend

* Correr el comando
```
npm run dev
```

---

> Autor: **Jean Carlos Ortiz**  



