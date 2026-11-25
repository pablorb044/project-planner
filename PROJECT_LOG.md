# PROJECT_LOG.md

# PROJECT PLANNER — Development Log

## v0.1 — 17/11/2026

### Estado inicial
Planificación conceptual completada. Desarrollo todavía no iniciado.

### Hitos alcanzados
- Definición del propósito y funcionamiento de PROJECT PLANNER.
- Diseño de las cinco fases de planificación.
- Definición del comportamiento y las capacidades del agente IA.
- Decisión sobre persistencia del historial, planificación y contexto.
- Selección y aprobación del stack tecnológico.
- Definición del MVP, sus prioridades y funcionalidades excluidas.
- Diseño del sistema de acceso mediante clave privada.

### Documentación
- `PROJECT_SPEC.md` — Primera versión creada (v0.1).
- `PROJECT_LOG.md` — Primera versión creada (v0.1).

### Próximo paso
Elaborar el roadmap de implementación y comenzar el desarrollo.

---

## Sesión 1 — 18/11/2026

### Hitos alcanzados
- Inicialización del repositorio y configuración del frontend con React, TypeScript y Vite.
- Preparación del backend con Python y FastAPI.
- Configuración del entorno virtual y las dependencias iniciales.
- Configuración de GitHub Actions para comprobar frontend y backend.
- Preparación de PostgreSQL 17 mediante Docker Compose, con volumen persistente.
- Instalación de SQLAlchemy, Psycopg y python-dotenv.
- Conexión entre Python y PostgreSQL verificada correctamente.

### Commits realizados
- `7584678` — Inicialización del frontend y backend.
- `1bc63a1` — Configuración inicial de GitHub Actions.
- `feat: configure PostgreSQL and database connection` — Configuración de PostgreSQL y conexión desde Python.

### Estado al finalizar la sesión
- Fase 1 — Preparación del entorno: tareas principales completadas. Pendiente verificar la ejecución de GitHub Actions en GitHub.
- Fase 2 — Base de datos y persistencia: PostgreSQL y conexión desde Python configurados. Pendiente SQLAlchemy declarativo, Alembic y modelos de datos.

### Próximo paso
Configurar Alembic y comenzar a definir los modelos de datos de la aplicación.


---

## Sesión 2 — 19/11/2026

### Hitos alcanzados
- Configuración de SQLAlchemy y gestión de sesiones de base de datos.
- Configuración de Alembic y creación de la migración inicial.
- Diseño e implementación de los seis modelos de datos y sus relaciones.
- Creación de las seis tablas en PostgreSQL.
- Configuración de las relaciones y eliminación en cascada.
- Implementación de la creación de proyectos con sus cinco secciones iniciales.
- Generación de claves privadas seguras y almacenamiento mediante hash SHA-256.
- Implementación de la recuperación de proyectos mediante clave privada.
- Implementación de la autenticación mediante la dependencia `get_current_project`.
- Implementación de la consulta del proyecto autenticado.
- Implementación de la eliminación de proyectos.
- Verificación de la eliminación en cascada de los datos relacionados en PostgreSQL.
- Comprobación de los principales casos de autenticación: credenciales válidas, ausentes e incorrectas.

### Commits realizados
- `28ed8fb` — Implementación de los modelos iniciales y migración.
- `eb2990d` — Gestión de sesiones de base de datos.

### Estado al finalizar la sesión
- Fase 1 — Preparación del entorno: tareas principales completadas. Pendiente verificar la ejecución de GitHub Actions en GitHub.
- Fase 2 — Base de datos y persistencia: SQLAlchemy, Alembic, modelos, migraciones y operaciones básicas completados. Pendientes los tests automatizados.
- Fase 3 — Acceso y ciclo de vida de proyectos: creación, recuperación, autenticación y eliminación implementadas. Pendientes protección frente a fuerza bruta, validaciones adicionales y pruebas automatizadas.

### Próximo paso
Preparar una base de datos independiente para tests e implementar las primeras pruebas automatizadas con Pytest.

---

## Sesión 3 — 22/11/2026

### Hitos alcanzados
- Preparación de una base de datos independiente para las pruebas automatizadas.
- Configuración de Pytest y creación de fixtures compartidas para los tests.
- Implementación de pruebas para la conexión a la base de datos y la creación de tablas.
- Implementación de pruebas para la creación, recuperación y eliminación de proyectos.
- Comprobación de la autenticación, validación de claves y eliminación en cascada.
- Verificación de la protección frente a intentos repetidos de acceso.
- Incorporación de límites de solicitudes mediante SlowAPI en los endpoints de acceso, consulta y eliminación de proyectos.
- Ejecución satisfactoria de los tests del backend: 17 pruebas superadas.
- Limpieza de los componentes y estilos iniciales de la plantilla de Vite.
- Verificación del frontend mediante compilación y análisis estático, ambos sin errores.

### Commits realizados
- `test: add backend tests and rate limiting` — Tests automatizados del backend y protección frente a solicitudes excesivas.

### Estado al finalizar la sesión
- Fase 1 — Preparación del entorno: completada.
- Fase 2 — Base de datos y persistencia: completada.
- Fase 3 — Acceso y ciclo de vida de proyectos: completada.
- Fase 4 — Estructura inicial del frontend: iniciada. Plantilla inicial de Vite limpiada. Pendiente desarrollar la interfaz de la aplicación.

### Próximo paso
Comenzar el diseño de la estructura visual general del frontend y desarrollar la pantalla de bienvenida.

## Sesión 4 — 25/11/2026

### Hitos alcanzados
- Configuración de Tailwind CSS v4 mediante el plugin de Vite.
- Instalación de Lucide React para los iconos de la interfaz.
- Definición de los estilos globales, paleta de colores y tipografías.
- Implementación de la navegación principal y los componentes de botones.
- Desarrollo del Hero de la landing, con ilustración, presentación y tarjetas de acceso.
- Creación de `HeroValueStrip` con cuatro elementos visuales.
- Creación de `PlanningPipeline` con las cinco etapas de planificación del proyecto.
- Ajustes de colores, fondos, espaciado y distribución responsive.
- Definición de la distribución final de la landing, manteniendo el flujo natural de desplazamiento sin forzar una altura de pantalla completa.

### Estado al finalizar la sesión
- Fase 1 — Preparación del entorno: completada.
- Fase 2 — Base de datos y persistencia: completada.
- Fase 3 — Acceso y ciclo de vida de proyectos: completada.
- Fase 4 — Estructura e interfaz inicial del frontend: en desarrollo. Landing visual implementada. Pendiente continuar con la interfaz del workspace.

### Próximo paso
Comenzar el desarrollo visual del workspace: navegación lateral, panel de planificación y panel de conversación con el agente IA.

*Este documento recoge los principales hitos del camino de desarrollo, no cada cambio o tarea individual.*