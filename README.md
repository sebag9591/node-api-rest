# node-api-rest
# API REST del Curso de NODEJS

## Descripción

API REST para gestión de productos, desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias

```bash
npm install
```

3. Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para el entorno donde será desplegado

4. Ejecutar en modo desarrollo:
```bash
npm run dev
```

## Documentación de la API


### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
  { "id": 1, "name": "Termo", "price": 25 },
  { "id": 2, "name": "Mate", "price": 15 },
  { "id": 3, "name": "Bombilla", "price": 5 }
]
```

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Retorna la información de un determinado producto cuya ID es la que se pasa como parámetro.
- **Parámetros:**
  - `id` (requerido): ID del producto.
- **Ejemplo de uso:** `/products/1`
- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Termo", "price": 25 }
```

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
{ "name": "Producto de ejemplo", "price": 123 }
```

- **Respuesta ejemplo:**

```json
{ "id": 6, "name": "Producto de ejemplo", "price": 123 }
```

### Actualizar un producto (PUT)

- **PUT** `/products/:id`
- **Descripción:** Actualiza un producto existente, cuya ID es la que se pasa como parámetro.
- **Parámetros:**
  - `id` (requerido): ID del producto a actualizar.

- **Ejemplo de uso:** `/products/1`
- **Body (JSON):**

```json
{ "name": "Producto Actualizado", "price": 500 }
```

- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Producto Actualizado", "price": 500 }
```

### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=termo`
- **Respuesta ejemplo:**

```json
[{ "id": 1, "name": "Termo", "price": 25 }]
```

---
---
## Autenticación

Esta API utiliza **JWT (JSON Web Tokens)** para proteger las rutas de creación, edición y eliminación de productos.

### Login de usuario

- **POST** `/auth/login`
- **Descripción:** Permite autenticar un usuario y obtener un token JWT.
- **Body (JSON):**

```json
{
  "email": "usuario@talentotech.com.ar",
  "password": "strongPass123"
}
```
- **Respuesta ejemplo:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

> **Usuario de prueba disponible:**
>
> - **Email:** `usuario@talentotech.com.ar`
> - **Contraseña:** `strongPass123`

## Rutas protegidas

Las siguientes rutas requieren incluir un **token JWT válido** en el header de la petición.

- Crear un producto: `POST /products`
- Actualizar un producto: `PUT /products/:id`
- Eliminar un producto: `DELETE /products/:id`

### Header requerido

```http
Authorization: Bearer <token>
```

## Tecnologías utilizadas

- Node.js
- Express.js
- ES6 Modules
