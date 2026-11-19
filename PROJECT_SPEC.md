PROJECT PLANNER

Especificación del proyecto — PROJECT_SPEC.md

Versión: 0.1
Estado: Planificación conceptual completada
Última actualización: 17/11/2026

1. Visión general

1.1. Descripción

PROJECT PLANNER es una aplicación web que permite a los usuarios transformar una idea de software en un proyecto definido, analizado y planificado mediante la colaboración con un agente de inteligencia artificial.

El usuario aporta su idea y trabaja junto al agente mediante una conversación. El agente le ayuda a desarrollar progresivamente los distintos aspectos del proyecto, identificar problemas, evaluar alternativas y tomar decisiones fundamentadas.

La información obtenida durante las conversaciones se organiza en una estructura de planificación persistente que el usuario puede consultar y modificar con autorización.

PROJECT PLANNER no pretende sustituir el criterio del usuario ni tomar decisiones autónomas. Su objetivo es actuar como un asesor técnico que facilite el proceso de planificación.

1.2. Problema que aborda

Planificar un proyecto de software requiere considerar numerosos aspectos: definición del problema, viabilidad, recursos, tecnologías, arquitectura, alcance y organización del desarrollo.

Una persona puede tener una idea clara de lo que quiere construir, pero desconocer buena parte de las decisiones necesarias para convertirla en un proyecto viable.

Las herramientas conversacionales genéricas permiten obtener asesoramiento, pero no necesariamente mantienen una planificación estructurada y persistente que facilite su consulta y evolución.

PROJECT PLANNER busca combinar las ventajas de la conversación con IA con una estructura de planificación organizada.

1.3. Solución propuesta

Una aplicación web con dos áreas principales de interacción:

Panel de planificación: muestra las cinco secciones del proyecto y su información estructurada.

Panel del agente IA: permite conversar con el agente, recibir asesoramiento, resolver dudas y preparar modificaciones.

El usuario construye su planificación progresivamente mediante la conversación y la revisión de la información estructurada.

1.4. Usuarios potenciales

La aplicación está orientada principalmente a personas que tienen una idea de proyecto de software y necesitan ayuda para definirla y planificarla.

Puede resultar útil para:

Desarrolladores principiantes.

Desarrolladores independientes.

Estudiantes de informática.

Personas que quieren desarrollar un proyecto personal.

Pequeños equipos que necesitan estructurar una idea antes de comenzar.

No se limita a proyectos comerciales ni exige que el usuario tenga conocimientos técnicos avanzados.

1.5. Objetivos

Facilitar la definición y planificación de proyectos de software.

Ofrecer asesoramiento técnico mediante IA.

Detectar riesgos, contradicciones y carencias durante la planificación.

Organizar la información en una estructura persistente.

Mantener el contexto entre diferentes sesiones.

Permitir que el usuario conserve el control de las decisiones.

Facilitar la consulta y exportación de la planificación.

1.6. Principios fundamentales

El usuario conserva el control sobre el proyecto.

El agente asesora, no decide autónomamente.

La planificación estructurada es la fuente de verdad del proyecto.

La conversación debe tener en cuenta la información existente.

No se debe inventar información para completar apartados.

Las estimaciones deben distinguirse de los hechos conocidos.

La interfaz debe reducir al mínimo las barreras de entrada.

La aplicación debe evitar funcionalidades innecesarias y complejidad prematura.

2. Estudio de viabilidad

2.1. Recursos disponibles

Proyecto desarrollado individualmente.

Los recursos principales son:

Tiempo de desarrollo propio.

Ordenador personal para desarrollo y pruebas.

GitHub para control de versiones.

Servicios gratuitos para despliegue y persistencia.

API gratuita de un proveedor de modelos de lenguaje.

2.2. Presupuesto

Presupuesto inicial: 0 €.

El desarrollo debe realizarse utilizando tecnologías, librerías y servicios gratuitos.

La integración de IA dependerá de las cuotas gratuitas disponibles. No se presupone disponibilidad ilimitada de consultas ni de tokens.

