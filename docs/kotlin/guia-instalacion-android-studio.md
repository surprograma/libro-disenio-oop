---
sidebar_position: 8
---

# Guía de instalación Android Studio

## Descargar el IDE

El entorno de desarrollo se puede descargar desde el siguiente link:
https://developer.android.com/studio

Ahí el sitio autodetectará la descarga más adecuada según su sistema operativo y arquitectura de procesador, aunque si lo que les ofrece no es correcto también pueden elegir una opción [acá](https://developer.android.com/studio#downloads).

## Instalar

- En Windows & macOS, seguir las instrucciones del instalador.
- En Linux, descargará un .zip que deberemos descomprimir en un directorio. Luego, desde una terminal situada en ese directorio haremos:
```bash
cd bin/ # nos movemos al subdirectorio bin/
./studio.sh # ejecutamos el script para lanzar el IDE
```

Para más información: https://developer.android.com/studio/install

## Configurar el SDK

La primera vez que abramos el software, descargará algunas herramientas necesarias como el Android SDK. Se recomienda seleccionar las últimas versiones del SDK y al menos una imagen de Android para correr los emuladores.

## Clonar el proyecto de prueba

En una terminal, ejecutar:

```bash
git clone https://github.com/obj2-unahur/android-proyecto-ejemplo
```

Esto creará la carpeta `android-proyecto-ejemplo` que luego podremos abrir con el Android Studio.

## Crear un emulador

En el siguiente menú accederemos a la lista de emuladores disponibles:
![image](https://user-images.githubusercontent.com/1631752/110283953-bc537800-7fbf-11eb-840e-2c8b746b79cc.png)

La pantalla es algo así:
![image](https://user-images.githubusercontent.com/1631752/110283992-d5f4bf80-7fbf-11eb-8ba1-a5295087ebf6.png)

En mi caso, tengo un solo emulador creado con Android 10. Con **Create Virtual Device...** se pueden crear emuladores eligiendo el tamaño de pantalla y versión del sistema operativo entre otras opciones. Para los tutoriales usaremos Android 10.

## Correr la aplicación

![image](https://user-images.githubusercontent.com/1631752/110284261-4a2f6300-7fc0-11eb-8a72-4f7e2867acb2.png)

Al tocar el botón de play, iniciará el emulador seleccionado y ejecutará la aplicación.

Si todo salió bien, veremos algo como esto:

![image](https://user-images.githubusercontent.com/1631752/110284319-63d0aa80-7fc0-11eb-8c6f-17291184b49d.png)

Para correr los tests, pueden ir al archivo `ContadorTest` y darle play.

![image](https://user-images.githubusercontent.com/1631752/110284438-967aa300-7fc0-11eb-8b35-07e4d0433e24.png)

:warning: Recordar que para que aparezca ese botón, deben tener instalado el plugin de Kotest:

![image](https://user-images.githubusercontent.com/1631752/110284531-b6aa6200-7fc0-11eb-9dec-b6a86acab903.png)

## Correr la aplicación en un teléfono real (opcional)

Para esto, debemos activar el **modo desarrollador** dentro de Android. Esta opción está en las opciones del sistema, dentro de _Acerca del teléfono_. Allí, hay que tocar unas 10 veces en donde dice _Número de compilación_ y aparecerán mensajes como "Estás a <5> pasos de ser desarrollador":

![image](https://user-images.githubusercontent.com/1631752/110411001-8a4a2080-8068-11eb-8b39-b6fadf976eb4.png)

Cuando nos diga que ya somos desarrolladores, aparecerá el menú _Opciones de desarrollador_ dentro de _Sistema_. Ahí deberemos habilitar _Depuración USB_:

![image](https://user-images.githubusercontent.com/1631752/110411585-9682ad80-8069-11eb-929e-aadc4f7dfce0.png)

Una vez hecho esto, ya podemos conectar el dispositivo a la PC. A la izquierda del botón de ejecutar tendremos un dropdown para seleccionar entre el teléfono físico conectado o el emulador:

![image](https://user-images.githubusercontent.com/1631752/110411771-dfd2fd00-8069-11eb-9657-eaf329c9f4e3.png)
