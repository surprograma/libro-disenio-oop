---
sidebar_position: 1
---

# De Wollok a Kotlin

Cómo se menciona en el titulo, esta guía busca dar un primer acercamiento hacia el lenguaje Kotlin, comparándolo con Wollok, lenguaje que probablemente recuerden de Objetos 1.

## Definición de clases

La primera gran diferencia es que Kotlin es un lenguaje con _tipado estático_ mientras que Wollok tenía _tipado dinámico_. Esto implica que la responsabilidad de escribir los tipos pasa a ser de quien programa.

Afortunadamente Kotlin _infiere_ la mayoría de los tipos, siendo necesario escribirlos en pocos casos:

- _parámetros_, tanto de los métodos como del constructor de una clase;
- _atributos_ cuyo valor no se inicialize al definirlo.

Veamos un ejemplo de definiciones equivalentes en `Wollok` y `Kotlin`:

```wollok
/* Wollok */
class Ave {
  var property energia
  const property direccion

  const amiguis = []

  method esPopular() = amiguis.size() >= 5

  method conoceA(otroAve) = amiguis.contains(otroAve)

  method volar() {
    energia -= 1
  }

  method visitarA(otroAve) {
    if (self.conoceA(otroAve)) {
      self.volar()
    }
  }
}
```

```kotlin
/* Kotlin */
class Ave(var energia: Int, val direccion: String) {
  val amiguis = mutableListOf<Ave>()

  fun esPopular() = amiguis.size >= 5

  fun conoceA(otroAve: Ave) = amiguis.contains(otroAve)

  fun volar() {
    energia -= 1
  }

  fun visitarA(otroAve: Ave) {
    if (this.conoceA(otroAve)) {
      this.volar()
    }
  }
}
```

Algunas diferencias:

- lo que en Wollok era `const`, en Kotlin es `val`. En ambos `var` significa lo mismo,
- el `method` de Wollok es `fun` en Kotlin, y el `self` es `this`,
- en Kotlin, los atributos se escriben como si fueran parámetros de la clase.

## Instanciación de objetos

Continuando con el ejemplo anterior, así se crean objetos en uno y otro lenguaje:

```wollok
/* Wollok */
const pepita = new Ave(energia = 5, direccion = "Wallaby 42, Sidney")
```

```kotlin
/* Kotlin */
val pepita = Ave(energia = 5, direccion = "Wallaby 42, Sidney")

// También vale no poner los nombres de los atributos,
// en ese caso lo que importa es el orden.
val pepita = Ave(5, "Wallaby 42, Sidney")
```

Algunas diferencias:

- en Kotlin, no se escribe el `new`;
- en Kotlin, no es necesario poner los nombres de los atributos.

## Objetos autodefinidos

Para objetos únicos que tienen que ser conocidos por toda la aplicación, podemos crear _objetos autodefinidos_. Es decir, objetos que simplemente existen y no hace falta instanciarlos. En nuestro ejemplo, podemos usarlos para definir los tipos de alimentos.

```kotlin
object Alpiste {
  val energia = 1
}

object Girasol {
  val energia = 4
}
```

:::tip

Esto es casi igual que en Wollok, solo que acá escribimos los nombres con Mayúsculas.

:::

## Interfaces

Como Kotlin utiliza tipado estático, si queremos tratar _polimórficamente_ los dos objetos de arriba, necesitamos que tengan un tipo en común. Para esto podemos crear una interfaz, que describe un _contrato_ a cumplir:

```kotlin
interface Alimento {
  val energia: Int
}

object Alpiste : Alimento {
  override val energia = 1
}

object Girasol : Alimento {
  override val energia = 4
}
```

- El `:` en este caso indica que nuestros objetos _implementan_ la interfaz `Alimento`.
- El `override` nos lo obliga a poner el IDE para aclarar que estamos hablando de una propiedad definida _más arriba_.

Luego, en `Ave` ya podemos definir:

```kotlin
fun alimentar(alimento: Alimento) {
  energia += alimento.energia
}
```

> `Ave` admite cualquier objeto que implemente la interfaz `Alimento`

## Colecciones

### Dos sabores: mutables o inmutables

