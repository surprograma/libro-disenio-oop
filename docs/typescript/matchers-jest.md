---
sidebar_position: 1
title: Matchers de Jest
description: Machete sobre las formas más comunes para verificar condiciones en los tests.
---

Esta es una lista, para nada exhaustiva, de los _matchers_ que tiene Jest (métodos para verificar condiciones en los tests).

Para ver otros métodos, recomendamos leer [la documentación](https://jestjs.io/docs/expect).

## Básicos

| Sintaxis                        | Sirve para verificar...                                    |
| ------------------------------- | ---------------------------------------------------------- |
| `expect(objeto).toBe(otro)`     | ...si un `objeto` **el mismo** que `otro` (por identidad). |
| `expect(objeto).toEqual(otro)`  | ...si un `objeto` **es igual** a `otro` (por igualdad).    |
| `expect(booleano).toBeTruthy()` | ...si un `booleano` **es verdadero**.                      |
| `expect(booleano).toBeFalsy()`  | ...si un `booleano` **es falso**.                          |

:::tip

Todos los _matchers_ se pueden negar anteponiendo `.not`:

- `expect(numero).not.toBe(21)`
- `expect(lista).not.toEqual([])`.

:::

### ¿Igualdad o identidad?

En el paradigma de objetos existen dos conceptos que a menudo se confunden, pero tienen significados bien diferentes: la **identidad** y la **igualdad**. No tener clara esta diferencia puede resultar particularmente molesto a la hora de escribir pruebas con Jest, porque debemos utilizar métodos distintos según qué querramos probar.

Conceptualmente, la **identidad** se refiere a la capacidad de un objeto de "saber quién es", mientras que la **igualdad** es una característica configurable, que tiene que ver con comparar atributos para saber si dos objetos son similares.

Lo más habitual es utilizar `toEqual`, excepto que lo que se quiera verificar es efectivamente que el objeto es el mismo. Para tipos primitivos (números, strings, etc) ambos métodos funcionan de la misma manera.

Veamos un ejemplo, donde el primer test falla y el otro pasa:

```typescript
describe('Identidad VS igualdad', () => {
  const juanaAzurduy = { nombre: 'Juana' };
  const juanaDeArco = { nombre: 'Juana' };

  // ❌ Failed
  it('toBe compara por identidad', () => {
    expect(juanaAzurduy).toBe(juanaDeArco);
    /*
    Error: expect(received).toBe(expected) // Object.is equality
    If it should pass with deep equality, replace "toBe" with "toStrictEqual"

    Expected: {"nombre": "Juana"}
    Received: serializes to the same string
    */
  });

  // ✅ Passed
  it('toEqual compara por igualdad', () => {
    expect(juanaAzurduy).toEqual(juanaDeArco);
  });
});
```

### Un caso especial: números decimales

En informática, las operaciones con decimales suelen implementarse con una técnica llamada [**punto flotante**](http://puntoflotante.org/). Esta implementación trae aparejada una serie de imprecisiones, que afectan entre otras cosas a la [comparación](http://puntoflotante.org/errors/comparison/).

Para evitar casos en los que un test rompa porque `"se esperaba 2.78 pero se obtuvo 2.78000000001"`, estas comparaciones se suelen hacer con una cierta **tolerancia**, que indica cuál es el desfasaje máximo aceptable.

En Jest, la tolerancia se configura en la forma de _¿cuántos dígitos decimales me interesan?_:

```kotlin
// Esta cuenta dará algo como 2.78000000012
const numero = 2.1 + 0.68;

// Por defecto, solo mira los 2 primeros dígitos e ignora el resto
expect(numero).toBeCloseTo(2.781);

// Pero ese valor se puede modificar si queremos que considere más decimales
expect(numero).toBeCloseTo(2.78001, 4);
```

## Colecciones

| Sintaxis                                     | Sirve para verificar...                                        |
| -------------------------------------------- | -------------------------------------------------------------- |
| `expect(coleccion).toHaveLength(numero)`     | ...si la colección tiene **`numero` elementos**.               |
| `expect(coleccion).toContain(elemento)`      | ...si la colección **contiene** al `elemento` (por identidad). |
| `expect(coleccion).toContainEqual(elemento)` | ...si la colección **contiene** al `elemento` (por igualdad).  |

👀 **Ojo:** para entender la diferencia entre los ultimos dos, ver la sección [¿Igualdad o identidad?](#¿igualdad-o-identidad).

## Excepciones

Para chequear que un método o función falla se utiliza el matcher `toThrow` en cualquiera de sus variantes:

```kotlin
// Solo verifica que falle
expect(
  () => objeto.metodoQueDeberiaFallar()
).toThrow();

// Verifica que falle con cierto mensaje
expect(
  () => objeto.metodoQueDeberiaFallar()
).toThrow('Ups, esto no se pudo hacer');
```

## _Matchers_ parciales

Hay veces que puede resultar molesto tener que crear un objeto cuando en verdad solo nos interesan algunos atributos. En casos así podemos utilizar el matcher `toMatchObject`, que solamente verifica que el objeto en cuestión tiene los atributos que nos interesan (ignorando los demás).

Veamos un ejemplo:

```typescript
it('tiene las dimensiones adecuadas', () => {
  const mesa = {
    ancho: 50,
    largo: 150,
    madera: 'lapacho',
    color: 'natural',
  };

  // Solo comprueba que ancho y largo tengan los valores especificados.
  expect(mesa).toMatchObject({ ancho: 50, largo: 150 });
});
```

Este matcher funciona también para listas, y lo que hace en este caso es comparar uno a uno, **en orden**, los elementos, teniendo en cuenta solamente los atributos especificados. Si las listas no tienen la misma cantidad de elementos, falla.

```typescript
describe('toMatchObject en listas', () => {
  const mesaLapacho = {
    ancho: 50,
    largo: 150,
    madera: 'lapacho',
    color: 'natural',
  };

  const mesaPino = {
    ancho: 60,
    largo: 145,
    madera: 'pino',
    color: 'blanco',
  };

  // ✔️ Passed
  it('compara atributos, en orden', () => {
    expect([mesaPino, mesaLapacho]).toMatchObject([
      { madera: 'pino' },
      { madera: 'lapacho' },
    ]);
  });

  // ❌ Failed
  it('falla si los elementos están en otro orden', () => {
    expect([mesaPino, mesaLapacho]).toMatchObject([
      { madera: 'lapacho' },
      { madera: 'pino' },
    ]);
  });

  // ❌ Failed
  it('falla si la cantidad de elementos no coincide', () => {
    expect([mesaPino, mesaLapacho]).toMatchObject([{ madera: 'pino' }]);
  });
});
```
