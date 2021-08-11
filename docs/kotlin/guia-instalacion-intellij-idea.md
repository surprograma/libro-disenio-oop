---
sidebar_position: 8
---

# <i class="fab fa-windows"></i> Windows 

## Instalar JDK11

### 1-Chequear qué JDK tenés. Si tenés la JDK11, terminaste, si no tenés o tenés otra seguí:
Para abrir la consola en windows o CMD debemos tocar a la vez las teclas ([WINDOWS]+[R]), escribir `cmd` y tocar la tecla [Enter]

Dentro del CMD escribiremos `java -version` , en el caso de no tener ninguna versión instalada nos dirá:
```bash
"java" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable
```
### 2-Instalar:

Para esto deberán ir a **[Oracle](https://www.oracle.com/ar/java/technologies/javase-jdk11-downloads.html#license-lightbox)** donde se deben registrar, descargar e instalar esa version para luego reiniciar la máquina.

### 3-¿Tenes 2 versiones de Java?

Debes seguir la siguiente **[Guia](http://programacionamartillazos.blogspot.com/2017/07/windows-como-setear-la-version-de-java.html)** para seleccionar JDK11

## Instalar Intellij IDEA

Descargar **[Intellij-IDEA](https://www.jetbrains.com/es-es/idea/download/download-thanks.html?platform=windows&code=IIC)**



# <i class="fab fa-ubuntu"></i> Ubuntu/Debian  

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
### 3-¿Tenes 2 versiones de Java?

Dentro de  la Terminal escribir lo siguiente, eso nos va a mostrar las opciones de java dentro de nuesto S.O para luego elegir OpenJDK11. 
```bash
sudo update-alternatives --config java
```

## Instalar Intellij IDEA
Ubuntu 21.04
    
```bash
sudo snap install intellij-idea-community -classic
```
# Plugins - Intellij
![Kotest](/img/docs/guia-instalacion-programas/intellij-plugin-kotest.png)

![Kotling](/img/docs/guia-instalacion-programas/intellij-plugin-kotling.png)