Si un proveedor modifica sus condiciones o impone restricciones, la aplicación deberá adaptarse a ellas sin incorporar servicios de pago como requisito del MVP.

2.3. Viabilidad técnica

El proyecto utilizará tecnologías conocidas y herramientas adecuadas para desarrollar una aplicación web con persistencia e integración de IA.

La integración del agente constituye uno de los principales retos técnicos, especialmente en:

Gestión del contexto.

Persistencia de conversaciones.

Recuperación de información relevante.

Generación de respuestas estructuradas.

Aplicación controlada de modificaciones.

Gestión de errores y límites del proveedor.

2.4. Viabilidad temporal

Objetivo inicial para el MVP:

Entre 200 y 250 horas de desarrollo.

Entre 30 y 50 horas adicionales, opcionales, para mejoras y pulido.

Estas cifras son estimaciones de planificación, no requisitos obligatorios.

Si el producto alcanza un estado funcional y satisfactorio antes de consumir todas las horas previstas, podrá considerarse terminado.

2.5. Dificultad y complejidad

Los principales retos se concentran en:

Desarrollo de un backend con Python y FastAPI.

Integración de un modelo de lenguaje.

Construcción del agente con Pydantic AI.

Gestión del contexto y persistencia.

Diseño de una planificación estructurada y flexible.

Seguridad del acceso mediante claves privadas.

El desarrollo se realizará progresivamente, evitando introducir infraestructura o abstracciones que no estén justificadas por necesidades reales.

2.6. Riesgos y limitaciones

Las cuotas gratuitas de IA pueden limitar el uso.

Las respuestas del modelo pueden contener errores o información desactualizada.

El modelo puede tener limitaciones de razonamiento y contexto.

Los servicios gratuitos de hosting pueden tener restricciones de rendimiento o disponibilidad.

La pérdida de la clave privada impedirá recuperar el acceso al proyecto.

La información enviada al proveedor de IA estará sujeta a las condiciones y políticas de dicho proveedor.

El agente deberá reconocer sus limitaciones y comunicar la incertidumbre cuando no disponga de información suficiente.

3. Diseño técnico

3.1. Stack tecnológico

Componente

Tecnología

Frontend

React + TypeScript + Vite

Backend

Python + FastAPI

Base de datos

PostgreSQL

Hosting de base de datos

Neon

ORM

SQLAlchemy

Migraciones

Alembic

Proveedor de IA

Gemini API

Framework de agentes

Pydantic AI

Testing backend

Pytest

Testing frontend

Vitest

Despliegue

Render + Neon

CI/CD

GitHub Actions

Las dependencias concretas y las versiones se determinarán durante la implementación.

3.2. Arquitectura del sistema

La aplicación seguirá una arquitectura cliente-servidor.

Frontend:

Interfaz de usuario.

Conversación con el agente.

Visualización de la planificación.

Gestión de propuestas y confirmaciones.

Acceso a las funciones de exportación.

Backend:

API de la aplicación.

Gestión de proyectos y claves privadas.

Persistencia de mensajes y planificación.

Orquestación del agente.

Gestión del contexto.

Validación y aplicación de modificaciones.

Integración con el proveedor de IA.

Base de datos:

Almacenamiento persistente de proyectos.

Historial de conversaciones.

Planificación estructurada.

Resúmenes contextuales.

Propuestas y decisiones relacionadas.

El backend será responsable de controlar las operaciones y validar las modificaciones realizadas sobre los datos.

No se utilizará una arquitectura de microservicios.

3.3. Base de datos y almacenamiento

PostgreSQL será el sistema principal de persistencia.

SQLAlchemy se utilizará para interactuar con la base de datos y Alembic para gestionar las migraciones.

La información de cada proyecto deberá mantenerse separada de la correspondiente a otros proyectos.

La estructura de datos deberá permitir almacenar:

Información general del proyecto.

Las cinco secciones de planificación.

Mensajes de conversación.

Resúmenes contextuales.

Decisiones aprobadas.

Propuestas de modificación.

Información necesaria para gestionar el acceso.

El modelo de datos definitivo se diseñará durante la implementación.

3.4. Infraestructura y despliegue