En Kotlin, todas las colecciones vienen en dos "sabores": mutables e inmutables. Las primeras soportan modificar sus elementos (agregar, quitar, actualizar), mientras que las segundas solo permiten acceder a sus elementos. Queda a criterio de quien programa cuál utilizar en cada caso, prefiriendo desde este espacio las inmutables (porque algo que no se puede modificar es menos propenso a errores).

Veamos entonces cómo crear unas y otras:

```kotlin
/* Kotlin */
listOf(1, 2, 3)
mutableListOf(1, 2, 3)

setOf(pepita, anastasia)
mutableSetOf(pepita, anastasia)
```

**Ojo :eyes:**: no hay que mezclar las ideas de `val` y `var` con la (in)mutabilidad de las colecciones. Por ejemplo, una colección inmutable podría estar referenciada con `var`, mientras que una mutable podría ser `val`.

### Closures o lambdas

Hay una pequeña diferencia en cómo se escriben los _closures_ que utilizamos para las operaciones de orden superior:

```wollok
/* Wollok */
avesAmigas.any { aveAmiga => aveAmiga.esPopular() }
```

```kotlin
/* Kotlin */
avesAmigas.any { aveAmiga -> aveAmiga.esPopular() }
```

¿Te diste cuenta? En vez de usar `=>` en Kotlin se usa `->` para definir una _lambda_ o _closure_.

Hay también otra sintaxis más "cheta" que tiene Kotlin, que nos ahorra de inventarle un nombre al parámetro:

```kotlin
avesAmigas.any { it.volarHastaLoDePepita() }
```

Cualquiera de las dos formas es válida.

### Operaciones comunes sobre colecciones

Un muy pequeño resumen de las operaciones más comunes. Una lista extensísima de todos los métodos que existen se pueden ver en [la documentación oficial de `Collection`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/).

#### Básicas

- `size` devuelve el tamaño de la colección. Ojo que es un atributo y no un método, por eso va sin parentesis.
- `isEmpty()` pregunta si la colección está vacía.
- `last()` devuelve el último elemento.
- `first()` devuelve el primer elemento.
- `contains(elemento)` verifica si la colección contiene a un cierto elemento.

#### Orden superior

- `any { condición }` pregunta si algún elemento de la colección cumple una condición.
- `all { condición }` pregunta si todos los elementos de la colección cumplen una condición.
- `find { condición }` devuelve el primer elemento que cumpla con la condición.
- `sumBy { transformación }` devuelve la suma de los elementos, aplicando la `transformación` sobre cada uno de ellos. Ejemplo: `aves.sumBy { it.energia }`. La `transformación` recibe un elemento y debe devolver un número.
- `minBy { transformación }` devuelve el elemento que resulta menor al aplicar la `transformación`. Notar que devuelve el elemento original y **no** el resultado de la transformación.

Están también los clásicos `map`, `filter`, `reduce` y muchísimos métodos más.

#### Exclusivos para colecciones de números

- `max()` devuelve el valor máximo.
- `min()` devuelve el valor mínimo.
- `sum()` devuelve la suma de los elementos.

#### Exclusivos para colecciones mutables

- `clear()` borra todos los elementos de la colección.
- `add(elemento)` agrega el elemento a la colección.
- `remove(elemento)` borra el elemento de la colección.

#### Exclusivos para listas

- `toSet()` devuelve un conjunto con los elementos _únicos_ de la lista. O dicho de otra manera: los elementos que tenía la lista, omitiendo repetidos.

#### Exclusivos para conjuntos

- `toList()` devuelve una lista con los mismos elementos que tenga el conjunto.

## Manejo de errores

Para lanzar un error que corte la ejecución, en Wollok podemos hacer:

```wollok
method volar() {
  if (energia < 0) {
    self.error("No queda suficiente energía para volar")
  }

  energia -= 1
}
```

En Kotlin, en vez de ser un método, hay una función global llamada `error`. El ejemplo se traduce a:

```kotlin
fun volar() {
  if (energia < 0) {
    error("No queda suficiente energía para volar")
  }

  energia -= 1
}
```

Otra forma de lanzar errores es usando `check`, que _chequea_ que una condición se cumpla, y **de lo contrario** arroja un error con el mensaje especificado:

```kotlin
fun volar() {
  check (energia >= 0) {
    "No queda suficiente energía para volar"
  }

  energia -= 1
}
```

Queda al gusto de ustedes decidir cuál de las dos variantes utilizar. :smiley:
