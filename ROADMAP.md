
# ROADMAP.md

# PROJECT PLANNER — Roadmap de desarrollo

**Objetivo:** construir un MVP funcional y desplegado.  
**Estimación inicial:** 200–250 horas.  
**Estado:** en desarrollo.

---

## Fase 1 — Preparación del entorno

**Estimación: 12–15 horas**

- Crear repositorio y estructura inicial. x
- Configurar React, TypeScript y Vite. x
- Configurar Python y entorno virtual. x
- Crear backend con FastAPI. x
- Instalar y organizar dependencias. x
- Configurar variables de entorno. x
- Preparar Git y GitHub Actions. x
- Comprobar que frontend y backend arrancan correctamente. x

**Resultado:** estructura inicial funcionando y preparada para desarrollar.

## Fase 2 — Base de datos y persistencia

**Estimación: 16–20 horas**

- Preparar PostgreSQL local. x
- Configurar SQLAlchemy. x
- Configurar Alembic y primeras migraciones. x
- Diseñar los modelos iniciales. x
- Implementar la conexión entre backend y base de datos. x
- Crear operaciones básicas de persistencia. x
- Comprobar el funcionamiento mediante tests. x

**Resultado:** backend conectado a PostgreSQL y capaz de guardar y recuperar información.

## Fase 3 — Acceso y ciclo de vida de proyectos

**Estimación: 14–18 horas**

- Implementar creación de proyectos. x
- Generar claves privadas seguras. x
- Almacenar las claves mediante hash. x
- Implementar recuperación mediante clave. x
- Proteger los intentos de recuperación frente a fuerza bruta. x
- Implementar eliminación de proyectos y datos asociados. x
- Validar los principales casos de error. x

**Resultado:** el usuario puede crear, recuperar y eliminar sus proyectos sin registro tradicional.

## Fase 4 — Estructura inicial del frontend

**Estimación: 12–16 horas**

- Diseñar la estructura visual general. x
- Configurar los estilos globales, la paleta de colores y las tipografías. x
- Implementar la navegación principal y los componentes de botones. x
- Crear la estructura visual de la landing: Hero, franja de valores y etapas de planificación. x
- Completar el footer de la landing.
- Implementar creación y recuperación de proyectos.
- Crear el espacio de trabajo principal.
- Preparar el panel de planificación y el panel del agente.
- Incorporar navegación entre las cinco secciones.

**Resultado:** interfaz visual de bienvenida implementada y estructura principal del workspace preparada para continuar su desarrollo.

## Fase 5 — Planificación estructurada

**Estimación: 20–25 horas**

- Implementar la estructura de las cinco fases.
- Crear endpoints para consultar y actualizar información.
- Persistir los datos de cada apartado.
- Implementar el registro de decisiones aprobadas.
- Preparar validaciones de datos.
- Comprobar que la información se conserva correctamente.

**Resultado:** el proyecto puede almacenar y consultar su planificación sin depender todavía de la IA.

## Fase 6 — Integración del agente IA

**Estimación: 28–34 horas**

- Configurar Gemini API.
- Integrar Pydantic AI.
- Diseñar las instrucciones principales del agente.
- Implementar el flujo de conversación.
- Crear la herramienta `get_project_information`.
- Crear la herramienta `create_change_proposal`.
- Conectar el agente con los datos del proyecto.
- Gestionar errores, límites y respuestas del proveedor.
- Realizar pruebas iterativas del comportamiento.

**Resultado:** agente conversacional capaz de asesorar y consultar información del proyecto.

## Fase 7 — Historial y gestión del contexto

**Estimación: 18–22 horas**

- Guardar los mensajes en PostgreSQL.
- Recuperar el historial de conversación.
- Preparar el resumen contextual.
- Implementar su actualización periódica.
- Combinar información estructurada, resumen y mensajes recientes.
- Comprobar la continuidad de conversaciones entre sesiones.

**Resultado:** el agente conserva el contexto relevante sin enviar toda la conversación en cada petición.

## Fase 8 — Propuestas y autorización de cambios

**Estimación: 16–20 horas**

- Persistir las propuestas de modificación.
- Mostrar al usuario qué quiere cambiar el agente y por qué.
- Solicitar autorización explícita.
- Reconocer la aceptación o el rechazo de una propuesta concreta.
- Aplicar cambios únicamente después de una aceptación inequívoca.
- Actualizar la planificación y el registro de decisiones.
- Probar que las respuestas ambiguas nunca producen modificaciones.

**Resultado:** el agente puede proponer cambios, pero el usuario conserva siempre el control.

## Fase 9 — Integración completa del frontend

**Estimación: 25–32 horas**

- Implementar el chat completo.
- Mostrar y recuperar conversaciones anteriores.
- Conectar las cinco secciones con el backend.
- Permitir consultar y actualizar la planificación.
- Integrar la visualización de propuestas.
- Reflejar los cambios autorizados.
- Mejorar navegación, estados y mensajes de error.
- Adaptar la interfaz a diferentes tamaños de pantalla.

**Resultado:** aplicación funcional de principio a fin desde la interfaz.

## Fase 10 — Testing y revisión general

**Estimación: 18–22 horas**

- Ampliar tests con Pytest.
- Ampliar tests con Vitest.
- Probar los flujos principales.
- Comprobar persistencia y recuperación.
- Revisar seguridad y validación de entradas.
- Comprobar límites y errores de Gemini.
- Corregir errores encontrados.
- Verificar el funcionamiento de GitHub Actions.

**Resultado:** MVP probado y con sus funcionalidades principales verificadas.

## Fase 11 — Despliegue

**Estimación: 10–14 horas**

- Preparar PostgreSQL en Neon.
- Configurar el backend en Render.
- Desplegar el frontend.
- Configurar variables de entorno y CORS.
- Comprobar conexión entre servicios.
- Verificar persistencia y funcionamiento en producción.

**Resultado:** PROJECT PLANNER desplegado y accesible públicamente.

## Fase 12 — Exportación PDF

**Estimación: 8–12 horas**

- Elegir una librería Python adecuada.
- Diseñar la estructura del documento.
- Generar el PDF a partir de la planificación.
- Incluir las fases y decisiones relevantes.
- Comprobar legibilidad y formato.

**Resultado:** usuario puede descargar un resumen presentable de su proyecto.

La exportación PDF es deseable, pero no debe bloquear la finalización del MVP si el tiempo se complica.

---

## Fuera del MVP

Se dejan para posibles ampliaciones:

- Exportación JSON.
- Importación de proyectos.
- Búsqueda externa de información.
- Gestión avanzada de propuestas.
- Colaboración entre usuarios.
- Multiagentes.
- Generación o ejecución automática de código.

## Criterio de finalización

Consideraremos terminado el MVP cuando:

- El usuario pueda crear y recuperar proyectos.
- Pueda planificar sus proyectos mediante conversación.
- El agente consulte la información estructurada y conserve contexto.
- Las cinco fases funcionen correctamente.
- Las modificaciones requieran autorización explícita.
- Los datos persistan entre sesiones.
- Se puedan eliminar proyectos.
- La aplicación esté desplegada.
- Las funcionalidades principales tengan pruebas automatizadas.

El PDF se intentará incluir si el tiempo lo permite.

---

**Este roadmap es una guía de desarrollo, no un contrato de horas. Las estimaciones podrán ajustarse cuando aparezcan dificultades técnicas reales. No se añadirán funcionalidades por el mero hecho de tener tiempo disponible.**