Frontend y backend desplegados en Render.

PostgreSQL alojado en Neon.

Repositorio y control de versiones en GitHub.

Integración continua mediante GitHub Actions.

La persistencia no dependerá del sistema de archivos local del servidor de aplicación.

Se utilizará PostgreSQL para conservar los datos entre reinicios y despliegues.

3.5. Integraciones y servicios externos

La única integración externa de IA prevista para el MVP será Gemini API.

La comunicación con el proveedor se realizará desde el backend mediante Pydantic AI.

No se incluirán inicialmente:

Servicios externos de búsqueda web.

APIs de pago.

Integraciones con repositorios.

Servicios externos de almacenamiento de archivos.

Otros proveedores de IA en paralelo.

La búsqueda externa queda reservada como posible ampliación futura.

3.6. Herramientas de desarrollo

Git y GitHub para control de versiones.

GitHub Actions para CI/CD.

Pytest para pruebas backend.

Vitest para pruebas frontend.

Docker como herramienta de apoyo para el entorno local cuando resulte necesario.

3.7. Seguridad y protección de datos

La seguridad se tratará como un apartado específico y también se tendrá en cuenta en las decisiones arquitectónicas correspondientes.

Medidas previstas:

Acceso a proyectos

Cada proyecto tendrá una clave privada única.

La clave deberá generarse mediante un mecanismo criptográficamente seguro.

Se almacenará un hash seguro de la clave, nunca su valor original en texto plano.

No se utilizarán identificadores secuenciales como mecanismo de autorización.

La clave no deberá exponerse innecesariamente en registros o respuestas.

La pérdida de la clave implicará la pérdida de acceso al proyecto.

Protección de la aplicación

Validación de entradas.

Protección de credenciales y secretos.

Comunicaciones HTTPS en producción.

Control de acceso a los datos.

Protección frente a ataques habituales.

Gestión segura de las API keys del proveedor de IA.

Privacidad

Los datos de proyectos diferentes deberán estar aislados.

El usuario podrá eliminar su proyecto y sus datos asociados.

No se prometerá la eliminación de información que ya haya sido procesada por el proveedor externo de IA.

Las medidas concretas y sus mecanismos de implementación se detallarán durante el desarrollo.

4. Definición del alcance

4.1. Funcionalidades principales

Funcionalidad

Descripción

Gestión de proyectos

Crear proyectos y recuperarlos mediante claves privadas.

Agente IA conversacional

Conversar con el agente para definir y planificar proyectos.

Planificación estructurada

Consultar y completar las cinco secciones.

Gestión de decisiones

Conservar las decisiones aprobadas y sus justificaciones.

Propuestas de cambios

Presentar modificaciones y solicitar autorización antes de aplicarlas.

Contexto persistente

Conservar información relevante entre sesiones.

Exportación

Generar documentos descargables de la planificación.

Eliminación

Eliminar proyectos y datos asociados.

4.2. Alcance del MVP

El MVP debe proporcionar una experiencia funcional de planificación colaborativa.

Incluirá como capacidades fundamentales:

Creación y recuperación de proyectos.

Acceso sin cuentas tradicionales.

Agente IA conversacional.

Consulta de información estructurada.

Construcción de las cinco secciones.

Persistencia de conversaciones y contexto.

Propuestas de modificación con autorización explícita.

Eliminación de proyectos.

Despliegue funcional.

Pruebas automatizadas de las funcionalidades principales.

La exportación PDF es un objetivo deseable para el MVP, pero no debe bloquear su finalización.

La exportación JSON queda como ampliación secundaria.

4.3. Priorización

Imprescindible

Gestión del proyecto.

Agente IA conversacional.

Planificación estructurada.

Contexto persistente.

Eliminación de proyectos.

Prescindible o simplificable

Gestión de decisiones independiente.

Sistema avanzado de propuestas.

Exportación PDF y JSON.

Las capacidades de proponer y aprobar modificaciones sí estarán presentes, aunque su implementación inicial será sencilla.

4.4. Exclusiones y límites

Quedan fuera del MVP:

Registro y login tradicional.

