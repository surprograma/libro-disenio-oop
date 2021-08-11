---
sidebar_position: 1
title: Guía de instalación IntelliJ Idea
description: Instrucciones para instalar el IDE para trabajar con Kotlin
---

# Windows

## Instalar JDK11

### 1-Chequear qué JDK tenés. Si tenés la JDK11, terminaste, si no tenés o tenés otra seguí:

Para abrir la consola en windows o CMD debemos tocar a la vez las teclas ([WINDOWS]+[R]), escribir `cmd` y tocar la tecla [Enter]

Dentro del CMD escribiremos `java -version` , en el caso de no tener ninguna versión instalada nos dirá:

```bash
"java" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable
```

### 2-Instalar:

Para esto deberán ir a **[Oracle](https://www.oracle.com/ar/java/technologies/javase-jdk11-downloads.html#license-lightbox)** donde se deben registrar, descargar e instalar esa version para luego reiniciar la máquina.

### 3-¿Tenes 2 o mas versiones de Java?

Debes seguir la siguiente **[Guia](http://programacionamartillazos.blogspot.com/2017/07/windows-como-setear-la-version-de-java.html)** para seleccionar JDK11

## Instalar Intellij IDEA

Descargar **[Intellij-IDEA](https://www.jetbrains.com/es-es/idea/download/download-thanks.html?platform=windows&code=IIC)**

# Ubuntu/Debian

## Instalar OpenJDK11

### 1-Chequear qué OpenJDK11 tenés. Si tenés la OpenJDK11, terminaste, si no tenés o tenés otra seguí:

Dentro de la Terminal escribiremos `java -version` , en el caso de no tener ninguna versión instalada nos dirá:

```bash
No se ha encontrado la orden «java», pero se puede instalar con... (dando opciones)
```

### 2-Instalar:

Dentro de la Terminal escribiremos

```bash
sudo apt install openjdk-11-jre-headless
```

### 3-¿Tenes la versión openjdk11?

Para esto volveremos a utilizar el mismo comando del punto 1, si dice que tenes `openjdk version "11.0.11" 2021-04-20` Segui con la instalación del intellij IDEA.

Si dice otra versión:

Dentro de la Terminal escribir lo siguiente:

```bash
sudo update-alternatives --config java
```

-Si tenemos una sola versión nos dirá:

```bash
Sólo hay una alternativa en el grupo de enlaces java (que provee /usr/bin/java)...
```

Esto quiere decir que debemos realizar el paso 2-instalación, porque no tenes la openjdk11 ni existe otra versión distinta en el sistema.

-Ahora, si existen dos versiones o mas dentro de nuestro sistema, nos dirá:

```bash
Existen X opciones para la alternativa de java (que provee /usr/bin/java)...
```

Mostrando una tabla con un número de seleccion a la izquierda de cada versión y la siguiente leyenda al final:

```bash
Pulse <Intro> para mantener el valor por omisión [*] o pulse un número de selección:
```

En este caso, debemos elegir el número correspondiente que contenga `java-11-openjdk` y pulsar [Enter]

## Instalar Intellij IDEA

Ubuntu 21.04

```bash
sudo snap install intellij-idea-community -classic
```

# Plugins - Intellij

![Kotlin](/img/docs/guia-instalacion-programas/intellij-plugin-kotlin.png)

![Kotest](/img/docs/guia-instalacion-programas/intellij-plugin-kotest.png)
