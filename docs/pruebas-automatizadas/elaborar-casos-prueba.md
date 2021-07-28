---
sidebar_position: 1
---

# ¿Cómo elaborar casos de prueba?

Este artículo presenta algunas guías para desarrollar los casos de prueba, considerando que ya tienen una base de testeo unitario automatizado.

# Ejemplo

Una ferretería tiene en cuenta ciertos aspectos para decidir si le puede fiar a un cliente o no.

- Al cliente particular le fia sólo si no adeuda nada, es decir debe $0.
- A las constructoras les fia dependiendo de cuántos albañiles trabajen en la obra, si son 5 o más albañiles le fía hasta 10.000, de lo contrario sólo hasta 5.000.

# Definiendo los escenarios

En base al ejemplo anterior, podemos considerar los siguientes escenarios:

- Para un cliente particular: Si debe $1 ó $50.000 no nos importa, porque está en la misma clase de equivalencia (La deuda es mayor a 0).
- Para una empresa constructora:
  - Si tiene **menos** de 5 albañiles, son `"pocos”` albañiles.
  - Si tiene **al menos** 5 albañiles, son `“muchos”` albañiles.

**Elegimos la cantidad de obreros en base al valor límite:**
Pensar que si a partir de los 5 albañiles se considera mucho y 4 o menos son “pocos”, 5 o más es el valor de una obra con muchos albañiles y 4 o menos el de una obra con pocos albañiles

# Estructura de los tests

La estructura que tienen los tests en base a los escenarios propuestos podría ser:

- Dado un cliente particular:
  - **Que debe algo:** No se le puede fiar.
  - **Que no debe nada:** Se le puede fiar.
- Dado una constructora con muchos albañiles (5):
  - **Si la obra debe más de $ 10.000:** No se le puede fiar.
  - **Si la obra debe menos de $ 10.000:** Se le puede fiar.
- Dado una constructora con pocos albañiles (4):
  - **Si la obra debe más de $ 5.000:** No se le puede fiar.
  - **Si la obra debe menos de $ 5.000:** Se le puede fiar.

# Definiendo las clases y las variables de los tests

Necesitamos:

- Un cliente particular.
- Una empresa constructora con 6 albañiles.
- Otra empresa constructora con 5 albañiles.

A los que podemos configurar diferentes grados de deuda.

# Expresividad en los tests

En la materia es muy común encontrarse con enunciados cómo el siguiente:

> La Constructora Hurlingham tiene 5 albañiles y una deuda de 7000 pesos.
> Por lo que sería muy tentador hacer un test cómo el siguiente:

```kotlin
class FerreteriaTest : DescribeSpec({
  val ferreteria = Ferreteria()

  describe("Puede fiar") {
    val constructoraHurlingham = EmpresaConstructora(albaniles= 5, deuda = 7000)

    it("ConstructoraHurlingham") {
        ferreteria.puedeFiarA(constructoraHurlingham).shouldBeTrue()
    }
  }
})
```

### ¿Cuál sería el problema con un nombre así?

Un test así tendría que pasar, pero supongamos que hay un error en el código que establece cuando se le puede fiar a una empresa dependiendo de si es chica o no.

> - Si tiene **al menos** 5 albañiles, son `“muchos”` albañiles.

```kotlin
class EmpresaConstructora(var albaniles: Int, deuda: Int): Cliente(deuda) {
    fun limiteDeEmpresa() = if(albaniles > 5) 10000 else 5000 //Cambiamos la condición del if para que un caso que debería funcionar falle
    override fun lePuedenFiar() = deuda <= this.limiteDeEmpresa()
}
```

![Caso triste](/img/docs/elaborar-casos-prueba/test-poco-expresivo.jpg)

Cómo se puede ver en la imagen un test que debería pasar no pasa, pero es dificil sondear el error, ya que puede que no sepamos o nos olvidemos de lo que es `Constructora Hurlingham` y tengamos que ver cómo está armado el test y que es lo que prueba, en cambio si hacemos algo por el estilo...

```kotlin
class FerreteriaTest : DescribeSpec({
  val ferreteria = Ferreteria()

  describe("Puede fiar") {
    val constructoraHurlingham = EmpresaConstructora(albaniles= 5, deuda = 7000)

    it("Constructora con muchos albañiles (al menos 5)") {
        ferreteria.puedeFiarA(constructoraHurlingham).shouldBeTrue()
    }
  }
})
```

![Caso feliz](/img/docs/elaborar-casos-prueba/test-expresivo.jpg)

El error es mucho más evidente ya que podemos saber que está fallando una constructora con muchos albañiles(tiene al menos 5 albañiles).

# Recomendaciones adicionales

## ¿Cómo agrupar los escenarios?

Una posibilidad es agrupar por diferentes `describe` por cada caso de prueba.
Tener en un sólo `describe` o `it` para muchos tests no es una buena práctica porque:

- Dificulta diferenciar los escenarios.
- Las variables de los tests van a estar mezcladas.
- La clase a testear pierde cohesión.
- Un sólo test está cubriendo todos los casos de prueba y si construimos un fixture con cada uno de los tipos de cliente en el setup, estamos penalizando a cada uno de los tests por lo que necesitan los demás ¿tiene sentido crear una constructora con 5 albañiles si estoy testeando una que tiene 6?

Por lo que en la materia les aconsejamos, para este ejemplo:
Un `describe` por cada tipo de cliente, y un `it` para cada caso a testear. Cabe destacar que para el caso de las constructoras, poner un `describe` para los 2 casos de constructoras.

# Pasando a un ejemplo práctico:

En un nuevo archivo llamese `clientesTest.kt`, con un nombre que evidencia la clase que se va a testear más no lo que se está testeando **Ej**: `clienteConstructoraCon5Albaniles.kt`, ya que se pueden testear muchas cosas en un mismo archivo.

Al igual que los desribes e its, elegir nombres para las instancias de los objetos que especifiquen que es lo que testea es sumamente importante.

No es lo mismo: `val miConstructora = EmpresaConstructora(albaniles= 3, deuda = 0)` que ` empresaConstructoraSinDeudas EmpresaConstructora(albaniles= 5, deuda = 7000)`

```kotlin
class ClientesTest : DescribeSpec({
  val ferreteria = Ferreteria()

  describe("Puede fiar a clientes") {
    describe("A un cliente particular") {
      //Elegir nombres que represente la clase de equivalencia que estamos modelando.
      val clienteParticular = ClienteParticular(deuda=0)
      val clienteParticularDeudor = ClienteParticular(deuda=50)

      it("Sin deudas") {
          ferreteria.puedeFiarA(clienteParticular).shouldBeTrue()
        }

      it("Que adeuda algo") {
        ferreteria.puedeFiarA(clienteParticularDeudor).shouldBeFalse()
      }
    }

    describe("A una empresa constructora") {
      val empresaConstructoraChica = EmpresaConstructora(albaniles=4, deuda=5000)
      val empresaConstructoraGrande = EmpresaConstructora(albaniles=5 deuda=10000)

      describe("Con menos de 5 albañiles") {
        it("Si adeuda hasta 5.000")
        ferreteria.puedeFiarA(empresaConstructoraChica).shouldBeTrue()

        it("Si adeuda más de 5.000") {
          empresaConstructoraChica.generarDeudaPor(1000)

          //Notar que ahora la deuda de la "empresaConstructoraChica" va a ser de 6.000
          empresaConstructoraChica.deuda.shouldBe(6000)

          ferreteria.puedeFiarA(empresaConstructoraChica).shouldBeFalse()
        }
      }

      describe("Con 5 albañiles") {
        it("Si adeuda hasta 10.000") {
          ferreteria.puedeFiarA(empresaConstructoraGrande).shouldBeTrue()
        }

        it("Si adeuda más de 10.000") {
          empresaConstructoraGrande.generarDeudaPor(1000)

          //Notar que ahora la deuda de la "empresaConstructoraGrande" va a ser de 6.000
          empresaConstructoraGrande.deuda.shouldBe(11000)

          ferreteria.puedeFiarA(empresaConstructoraGrande).shouldBeFalse()
        }
      }
    }
  }
```

## AAA Pattern

Los tests suelen estructurarse según el patrón AAA: Arrange, Act y Assert.

- **Arrange**: Que podría traducirse, cómo arreglar o gestionar, en dónde se instancian los objetos a testear(la Ferreteria y los Clientes). Cuando los contextos son compartidos, los frameworks basados en xUnit (JUnit5 es uno de ellos) nos permiten ubicarlo en un método setup (@BeforeEach). La desventaja de esta técnica es que para tener una idea general de los elementos que participan en el test debemos mirar el test y el setup, por eso una alternativa suele ser tener métodos en el test que construyen el escenario que se necesita:

- **Act**: Son las operaciones que tienen efecto. por ejemplo el método del cliente `generarDeudaPor(cantidad)`. Hay tests que quizás no necesiten disparar acciones, y está bien que eso ocurra.

- **Assert**: Lo que esperamos que pase, generalmente asociado a las respuestas que da el envío de un mensaje al objeto testeado.

## One assert per test

Hay ciertas controversias respecto a si podemos tener varios asserts en el mismo test, ya que cuando el primer assert falla los siguientes no se siguen evaluando: esto en realidad depende del runner de xUnit, podríamos eventualmente trabajar con un framework que continue buscando asserts y discrimine cuáles anduvieron y cuáles no (RSpec, framework de testeo para Ruby, hace ésto).

Por lo que nuestro consejo es: Los tests deben fallar por exactamente un solo motivo, esto relaja esa restricción.
En resúmen lo importante no es tener un solo `assert`, sino que todos los `asserts` estén relacionados con la misma funcionalidad.

```kotlin
describe("Nuestros empleados"){
  it("Obtener correctamente nuestros Empleados") {
    val albaniles =  mutableListOf("Bruno", "Ricardo", "Damián")
    albaniles.size.shouldBe(3)
    albaniles.get(0).shouldBe("Bruno")
    albaniles.get(1).shouldBe("Ricardo")
    albaniles.get(2).shouldBe("Damián")
  }
}
```

## Resúmen

- Armá escenarios que definan las clases de tests.
- Definí los `describe` e `it` según corresopnda para cada test, de manera de entender qué estamos testeando. El cómo lo terminás de ver en el código, evitá duplicidades entre el texto que explica y el código escrito.
- Evitá que un `describe` tenga muchos escenarios juntos, es más difícil seguirlos.
- Los nombres de las variables deben reflejar la clase de equivalencia que están resolviendo, y no casos particulares (sí empresaConstructoraChica, no empresita o miEmpresa).
- Los tests se suelen estructurar utilizando las tres A: Arrange (el setup que conviene mantenerlo simple), Act (operaciones con efecto cuando corresponde) y Assert (las aserciones que pueden ser más de una por cada test, pero deben testear el mismo concepto).

## Créditos

Fuente Original [Testeo unitario avanzado](http://wiki.uqbar.org/wiki/articles/testeo-unitario-avanzado.html), elaborado por Fernando Dodino para `Uqbar Project`. Transformado a Markdown y adaptado a Kotlin por Pablo Gerez para UNaHur.