Gestión de cuentas y perfiles.

Límite de proyectos por usuario.

Colaboración entre usuarios.

Edición simultánea.

Aplicaciones móviles nativas.

Generación o ejecución automática de código.

Acceso a repositorios locales o GitHub.

Navegación autónoma.

Búsqueda externa de información.

Arquitectura multiagente.

Importación de proyectos desde PDF o JSON.

Notificaciones por correo.

Monetización y suscripciones.

Analíticas avanzadas.

Estas exclusiones podrán reconsiderarse en futuras ampliaciones, pero no forman parte del compromiso actual.

4.5. Criterios de aceptación

Los criterios actuales sirven como referencia revisable para valorar la finalización del MVP.

El usuario puede crear un proyecto y recuperar su acceso mediante la clave privada.

Puede conversar con el agente y recibir asesoramiento coherente con el proyecto.

El agente puede consultar la planificación existente y utilizarla en sus respuestas.

Las cinco secciones pueden construirse, consultarse y actualizarse correctamente.

El agente no puede modificar la planificación sin autorización explícita.

El contexto relevante se conserva entre sesiones.

La aplicación puede generar una exportación PDF si el alcance y el tiempo lo permiten.

El usuario puede eliminar su proyecto y los datos asociados.

La aplicación está desplegada y es accesible.

Las funcionalidades principales cuentan con pruebas automatizadas.

La exportación JSON no es un requisito del MVP actual.

Los criterios podrán modificarse durante el desarrollo si aparecen motivos técnicos o de alcance que lo justifiquen.

5. Roadmap de desarrollo

El roadmap detallado se elaborará después de consolidar esta especificación.

Deberá transformar las decisiones anteriores en:

Fases de implementación.

Tareas concretas.

Dependencias entre tareas.

Prioridades.

Objetivos verificables.

Estimaciones de tiempo.

El roadmap será una guía de desarrollo y podrá actualizarse según avance la implementación.

6. Modelo de funcionamiento del agente

6.1. Comportamiento general

PROJECT PLANNER utilizará un único agente de IA.

El agente debe comportarse como un asesor técnico que colabora con el usuario en la planificación del proyecto.

Debe:

Hacer preguntas cuando falte información.

Adaptar sus recomendaciones al contexto del proyecto.

Identificar riesgos y contradicciones.

Comparar alternativas.

Justificar sus recomendaciones.

Reconocer incertidumbres y limitaciones.

Evitar repetir preguntas cuya respuesta ya esté disponible.

No completar información mediante suposiciones presentadas como hechos.

No deberá modificar la planificación estructurada por iniciativa propia.

6.2. Herramientas del agente

Se prevén inicialmente las siguientes herramientas:

get_project_information

Permite consultar la información estructurada del proyecto, incluyendo secciones, decisiones, requisitos y restricciones.

create_change_proposal

Permite preparar una propuesta estructurada de modificación sin aplicarla directamente.

La herramienta de búsqueda externa no forma parte del MVP.

6.3. Aplicación de propuestas

El proceso será:

El agente identifica una mejora o modificación.

Explica al usuario qué propone cambiar y por qué.

El usuario acepta o rechaza la propuesta.

Si la acepta explícitamente, el backend valida y aplica los cambios correspondientes.

Si la rechaza, la planificación permanece intacta.

La aceptación expresa en la conversación será suficiente para autorizar la modificación. No se requerirá una segunda confirmación redundante.

6.4. Gestión del contexto

La memoria del agente se organizará en tres capas:

Historial completo

Todos los mensajes se almacenan en PostgreSQL y pueden recuperarse cuando sea necesario.

Planificación estructurada

Contiene el estado actual del proyecto y las decisiones aprobadas. Es la fuente de verdad.

Resumen contextual

Recoge información relevante de conversaciones anteriores que todavía no está reflejada en la planificación estructurada.

En cada interacción, el backend recuperará la información pertinente, el resumen contextual y una selección de mensajes recientes.

No se enviará todo el historial al modelo en cada petición.

Los resúmenes se actualizarán periódicamente cuando el volumen de conversación lo justifique.

