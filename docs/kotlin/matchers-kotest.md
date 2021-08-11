---
sidebar_position: 3
title: Matchers de Kotest
description: Machete sobre las formas más comunes para verificar condiciones en los tests.
---

Esta es una lista, para nada exhaustiva, de los _matchers_ que tiene Kotest (métodos para verificar condiciones en los tests).

Para ver otros métodos, recomendamos leer [la documentación](https://kotest.io/docs/assertions/core-matchers.html).

## Igualdad

| Sintaxis                   | Sirve para verificar...                     |
| -------------------------- | ------------------------------------------- |
| `objeto.shouldBe(otro)`    | ...si un `objeto` **es igual** a `otro`.    |
| `objeto.shouldNotBe(otro)` | ...si un `objeto` **es distinto** a `otro`. |
| `booleano.shouldBeTrue()`  | ...si un `booleano` **es verdadero**.       |
| `booleano.shouldBeFalse()` | ...si un `booleano` **es falso**.           |

### Un caso especial: números decimales

En informática, las operaciones con decimales suelen implementarse con una técnica llamada [**punto flotante**](http://puntoflotante.org/). Esta implementación trae aparejada una serie de imprecisiones, que afectan entre otras cosas a la [comparación](http://puntoflotante.org/errors/comparison/).

Para evitar casos en los que un test rompa porque `"se esperaba 2.78 pero se obtuvo 2.78000000001"`, estas comparaciones se suelen hacer con una cierta **tolerancia**, que indica cuál es el desfasaje máximo aceptable.

En Kotest, podemos configurar una tolerancia de la siguiente manera:

```kotlin
// Aceptamos como válido a cualquier número entre 2.77 y 2.79
numero.shouldBe(2.78 plusOrMinus 0.01)
```

## Colecciones

| Sintaxis                                        | Sirve para verificar...                                          |
| ----------------------------------------------- | ---------------------------------------------------------------- |
| `coleccion.shouldBeEmpty()`                     | ...si la colección **está vacía**.                               |
| `coleccion.shouldBeUnique()`                    | ...si la colección **no tiene duplicados**.                      |
| `coleccion.shouldContain(elemento)`             | ...si la colección **contiene** al `elemento`.                   |
| `coleccion.shouldContainAll(elem1, elem2, ...)` | ...si la colección **contiene a todos** los elementos indicados. |

:eyes: **Ojo:** los dos últimos matchers verifican que los elementos dados existan, pero no dicen nada sobre los demás elementos de la colección.

### Control estricto de elementos

Algunas veces nos alcanza con verificar que los elementos que queremos existan, pero otras necesitamos verificar también que no haya otros elementos.

En ese caso, deberíamos usar alguno de los matchers que vienen a continuación:

#### Verificando que aparezan en cierto orden:

```kotlin
unaLista.shouldContainExactly(elem1, elem2, ...)
// o pasando una lista:
unaLista.shouldContainExactly(otraLista)
```

#### Sin importar en qué orden aparecen:

```kotlin
unaLista.shouldContainExactlyInAnyOrder(elem1, elem2, ...)
// o pasando una lista:
unaLista.shouldContainExactlyInAnyOrder(otraLista)
```

## Excepciones

```kotlin
// Verificando el mensaje
shouldThrowMessage("Acá va el mensaje de error que tira") {
  codigoQueDeberiaLanzarUnError()
}

// Sin verificar el mensaje
shouldThrowAny {
  codigoQueDeberiaLanzarUnError()
}
```
