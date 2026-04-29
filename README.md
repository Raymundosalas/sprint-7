# sprint-7# README.md

# Sistema Web para la Gestión de Citas en Consultorios

## Sprint 7 – Login y Panel Administrativo

---

## 📌 Descripción

Este proyecto consiste en el desarrollo de un **Sistema Web para la Gestión de Citas en Consultorios Pequeños**, elaborado bajo la metodología ágil **Scrum**.

Durante el **Sprint 7** se implementó el módulo de **autenticación de usuarios** y un **panel administrativo**, mejorando la seguridad del sistema y la administración general del proyecto.

---

##  Objetivo del Sprint 7

Desarrollar funcionalidades que permitan:

* Inicio de sesión seguro
* Protección de rutas privadas
* Panel administrativo principal
* Navegación interna del sistema
* Cierre de sesión

---

##  Tecnologías utilizadas

### Backend

* Node.js
* Express.js
* MySQL
* bcryptjs
* JWT (jsonwebtoken)
* dotenv
* cors

### Frontend

* Vue.js 3
* Vue Router
* Vite
* JavaScript

### Control de versiones

* Git
* GitHub

---

##  Estructura del proyecto

```text id="a5f3tc"
sistema-citas/
│── backend/
│   ├── server.js
│   ├── database.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── pacientes.js
│   │   └── citas.js
│   └── .env
│
└── frontend/
    └── src/
        ├── views/
        │   ├── Login.vue
        │   ├── Dashboard.vue
        │   ├── Pacientes.vue
        │   └── Citas.vue
        └── router/
            └── index.js
```

---

## ⚙ Instalación del proyecto

## 1️ Clonar repositorio

```bash id="7db7bn"
git clone https://github.com/usuario/sistema-citas-consultorio.git
```

---

## 2️ Backend

```bash id="3c18eg"
cd backend
npm install
node server.js
```

Servidor:

```text id="1z3pdg"
http://localhost:3000
```

---

## 3️ Frontend

```bash id="7kw0hy"
cd frontend
npm install
npm run dev
```

Aplicación:

```text id="j5v9me"
http://localhost:5173
```

---

#  Acceso al sistema

### Usuario:

```text id="dxzsg8"
admin
```

### Contraseña:

```text id="bs7l80"
123456
```

---

#  Funcionalidades implementadas en Sprint 7

##  Autenticación

* Inicio de sesión con usuario y contraseña
* Validación de credenciales
* Generación de token JWT
* Cierre de sesión seguro

---

##  Panel Administrativo

* Menú principal
* Acceso a pacientes
* Acceso a citas
* Navegación organizada

---

##  Seguridad

* Protección de rutas privadas
* Sesión almacenada en navegador
* Restricción de acceso sin login

---

#  Resultados del Sprint 7

Durante este Sprint se logró:

* Mejorar la seguridad del sistema
* Centralizar la administración
* Profesionalizar la interfaz
* Preparar el sistema para la entrega final

---

#  Próximos pasos (Sprint 8)

Se propone desarrollar:

* Dashboard con estadísticas
* Reportes PDF y Excel
* Roles de usuario
* Diseño responsivo
* Respaldo automático

---

#  Equipo de desarrollo

* Brayan Raymundo Salas Rodríguez
* Axel Mauricio Barraza Cárdenas
* Jesús Alejandro Sainz Maldonado

---

#  Metodología usada

El proyecto fue desarrollado con **Scrum**, utilizando:

* Product Backlog
* Sprint Planning
* Daily Scrum
* Sprint Review
* Sprint Retrospective

---

#  Estado actual del proyecto

 Sistema funcional
 Login implementado
 Dashboard activo
 CRUD Pacientes
 CRUD Citas
 Base de datos MySQL

---

#  Licencia

Proyecto desarrollado con fines académicos para la materia **Proyecto VII**.