6.5. Herramientas y autonomía

El agente no tendrá acceso autónomo a Internet ni a repositorios externos.

No podrá ejecutar código, modificar archivos del usuario ni realizar acciones externas en su nombre.

Su capacidad de actuación estará limitada a consultar información y preparar propuestas que el usuario podrá aprobar.

7. Ciclo de vida y acceso a proyectos

7.1. Experiencia de acceso

PROJECT PLANNER no utilizará un sistema tradicional de cuentas.

El usuario podrá acceder directamente a la aplicación sin registrarse.

7.2. Creación

Al crear un proyecto:

El backend genera una clave privada aleatoria y segura.

Se crea el proyecto asociado a esa clave.

Se muestra la clave al usuario.

Se advierte de la importancia de conservarla.

La clave permitirá recuperar el proyecto posteriormente.

7.3. Recuperación

El usuario podrá introducir su clave desde cualquier dispositivo para recuperar el proyecto y continuar la planificación.

No habrá dependencia de cookies, cuentas o del navegador original.

7.4. Multiplicidad de proyectos

No existirá un límite de proyectos por usuario o navegador.

Cada proyecto será independiente y tendrá su propia clave, historial, planificación y contexto.

El consumo de IA dependerá de las consultas realizadas, no del número de proyectos almacenados.

El almacenamiento se gestionará mediante medidas razonables de control de recursos y eliminación de datos.

7.5. Persistencia y eliminación

Los proyectos no tendrán caducidad automática.

Los datos permanecerán almacenados hasta que el usuario solicite su eliminación.

Al eliminar un proyecto se eliminarán los datos asociados, incluyendo conversaciones, resúmenes contextuales, propuestas y planificación.

La implementación deberá tener en cuenta también las implicaciones de copias de seguridad y registros técnicos, sin prometer una eliminación inmediata de copias históricas ni de datos ya procesados por proveedores externos.

8. Exportación de proyectos

8.1. PDF

La exportación PDF es una funcionalidad deseable para el MVP.

Su objetivo es generar un documento legible, organizado y presentable que permita al usuario consultar su planificación fuera de la aplicación.

La estructura prevista incluirá:

Información general del proyecto.

Estudio de viabilidad.

Diseño técnico.

Definición del alcance.

Roadmap.

Registro de decisiones.

Se utilizará una plantilla definida y se generará el documento a partir de los datos estructurados almacenados.

8.2. JSON

La exportación JSON se considera una ampliación secundaria.

Su finalidad será proporcionar un respaldo técnico estructurado de la información del proyecto.

Podrá facilitar futuras posibilidades de migración o importación, aunque estas capacidades no forman parte del MVP.

9. Restricciones y criterios generales de desarrollo

El desarrollo deberá respetar los siguientes principios:

Mantener el presupuesto en 0 €.

Priorizar el funcionamiento del núcleo sobre las funcionalidades accesorias.

Evitar complejidad innecesaria.

No implementar soluciones para problemas hipotéticos de escalabilidad.

Mantener una separación clara entre frontend, backend y persistencia.

Validar las modificaciones antes de aplicarlas.

Mantener los datos persistentes en PostgreSQL.

Controlar el consumo de tokens y las cuotas del proveedor de IA.

Gestionar adecuadamente errores y límites externos.

Priorizar la seguridad de las claves y los datos.

Mantener pruebas automatizadas de las funcionalidades importantes.

El objetivo no es construir una plataforma empresarial ni un producto comercial escalable, sino una aplicación funcional, coherente, segura y técnicamente bien construida.

10. Estado del documento

Esta especificación recoge las decisiones conceptuales y técnicas aprobadas hasta el 17 de noviembre de 2026.

No pretende anticipar todos los detalles de implementación.

Las decisiones que todavía no se han concretado deberán resolverse durante el diseño técnico detallado y el desarrollo.

Cualquier cambio importante en el comportamiento, alcance o arquitectura del producto deberá reflejarse en una nueva versión de este documento.

PROJECT_SPEC.md es la referencia principal para conocer qué es PROJECT PLANNER y qué decisiones definen su diseño.