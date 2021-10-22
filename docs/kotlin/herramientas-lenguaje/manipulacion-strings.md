---
sidebar_position: 5
title: Manipulación de strings
description: Algunas técnicas útiles para quedarnos con partes de un texto.
---

Es muy usual que en nuestros programas tengamos que manipular _strings_ o cadenas de texto: separar el nombre del apellido, quedarnos solamente con los primeros tres caracteres, quitar espacios de más, etc.

En este apunte, rasgaremos apenas la superficie para mostrar algunas cosas que se pueden hacer. Como siempre, recomendamos leer [la documentación oficial](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/) para conocer qué otros métodos hay.

## Los _strings_ son listas

Es interesante notar que, en Kotlin, los _strings_ son en efecto listas de caracteres. En general esa particularidad no nos afecta en nada, pero tiene la consecuencia positiva de que podemos usar todos [los métodos que ya conocemos para las listas](http://localhost:3000/libro-disenio-oop/docs/kotlin/herramientas-lenguaje/wollok-a-kotlin/#colecciones).

Vamos con algunos ejemplos:

```kotlin
// Se queda con los caracteres que no son la 'e'.
// (👀 dentro del filter usamos comillas simples
// porque estamos trabajando con caracteres, no con strings)
"ola ke ase".filterNot { it == 'e' }
>> "ola k as"

// Toma solamente los primeros 3 caracteres.
"oye cómo va".take(3)
>> "oye"

// Descarta los primeros 4 caracteres.
"oye cómo va".drop(4)
>> "cómo va"
```

## Operaciones habituales

Todos los métodos que vienen a continuación **devuelve un nuevo _string_**. En ningún caso modifican el original ([mutaciones controladas](/docs/cualidades-disenio/cualidades-independientes-tecnologia/#mutaciones-controladas) :smirk:).

| Sintaxis                        | Comportamiento                                                                                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `replace(viejo, nuevo)`         | Reemplaza todas las veces que aparezca el _string_ `viejo` por `nuevo`.                                                                                                                           |
| `toUppercase() / toLowerCase()` | Convierten el texto en mayúsculas (upper) y en minúsculas (lower) respectivamente.                                                                                                                |
| `substring(inicio, fin)`        | Devuelve un _string_ que va desde el caracter número `inicio` hasta el caracter número `fin`, contando desde 0. Si se omite el parámetro `fin`, corta desde `inicio` hasta el final del _string_. |
| `trim()`                        | Devuelve un _string_ sin espacios de más ni al principio ni al final.                                                                                                                             |

## Separar... y volver a unir

Otra tarea que resulta habitual es la de querer separar un _string_ según un cierto caracter y también la inversa: querer unir una lista de _strings_ en un solo texto. Estas tareas en Kotlin se pueden lograr con dos métodos: `texto.split(delimitador)` y `lista.joinToString(separador)`.

Veamos unos ejemplos:

```kotlin
// Separo el texto por sus espacios: " "
"Ing. Juana Beduarte López".split(" ")
>> ["Ing.", "Juana", "Beduarte", "López"]

// Junto una lista, poniendo guiones en el medio.
// Notar que la lista puede ser de cualquier tipo que pueda convertirse en string.
[11, 3123, 0304].joinToString("-")
>> "11-3123-0304"
```

Luego, usando un poco la imaginación, podemos combinar esto con los métodos de arriba para hacer manipulaciones más complejas:

```kotlin
// Separamos y nos quedamos con los dos últimos elementos,
// asumiendo que el apellido es compuesto (paterno y materno).
fun soloApellido(nombreCompleto: String) = nombreCompleto.split(" ").takeLast(2)

// Asumiendo que viene algo de la forma "Sr. Pedro Díaz",
// nos quedamos con lo que viene después del título, "Pedro Díaz" en ese ejemplo.
fun sinTitulo(nombreCompleto: String) = nombreCompleto.split(" ").drop(1).joinToString(" ")
```
