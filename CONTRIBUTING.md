# Contribuir a Landing de InfoJobs

Primero que nada, ¡gracias por tomarte el tiempo para contribuir! ❤️

Se anima y valora todo tipo de contribuciones. Consulta la [Tabla de Contenidos](#tabla-de-contenidos) para conocer las diferentes maneras de ayudar y detalles sobre cómo maneja este proyecto las contribuciones. Asegúrate de leer la sección relevante antes de hacer tu contribución, lo que facilitará mucho el trabajo a los mantenedores y mejorará la experiencia para todos los involucrados. La comunidad espera tus contribuciones con entusiasmo. 🎉

> Y si te gusta el proyecto pero no tienes tiempo para contribuir, no te preocupes. Hay otras formas sencillas de apoyar el proyecto y mostrar tu aprecio, las cuales también agradeceríamos mucho:
> - Dale una estrella al proyecto
> - Twitea sobre él
> - Menciona este proyecto en el README de tu proyecto
> - Coméntalo en reuniones locales y cuéntaselo a tus amigos/colegas

<!-- omit in toc -->
## Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Tengo una Pregunta](#tengo-una-pregunta)
- [Quiero Contribuir](#quiero-contribuir)
- [Reportar Errores](#reportar-errores)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Tu Primera Contribución de Código](#tu-primera-contribución-de-código)
- [Mejorar la Documentación](#mejorar-la-documentación)
- [Guías de Estilo](#guías-de-estilo)
- [Mensajes de Commit](#mensajes-de-commit)
- [Únete al Equipo del Proyecto](#únete-al-equipo-del-proyecto)


## Código de Conducta

Este proyecto y todos los que participan en él están regidos por el [Código de Conducta de Landing de InfoJobs](https://github.com/midudev/landing-infojobsblob/master/CODE_OF_CONDUCT.md). Al participar, se espera que cumplas con este código. Por favor, reporta cualquier comportamiento inaceptable a <miduga@gmail.com>.

## Tengo una Pregunta

> Si quieres hacer una pregunta, asumimos que has leído la [Documentación](https://github.com/midudev/landing-infojobs) disponible.

Antes de hacer una pregunta, lo mejor es buscar [Issues](https://github.com/midudev/landing-infojobs/issues) existentes que puedan ayudarte. En caso de encontrar un issue adecuado y aún necesitar aclaraciones, puedes escribir tu pregunta en ese issue. También es aconsejable buscar respuestas en internet primero.

Si después de esto todavía sientes la necesidad de hacer una pregunta y necesitas aclaración, te recomendamos lo siguiente:

- Abre un [Issue](https://github.com/midudev/landing-infojobs/issues/new).
- Proporciona el mayor contexto posible sobre el problema que estás enfrentando.
- Proporciona versiones del proyecto y la plataforma (Node.js, npm, etc.), dependiendo de lo que parezca relevante.

Nos encargaremos del issue lo antes posible.

## Quiero Contribuir

> ### Aviso Legal <!-- omit in toc -->
> Al contribuir a este proyecto, debes aceptar que eres el autor del 100% del contenido, que tienes los derechos necesarios para el contenido, y que el contenido que contribuyas puede ser proporcionado bajo la licencia del proyecto.

### Reportar Errores

#### Antes de Enviar un Informe de Error

Un buen informe de error no debería dejar a otros necesitando más información. Por lo tanto, te pedimos que investigues cuidadosamente, recopiles información y describas el problema en detalle en tu informe. Completa los siguientes pasos para ayudarnos a solucionar cualquier error potencial lo más rápido posible.

- Asegúrate de estar utilizando la última versión.
- Verifica si el problema realmente es un error y no un problema de configuración (Asegúrate de haber leído la [documentación](https://github.com/midudev/landing-infojobs). Si buscas soporte, podrías consultar [esta sección](#tengo-una-pregunta)).
- Para ver si otros usuarios han experimentado (y posiblemente resuelto) el mismo problema, verifica si ya existe un informe para ese error en el [rastreador de errores](https://github.com/midudev/landing-infojobs/issues?q=label%3Abug).
- También asegúrate de buscar en internet (incluyendo Stack Overflow) para ver si usuarios fuera de la comunidad de GitHub han discutido el problema.
- Recopila información sobre el error:
  - Traza de pila (Stack trace)
  - Sistema operativo, plataforma y versión (Windows, Linux, macOS, x86, ARM)
  - Versión del intérprete, compilador, SDK, entorno de ejecución, gestor de paquetes, dependiendo de lo que parezca relevante.
  - Posiblemente, tu entrada y salida
  - ¿Puedes reproducir el problema de manera confiable? ¿Y también con versiones anteriores?

#### ¿Cómo Enviar un Buen Informe de Error?

> Nunca debes informar problemas relacionados con la seguridad, vulnerabilidades o errores que incluyan información sensible en el rastreador de issues o en otro lugar público. En su lugar, los errores sensibles deben ser enviados por correo electrónico a <miduga@gmail.com>.

Utilizamos issues de GitHub para rastrear errores. Si encuentras un problema con el proyecto:

- Abre un [Issue](https://github.com/midudev/landing-infojobs/issues/new). (Dado que en este punto no estamos seguros si es un error, te pedimos que no lo llames "bug" aún ni lo etiquetes).
- Explica el comportamiento esperado y el comportamiento real.
- Proporciona tanto contexto como sea posible y describe los *pasos para reproducir* que alguien más puede seguir para recrear el problema. Esto usualmente incluye tu código. Para buenos informes de error, deberías aislar el problema y crear un caso de prueba reducido.
- Proporciona la información que recopilaste en la sección anterior.

Una vez enviado:

- El equipo del proyecto etiquetará el issue según corresponda.
- Un miembro del equipo intentará reproducir el problema con los pasos proporcionados. Si no hay pasos para reproducir o no es obvio cómo hacerlo, el equipo te pedirá esos pasos y marcará el issue como `needs-repro`. Los errores con la etiqueta `needs-repro` no serán atendidos hasta que se puedan reproducir.
- Si el equipo puede reproducir el problema, será etiquetado como `needs-fix`, además de posiblemente otras etiquetas (como `critical`), y el issue quedará disponible para ser [implementado por alguien](#tu-primera-contribución-de-código).

### Sugerir Mejoras

Esta sección te guiará en la presentación de una sugerencia de mejora para Landing de InfoJobs, **incluyendo nuevas características y mejoras menores de la funcionalidad existente**. Seguir estas pautas ayudará a los mantenedores y la comunidad a entender tu sugerencia y encontrar sugerencias relacionadas.

#### Antes de Enviar una Mejora

- Asegúrate de estar utilizando la última versión.
- Lee la [documentación](https://github.com/midudev/landing-infojobs) detenidamente y verifica si la funcionalidad ya está cubierta, tal vez por una configuración individual.
- Realiza una [búsqueda](https://github.com/midudev/landing-infojobs/issues) para ver si la mejora ya ha sido sugerida. Si es así, añade un comentario al issue existente en lugar de abrir uno nuevo.
- Asegúrate de que tu idea encaje con el alcance y los objetivos del proyecto. Es tu responsabilidad hacer una fuerte argumentación para convencer a los desarrolladores del proyecto de los méritos de esta característica. Ten en cuenta que buscamos características que sean útiles para la mayoría de nuestros usuarios y no solo para un pequeño grupo. Si solo estás apuntando a una minoría de usuarios, considera escribir una biblioteca de complementos.

#### ¿Cómo Enviar una Buena Sugerencia de Mejora?

Las sugerencias de mejora se rastrean como [issues de GitHub](https://github.com/midudev/landing-infojobs/issues).

- Usa un **título claro y descriptivo** para el issue que identifique la sugerencia.
- Proporciona una **descripción paso a paso de la mejora sugerida** con tantos detalles como sea posible.
- **Describe el comportamiento actual** y **explica qué comportamiento esperabas ver en su lugar** y por qué. En este punto, también puedes indicar qué alternativas no funcionan para ti.
- Puedes **incluir capturas de pantalla y GIFs animados** que te ayuden a demostrar los pasos o señalar la parte relacionada con la sugerencia. Puedes usar [esta herramienta](https://www.cockos.com/licecap/) para grabar GIFs en macOS y Windows, y [esta herramienta](https://github.com/colinkeenan/silentcast) o [esta herramienta](https://github.com/GNOME/byzanz) en Linux.
- **Explica por qué esta mejora sería útil** para la mayoría de los usuarios de Landing de InfoJobs. También puedes mencionar otros proyectos que hayan resuelto mejor el problema y que podrían servir de inspiración.

### Tu Primera Contribución de Código

¿Listo para contribuir con código? ¡Genial! A continuación, te mostramos cómo empezar:

1. **Bifurca (Fork) el repositorio** en tu cuenta de GitHub.

2. **Clona el repositorio bifurcado** en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/landing-infojobs.git
   ```

3. **Crea una rama nueva** para tu contribución. Utiliza un nombre de rama descriptivo:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
4. **Haz tus cambios**. Asegúrate de seguir las pautas de codificación del proyecto y de que tus contribuciones sean claras y concisas. Si estás agregando una nueva característica, asegúrate de que tenga cobertura de pruebas.
5. **Prueba tus cambios** para verificar que todo funcione correctamente:
   ```bash
   npm run preview
   ```
6. **Haz commit de tus cambios** siguiendo las convenciones de mensajes de commit (ver la sección [Mensajes de Commit](#mensajes-de-commit)).
7. **Sube tu rama** a GitHub:
   ```bash
   git push origin nombre-de-tu-rama
   ```
8. **Abre un Pull Request (PR)** desde tu rama y describe claramente los cambios que has realizado. Si tu PR resuelve un issue existente, asegúrate de mencionarlo en la descripción.
9. **Espera la revisión**. Un mantenedor revisará tu PR, te proporcionará comentarios y lo aprobará si está listo para ser fusionado.

### Mensajes de Commit

Para mantener un historial de cambios consistente y claro, utilizamos una convención para los mensajes de commit. El formato es el siguiente:

```scss
tipo(área): descripción corta [opcional]
```

- **tipo**: indica la naturaleza del cambio. Algunos ejemplos son:
  - `feat`: una nueva característica para el proyecto.
  - `fix`: corrección de errores.
  - `docs`: cambios en la documentación.
  - `style`: cambios que no afectan la lógica del código (formato, espacios, etc.).
  - `refactor`: cambios en el código que no corrigen errores ni agregan funciones.
  - `test`: agregar o corregir pruebas.
  - `chore`: cambios en el proceso de construcción o herramientas auxiliares.
- **área**: especifica la parte del proyecto que se ve afectada (por ejemplo, un archivo o módulo).
- **descripción breve**: explica de manera concisa qué se ha hecho. Usa el modo imperativo (por ejemplo, "agrega", "corrige").
- **descripción detallada opcional**: puede incluir más detalles sobre el commit.

<br/>

**Ejemplo de mensaje de commit:**
   ```scss
   docs(readme.md): add local install instructions
   ```

Este mensaje indica que se han añadido instrucciones de instalación local en el archivo `readme.md`.

<br/>


¡Gracias por contribuir! Tu ayuda hace una gran diferencia para el proyecto.

<br/>


## Atribución

Esta guía está basada en **contributing-gen**. [¡Haz la tuya!](https://github.com/bttger/contributing-gen)
