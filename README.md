## Aplicación del Clima en Node -- App de consola

Esta aplicación recibe el nombre de la ciudad y país para consultar la temperatura.

Ejecutar este comando para instalar las librerías

```
npm install

```

### Agregar las llaves de API

En la carpeta 'apis/' se encuentran dos carpetas más:
- 'geocode_api/' que tiene un archivo llamado 'geocode.json'
  En ella hay que colocar la llave de la API de geocode de Google Maps:
  ```
  [{ "key": "HERE_GOES_THE_KEY" }]

  ```

- 'openweathermap_api/' que tiene un archivo llamado 'openweather.json'
  En ella hay que colocar la llave de la API de OpenWeatherMaps:
  ```
  [{ "key": "HERE_GOES_THE_KEY" }]

  ```

### Ejemplo de uso de la App: 

```
node app -d 'Punto fijo Venezuela'

```

## Weather Application made in Node -- console app

This application take the name of the city and country for wich you want to know the weather temperature.

Execute this command to install the libraries

```
npm install

```

### Add the API keys

Inside the 'apis/' folder the are two other folders:
- 'geocode_api/' which has a file named 'geocode.json'
  In this file you will need to insert the API key for Google Maps geocode:
  ```
  [{ "key": "HERE_GOES_THE_KEY" }]

  ```

- 'openweathermap_api/' which has a file named 'openweather.json'
  In this file you will need to insert the API key for OpenWeatherMap:
  ```
  [{ "key": "HERE_GOES_THE_KEY" }]

  ```

### Example of App usage: 

```
node app -d 'Punto fijo Venezuela'

```