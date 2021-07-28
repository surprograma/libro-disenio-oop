---
sidebar_position: 3
---

# LocalDateTime en un minuto

Básicamente son clases nativas de Java 8, que sirven para representar momentos en el tiempo. Como hemos dicho en alguna otra oportunidad, en Kotlin se puede usar cualquier clase de Java, y por eso es que Kotlin no incluye una API propia para manejar fechas.

Con `LocalDate` podemos representar una fecha, y con `LocalDateTime` una fecha y una hora.

## Métodos que pueden ser de interés

A continuación, un ejemplo utilizando `LocalDate`:

``` kotlin
import java.time.LocalDate

// Instancia de LocalDate con los valores de la fecha actual del sistema.
val fechaActual = LocalDate.now()
>>> 2020-08-28

// Instancia de LocalDate con valores que recibe por parámetro.
// Notar que el orden es de mayor a menor: año, mes, día
val renunciaDeLaRua = LocalDate.of(2001, 12, 20)
>>> 2001-12-20

// Devuelve un booleano indicando si la fecha es posterior
// a la que viene por parámetro.
fechaActual.isAfter(renunciaDeLaRua)
>>> true

// Como arriba, pero al revés.
fechaActual.isBefore(renunciaDeLaRua)
>>> false
```

Exactamente lo mismo podría hacerse con `LocalDateTime`, agregando en la creación los valores de hora, minutos y segundos:

```kotlin
import java.time.LocalDateTime

val inicioAislamientoArgentina = LocalDateTime.of(2020, 3, 20, 0, 0, 0)
```

Esto es bien bien básico, pero suficiente para resolver varios ejercicios de la materia. Te dejamos la documentación oficial de [`LocalDateTime`](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDateTime.html) y la de [`LocalDate`](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html) por si querés chusmear algo más.
