---
sidebar_position: 1
title: Introducción a las cualidades de diseño
---

Cuando nos toca analizar un sistema, ya sea existente o aún tan sólo presente en nuestras mentes, frecuentemente nos encontraremos con aspectos de su diseño que “nos hacen ruido”: por ejemplo, muchas veces veremos partes difíciles de modificar, o excesivamente complejas, o que presentan abstracciones confusas.  

Y si somos además responsables del uso, mantenimiento o construcción de dichos componentes, probablemente esto venga acompañado del recuerdo poco feliz de las personas que lo idearon. :angry:

## ¿Qué son las cualidades de diseño?

Esto nos da una intuición sobre qué es la calidad del diseño. Lo que buscaremos ahora es justamente refinar esta idea, formar criterios más sofisticados sobre qué diferencia a un buen diseño de uno deficitario, que conoceremos como **cualidades de diseño**. Puesto en otros términos, nos ayudará a poder responder la pregunta: ¿es el diseño A mejor que B?

Lo interesante es que estos criterios nos permitirán analizar y tomar decisiones más formadas. No serán nuestras únicas guías, claro: el criterio, experiencia y conocimiento de quienes construyan el software serán elementos clave. Por lo tanto, debemos interpretar las cualidades de diseño como heurísticas antes que reglas. 

Las cualidades de diseño, como veremos a continuación, estarán en general enunciadas en forma de principios más o menos genéricos, pero cuya interpretación será diferente según la tecnología empleada. Por ejemplo, analizar el acoplamiento entre dos componentes desarrollados bajo el paradigma funcional será diferente de hacerlo entre dos componentes desarrollados bajo el paradigma de objetos.

## ¿Para qué sirven las cualidades de diseño?

Como adelantamos, las cualidades de diseño nos servirán para comparar diseños y tomar decisiones sobre ellos. Por un lado, expandirán nuestra mente y nos recordarán varios aspectos a tener en cuenta antes de tomar una decisión de diseño. Y por otro lado nos darán un vocabulario más rico que nos permitirá justificar mejor nuestras opiniones y decisiones.

Para hablar de cualidades de diseño, deberemos tener siempre un **diseño alternativo** en mente. No podemos decir que una pieza de software _es simple_ o _es robusta_, sino que es _más simple_ o _más robusta_ que otra que resuelva la misma problemática. Y en general también deberemos tener en cuenta un **contexto**: por ejemplo, un diseño para un componente no es más flexible que otro en términos absolutos, sino más flexible ante un cierto escenario de cambio.

## Tensiones entre las cualidades

Como veremos más adelante, muchas veces nos encontramos con que favorecer una cualidad de diseño en una solución perjudica a otra. O por el contrario, una mejora en una se traduce también en una mejora en otra. Es decir, algunas cualidades tienen _correlación positiva_, como por ejemplo **cohesión** y **abstracción**, o **desacoplamiento** y **testeabilidad**. Pero otras entran en conflicto y más bien, parecen oponerse: **flexibilidad** y **robustez** o **simplicidad** y **extensibilidad**.

Es el _síndrome de la frazada corta_: o me abrigo los pies o me abrigo los hombros, pero ambas cosas no puedo. :shrug: 

Estos casos son más interesantes, porque tenemos que elegir a qué cualidad le daremos preponderancia. Y no sólo con conocimiento técnico sino también con conocimiento del negocio y del contexto humano del desarrollo.  

Algunos ejemplos: 
- Si estamos construyendo un sistema provisorio cuyo tiempo de vida estimado es de 6 meses, no necesito pensar en la **mantenibilidad**.
- Si estoy construyendo un prototipo para validar la idea de un producto o servicio, la **simplicidad** será clave. 
- Si soy responsable de un sistema de control de un avión que por diseño no va a cambiar, la **flexibilidad** no me parecerá importante pero la **performance** y **robustez** serán críticas.
- Si estoy desarrollando un sistema para una clienta, pero sé que en el futuro inmediato tendré que construir sistemas muy similares para otros clientes, probablemente valga la pena construir buenas **abstracciones** genéricas que me permitan reutilizar los componentes.

## Apéndice: un ejemplo real

A modo de ejemplo, les presentamos la [documentación del API de tiempo (en inglés :us:)](http://docs.oracle.com/javase/tutorial/datetime/overview/index.html) introducida en la versión 1.8 del Java Development Kit (JDK). Es interesante que quienes desarrollaron la misma se tomaron su tiempo para explicarnos no sólo qué hacen sus componentes sino las decisiones de diseño que tomaron al implementarlo.

- Nos muestran cuáles fueron las [cualidades de diseño en las que más foco hicieron](http://docs.oracle.com/javase/tutorial/datetime/overview/design.html) (notar **extensiblidad**).
- Cómo [repartieron las responsabilidades entre sus paquetes](http://docs.oracle.com/javase/tutorial/datetime/overview/packages.html) con el objetivo de mantenerlos **cohesivos**.
- Cómo lograron una [nomenclatura](http://docs.oracle.com/javase/tutorial/datetime/overview/naming.html) **consistente**.
- Cómo construyeron buenas **abstracciones** que representen [cada una de las posibles formas de tratar el tiempo](http://docs.oracle.com/javase/tutorial/datetime/iso/overview.html) - quizás a costa de resignar algo de **simplicidad**.
- Cómo proveyeron [dos mecanismos para construir los objetos de la biblioteca](http://docs.oracle.com/javase/tutorial/datetime/iso/clock.html): uno simple, y otro que permita la **facilidad de prueba** del código que use esta biblioteca. 
- Una [comparación entre esta biblioteca la anterior versión de la misma](http://docs.oracle.com/javase/tutorial/datetime/iso/legacy.html) (con un diseño diferente), en donde está implícita la idea de **robustez**.
