# security_weather

# 1. Documentación y Mejores Prácticas

## 1.1 Documentación del Proceso de Gestión de Secretos

*La gestión segura de claves y secretos es esencial en un proceso de CI/CD seguro. En este proyecto, se han utilizado GitHub Secrets para gestionar las claves de API y otras credenciales sensibles, y la integración automática de GitHub con Vercel para el despliegue continuo.* 

### 1.1.1 ¿Qué son los Secrets?

*Los Secrets son valores confidenciales, como claves API y tokens de autenticación, que no deben exponerse en el código fuente. GitHub proporciona un mecanismo para almacenar estos secretos de forma segura y utilizarlos durante la ejecución de pipelines de GitHub Actions. Al conectar Vercel con tu repositorio de GitHub, la gestión de despliegues se realiza automáticamente sin necesidad de exponer estas claves.* 

### 1.1.2 Gestión de Secrets en GitHub Actions

*En este proyecto, las claves API (como la de **OpenWeatherMap**) se almacenan como Secrets en GitHub para que puedan ser accedidas de forma segura por el pipeline de GitHub Actions.*

### Pasos para Configurar los Secrets en GitHub:

1. Ve al repositorio en GitHub.
2. Dirígete a **Settings** > **Secrets and variables** > **Actions**.
3. Haz clic en **New repository secret**.
4. Añade los Secrets necesarios, como ```WEATHER_API_KEY```.

### Uso de los Secrets en GitHub Actions:

*Los Secrets se acceden dentro del pipeline de GitHub Actions mediante la siguiente sintaxis:*

```
env:
  WEATHER_API_KEY: ${{ secrets.WEATHER_API_KEY }}
  GITHUB_TOKEN: ${{ secrets.TOKEN_GITHUB }}
```

### 1.1.3 Gestión de Secrets en GitHub Actions

*El despliegue automático a **Vercel** se realiza mediante la integración directa entre GitHub y Vercel. No es necesario manejar manualmente tokens de autenticación para el despliegue, ya que Vercel detecta automáticamente los cambios en el repositorio de GitHub y realiza el despliegue en función de los commits.*

#### Pasos para Conectar GitHub con Vercel:

1. Inicia sesión en [Vercel](https://vercel.com/).
2. Conecta tu repositorio de GitHub en Vercel seleccionando **New Project** y eligiendo el repositorio que deseas desplegar.
3. Configura las **variables de entorno** necesarias en la sección **Settings** del proyecto en Vercel.

## 1.2 Mejores Prácticas de Seguridad en la Gestión de CI/CD

### 1.2.1 No Exponer Claves Privadas en el Código

*Las **claves API** deben almacenarse en **GitHub Secrets** y nunca deben incluirse directamente en el código fuente o el repositorio de control de versiones.*

### 1.2.2 Uso de GitHub Secrets para Claves Sensibles

* Utiliza **GitHub Secrets** para almacenar y gestionar claves privadas.
* Evita exponer credenciales sensibles en archivos de configuración o el código fuente.

### 1.2.3 Escaneo de Repositorios en Búsqueda de Claves Expulsadas

*Utiliza herramientas como **GitGuardian** para escanear los repositorios y asegurarte de que no haya credenciales sensibles expuestas accidentalmente.*

### 1.2.4 Escaneo de Repositorios en Búsqueda de Claves Expulsadas

*Implementa la **rotación periódica** de claves mediante mecanismos automatizados o procedimientos internos para garantizar que las claves se mantengan seguras.*

### 1.2.5 Escaneo de Repositorios en Búsqueda de Claves Expulsadas

* Limita el acceso a los Secrets solo a los workflows o personas que los necesiten.

### 1.2.6 Monitoreo de Despliegues Automáticos en Vercel

*Monitorea los logs de despliegue y errores directamente desde el panel de Vercel. Los despliegues automáticos permiten la visibilidad completa del estado del proyecto y su comportamiento en producción.*

### 1.2.7 Uso de HTTPS para Todas las Comunicaciones

*Asegúrate de que todas las comunicaciones entre la aplicación y las API externas se realicen a través de **HTTPS** para proteger los datos durante la transmisión.*

# CI/CD Seguro con GitHub Actions y Vercel

## Descripción

*Este proyecto implementa un pipeline de CI/CD seguro utilizando GitHub Actions y despliegue automático a Vercel. La aplicación utiliza claves privadas y API keys que se gestionan de manera segura a través de **GitHub Secrets** y variables de entorno en **Vercel**.*

## Claves Privadas y Variables de Entorno

* ```WEATHER_API_KEY```: Esta clave API se utiliza para realizar solicitudes a la API de OpenWeatherMap.

*Las claves privadas se almacenan de forma segura en **GitHub Secrets** y las variables necesarias para el despliegue se configuran automáticamente en Vercel durante el proceso de despliegue.*

## Pipeline de CI/CD

*El pipeline de CI/CD está automatizado para ejecutar pruebas unitarias, construir el proyecto y desplegar automáticamente a Vercel. Durante este proceso, las claves privadas son accesibles de forma segura a través de **GitHub Secrets**.*

## Mejores Prácticas de Seguridad

1. **No exponer claves privadas en el código**: Todas las claves privadas están almacenadas en GitHub Secrets y las variables de entorno se configuran en Vercel.
2. **Rotación de claves**: Se recomienda implementar la rotación de claves de forma periódica.
3. **Monitoreo de despliegues**: Los logs de despliegue y errores se revisan directamente desde el panel de Vercel.