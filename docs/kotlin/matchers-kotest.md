---
sidebar_position: 2
---

# Matchers de Kotest

Esta es una lista, para nada exhaustiva, de los matchers que tiene Kotest (métodos para verificar condiciones en los tests).

Para ver otros métodos, recomendamos leer [la documentación](https://kotest.io/docs/assertions/core-matchers.html).

## Matchers de igualdad

### Si un objeto es igual a otro

`objeto.shouldBe(otro)`

Matchers relacionados:

- `shouldNotBe` (diferente)
- `shouldBeGreaterThan` (mayor a)
- `shouldBeLessThanOrEqual` (menor o igual a)

### Si un número con decimales (Double) es igual a otro

Como la división y otras operaciones con decimales no suelen ser precisas, se compara de la siguiente forma:

```kotlin
valor.shouldBe(1.1 plusOrMinus(0.01))
```

Para evitar casos en los que el test rompa porque `"valor es 1.10000000001 y tendría que ser 1.1"`, le pasamos ese `0.01` que es la tolerancia (cuál es el desfasaje máximo aceptable).

### Si algo es verdadero

En vez de `booleano.shouldBe(true)` podemos escribir simplemente `booleano.shouldBeTrue()`

## Matchers de colecciones

### Si la colección está vacía

`coleccion.shouldBeEmpty()`

### Si la colección contiene un elemento

`coleccion.shouldContain(elemento)`

### Si la colección contiene algunos elementos

`coleccion.shouldContainAll(elemento1, elemento2, ...)`

En este caso no importa el orden (por ejemplo, `elemento2` podría estar antes que `elemento1` en la lista y esto no daría error).

:eyes: **Ojo:** este matcher no dice nada sobre los demás elementos de la colección, y en algunos casos necesitamos verificar que no haya otros elementos. En ese caso, deberíamos usar alguno de los matchers que vienen a continuación.

### Si la colección tiene exactamente un grupo de elementos (y ninguno más)

#### En orden

```kotlin
unaLista.shouldContainExactly(elemento1, elemento2, elemento3)
// o pasando una lista:
unaLista.shouldContainExactly(otraLista)
```

#### Sin importar el orden

```kotlin
unaLista.shouldContainExactlyInAnyOrder(elemento1, elemento2, elemento3)
// o pasando una lista:
unaLista.shouldContainExactlyInAnyOrder(otraLista)
```

### Si la colección no tiene duplicados

`coleccion.shouldBeUnique()`

## Matchers de excepciones

### Si un fragmento de código lanza error

```kotlin
shouldThrowAny {
  codigoQueLanzaError()
}
```

### Si un fragmento de código NO lanza error

```kotlin
shouldNotThrow {
  codigoQueNoDeberiaLanzarError()
}
```
