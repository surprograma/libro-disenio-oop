---
sidebar_position: 2
title: Cualidades independientes de la tecnología
---

Las primeras cualidades que atacaremos son aquellas que podríamos estudiar al comparar dos diseños con tan sólo un un nivel superficial o intermedio la tecnología sobre la que vamos a implementarlos. 

## Simplicidad

Dado que la idea de simplicidad es muy amplia, vamos a tomar la interpretación de KISS (Keep it simple, stupid) y YAGNI (You aren’t gonna need it): no sobrediseñar, focalizándonos en las necesidades conocidas del sistema. 

KISS →  Muchas veces hay abstracciones que no son fundamentales, no surgen del negocio o su presencia no aporta a la solución. Lo que nos propone KISS es que cualquier complejidad innecesaria debería ser evitada.

YAGNI → Los requerimientos del hoy rara vez van a coincidir con los del mañana. Lo que nos propone YAGNI es no agregar funcionalidad nueva que no apunte a la problemática actual, es decir, no diseñar pensando en requerimientos en futuros hipotéticos, sino focalizarnos en las necesidades conocidas.

Esto es importante por dos motivos:
Por un factor económico: Agregar funcionalidad no requerida para esa iteración, nos saca tiempo para hacer otras que sí lo son. Además, siempre está la posibilidad de agregar funcionalidad que no va a ser requerida en ninguna otra iteración, o que esté basada en conceptos que luego deberán ser cambiados. Si hay algo peor que añadir funcionalidad prematuramente, es añadir funcionalidad que jamás será requerida, o que sea incorrecta.
Por complejidad: Agregar al modelo actual un requerimiento no solicitado, inyecta complejidad al mismo en la ventana de tiempo entre que se introdujo esa complejidad, y cuando realmente se precisó.

En definitiva, a medida que tengamos que mantener en nuestra mente más abstracciones para poder entender y predecir el comportamiento de un sistema, estamos ante diseños más complejos. La mayoría de los sistemas funcionan mejor cuanto más simples son, de ahí que: 
La Complejidad Accidental que proviene de nuestra propia solución (diseño) se debe evitar.
La Complejidad Esencial propia del problema a solucionar, se debe manejar en nuestra solución de la forma más simple posible.

## Robustez

La robustez nos dice que ante un uso inadecuado por parte del usuario, sistemas externos o ante fallas internas:
El sistema no debe generar información o comportamiento inconsistente/errático.
El sistema debe reportar los errores y volver a un estado consistente.	
El sistema debe facilitar tanto como sea posible la detección de la causa del problema.

Es decir, la robustez no se trata de evitar que un sistema falle, sino de la gracia con la que lidia con la situación excepcional. 

Un principio que nos ayudará a mejorar esta cualidad en nuestras soluciones será el de Fail Fast (fallar rápido). Este nos propone que ante el indicio de un comportamiento incorrecto, el sistema debe abortar de forma ordenada la ejecución de su operatoria y reportar el error. 

Fail Fast, entonces, minimizará las probabilidades de generar inconsistencias y facilitará encontrar la causa del problema (dado que el error se reportará próximo al momento y lugar en donde ocurrió), todo lo cual nos ayudará luego a volver a un estado conocido. 

Esto contrasta con otra interpretación de robustez: “cuánta tranquilidad le da al usuario el uso de la aplicación”. Esto evidentemente no nos sirve para comparar tanto el diseño sino el producto final, dado que en esa sensación hay factores externos al mismo: calidad de la implementación, defectos en las tecnologías empleadas, el tiempo que se ha invertido en probar el sistema, y los propios prejuicios del usuario. Por tanto, esta interpretación no nos será de gran utilidad al diseñar.
3.3 Flexibilidad

Capacidad de reflejar cambios en el dominio de manera simple y sencilla. Podemos verlo en dos ejes: extensibilidad y mantenibilidad. 

### Extensibilidad

Es la capacidad de agregar nuevas características con poco impacto.

### Mantenibilidad 

Es la capacidad de modificar las características existentes con el menor esfuerzo posible.

## Acoplamiento

El acoplamiento es el grado de dependencia entre dos módulos/componentes, es decir, es el nivel de conocimiento que un módulo tiene sobre otro. Pensemos que cuanto mayor sea el acoplamiento, los cambios o errores de un módulo repercutirán en mayor medida sobre el otro módulo.

Buscaremos minimizar el acoplamiento para:
Mejorar la mantenibilidad	
Aumentar la reutilización
Evitar que un defecto en un módulo se propague a otros, haciendo dificultoso detectar dónde está el problema.
Minimizar el riesgo de tener que tocar múltiples componentes ante una modificación, cuando sólo se debería modificar uno.

## Cohesión

Un módulo o componente cohesivo tiende a tener todos sus elementos abocados a resolver el mismo problema. Puesto en otras palabras, la cohesión se trata de cuántas responsabilidades tiene el componente: cuantas más sean, menos cohesivo será. 

En el caso de objetos, podemos ver fácilmente cuando un objeto o clase tiene dos métodos que apuntan a resolver, cada uno, tareas diferentes. Podríamos incluso pensarlo a nivel de cada método, analizando cuántas tareas resuelve.

