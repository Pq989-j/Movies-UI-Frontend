# 🎬 MovieApp - React + Tailwind + Auth System

## 📌 Descripción del proyecto

MovieApp es una aplicación frontend desarrollada con React que simula una plataforma de películas. Incluye sistema de autenticación con JWT, consumo de una API local mediante fetch, y gestión de estado global mediante Context API.

La aplicación permite:

- Registro y login de usuarios
- Persistencia de sesión mediante token
- Visualización de perfil de usuario
- Navegación entre páginas públicas y privadas
- UI dinámica según estado de autenticación
- Diseño moderno con TailwindCSS

---

## ⚙️ Tecnologías utilizadas

- React
- React Router DOM
- Context API
- TailwindCSS
- Fetch API
- Vite
- JWT (autenticación con backend local)

---

## 📁 Estructura del proyecto

```
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── SubmitButton.jsx
│
├── context/
│ └── AuthContext.jsx
│
├── hooks/
│ └── useAuth.js
│
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Profile.jsx
│ ├── Movies.jsx
│ ├── About.jsx
│
├── services/
│ └── api.js
│
├── App.jsx
└── main.jsx
```

---

## 🔐 Sistema de autenticación

La autenticación se gestiona mediante Context API.

### 📌 Estado global

- `user` → información del usuario
- `token` → JWT almacenado en localStorage

### 📌 Funciones principales

- `login(email, password)`
- `loadProfile(token)`
- `logOut()`

---

## 🔄 Flujo de autenticación

1. El usuario hace login
2. El backend devuelve un token JWT
3. El token se guarda en localStorage
4. Se ejecuta loadProfile(token)
5. Se obtiene el usuario desde la API
6. Se guarda en el estado global (user)
7. La UI se actualiza automáticamente

---

## 🌐 API local

La aplicación consume una API local mediante fetch.

### Endpoints utilizados:



POST /auth/login
POST /auth/register
GET  /auth/profile


## 🔑 Ejemplo de login
fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
});
👤 Profile request
fetch(`${API}/auth/profile`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

## 🧠 Context API (AuthContext)

El AuthContext maneja el estado global de autenticación.

📌 Valores expuestos
user
token
login
logOut
loadProfile

## 🎨 UI con TailwindCSS

La aplicación utiliza Tailwind para estilos modernos y responsive.

Características:
Dark mode (bg-gray-950)
Navbar dinámico
Formularios estilizados
Botones con hover effects
Diseño centrado con flexbox


## 🧭 Sistema de navegación

Se usa React Router DOM.

Rutas principales:

/          → Home
/login     → Login
/register  → Register
/profile   → Profile
/movies    → Movies
/about     → About

## 🔐 Navbar dinámico

El Navbar cambia según el estado del usuario:

Si NO hay usuario:
Login
Register
Si hay usuario:
Avatar 👤
Nombre
Logout
📦 Componentes principales
Navbar
Navegación global
UI dinámica según autenticación
SubmitButton
Botón reutilizable

## 📄 Páginas
Home

Landing page tipo plataforma de streaming.

Login

Formulario de acceso.

Register

Formulario de registro.

Profile

Datos del usuario autenticado.

Movies

Listado de películas (en desarrollo o expansión).

About

## Información del proyecto.

🔁 Flujo completo

Login → token → loadProfile → setUser → Navbar cambia → Profile visible

🚀 Características destacadas
✔ Autenticación JWT funcional
✔ Persistencia de sesión
✔ Navbar dinámico
✔ UI responsive con Tailwind
✔ Arquitectura por componentes
✔ Consumo de API local con fetch