## Facilidad de prueba (o _testeabilidad_)

La testeabilidad de un sistema nos permite asegurar que el código funciona correctamente y es mantenible. Verificar la testeabilidad de componentes pequeños, ayudará a mejorar el sistema en general.

## Abstracción
Podemos atacar a la idea de abstracción en, al menos, dos ejes: su calidad y su cantidad. 

Por un lado, construir buenas abstracciones que definan metáforas consistentes y que encajen con nuestros modelos mentales sobre la realidad. Dicho informalmente, que la abstracción “cierre”, no “nos genere ruido”

Cuando tenemos mejores abstracciones estamos maximizando dos cualidades de diseño más:
Reusabilidad: posibilidad de utilizar un módulo/componente construido anteriormente para resolver un problema nuevo.
Genericidad: poder utilizar un módulo/componente definido anteriormente  que se puede aplicar para resolver problemas distintos.

Ejemplo:

Una estructura de datos fundamental es la Pila, la cual es muy poderosa por su simplicidad, pero también por su proximidad al mundo real: un contenedor en el cual coloco y saco elementos por arriba, como en los portamonedas con resorte (qué antigüedad...).

Sus dos operaciones fundamentales son apilar y desapilar: push y pop. Qué pasaría si modeláramos una pila con un objeto, que entienda los mensajes push y pop, pero además le dieramos el método insert(position, element) ?

Nuestra abstracción dejaría de “cerrar”, no porque haya perdido cohesión (push e insert son dos métodos orientados a lo mismo: agregar elementos al contenedor) sino porque la operación de inserción en un una posición arbitraria deja de encajar con la idea de una pila. 

Parece un ejemplo tonto, pero miren como está modelada la clase Stack (deprecada en la práctica) de Java desde sus primeras versiones (presten atención a la herencia). 

Por otro lado, podemos ver la cualidad de abstracción según cuántas de las abstracciones presentes en el modelo de negocio también están presentes en nuestra solución. Lo que vamos a buscar es que todas las abstracciones fundamentales del negocio que estamos modelando estén presentes, es decir, no perder abstracciones en el camino del diseño y construcción del sistema.

Acá estamos entrando en una aparente contradicción con la cualidad de simplicidad: parecería que por un lado planteamos maximizar la cantidad de abstracciones, y por el otro, minimizarla. La clave está en identificar cuales son abstracciones fundamentales para el diseño de la solución, y cuales son prescindentes (complejidades accidentales). Idea que queda resumida en el principio de _"Make things as simple as possible, but not simpler"_ ("haz las cosas tan simple como sea posible, pero no más simple").

Pero para eso no hay reglas, está en el criterio de quien diseñe, y eso no se puede enseñar, sino sólo ejercitar. 

Recuerden: no hay recetas para diseñar.

## Consistencia

Un diseño es consistente cuando ante problemas de diseño similares, se tomaron decisiones de diseño similares. Se trata de aplicar los mismos criterios uniformemente a lo largo del diseño, haciéndolo más predecible para el lector ocasional y facilitando su comprensión. 

## Redundancia mínima

Un diseño presenta redundancia cuando el mismo conocimiento está presente en múltiples lugares, ya sea porque contempla múltiples mecanismos orientados a realizar la misma tarea, o porque la información que el sistema mantiene se encuentra directa o indirectamente duplicada.

Esto es un problema, porque:
En el caso de la repetición de lógica entre diversos componentes, esta hace que cambiar el comportamiento del sistema sea más difícil, cometer errores sea más fácil y rastrearlos, más difícil.  
En el caso de la repetición de información, esta posibilidad la introducción de inconsistencias en los datos.

Entonces buscaremos minimizar la redundancia en la lógica entre los componentes de nuestro sistema, lo cual asociaremos al principio de DRY (Don’t repeat yourself) / Once and only once y la redundancia entre nuestra información, lo cual asociaremos al proceso de normalización. 

Puesto en otros términos, no será suficiente con crear buenas abstracciones y usarlas de forma consistente siempre que corresponda, sino además, deberemos evitar el solapamiento entre las mismas: el conocimiento debe estar en un sólo lugar. 

## Mutaciones controladas

Cuanto menos cambio de estado presentan mis componentes mientras el sistema se encuentra en funcionamiento, más fácil resulta razonar sobre el mismo:  podemos compartir, descartar o reemplazar a los componentes más fácilmente, y en general, minimizamos la probabilidad de cometer errores. 

Por eso, un diseño que tiene más control sobre las mutaciones (es decir, las circunscribe y emplea sólo cuando son necesarias) es mejor que aquel que no lo hace. 

Algunos principios derivados de esta idea general son:
Favorecer la inmutabilidad: si es posible, diseñar los componentes del sistema de forma tal que sean inmutables, es decir, libres de cualquier tipo de cambio de estado interno. Si bien no es posible diseñar un sistema completamente libre de mutaciones, si es posible y valioso diseñar partes del mismo que sean inmutables. 
Minimizar la mutabilidad: Aún si mis componentes son mutables, realizar las mutaciones sólo cuando realmente es necesario, y no exponer en sus interfaces operaciones mutables que los requerimientos no justifiquen.
