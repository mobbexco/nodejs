# Mobbex
[![Version](https://img.shields.io/npm/v/mobbex.svg)](https://www.npmjs.org/package/mobbex)
[![Build Status](https://travis-ci.org/GrosfeldEzekiel/mobbex-node.svg?branch=master)](https://travis-ci.org/GrosfeldEzekiel/mobbex-node)
[![Downloads](https://img.shields.io/npm/dt/mobbex.svg)](http://npmjs.com/package/mobbex)
[![License](https://img.shields.io/apm/l/vim-mode)](https://github.com/GrosfeldEzekiel/mobbex-node/blob/master/LICENSE)


## Instalación

Instalar el paquete usando:

```sh
npm install stripe --save
```

## Uso

### Configuración
El paquete debe ser configurado utilizando la clave API de la aplicación y el Token de Acceso de la entidad dentro de un objeto:

```javascript
const mobbex = require('mobbex')

mobbex.configurations.configure({
    apiKey: 'API-KEY',
    accessToken: 'ACCESS-TOKEN'
})
```
### Subscripciones

#### Susbscriptores
Para los ejemplos ``ID`` es el ID de la subscripción y ``SID` el ID del subscriptor

##### Crear
Para crear un nuevo subscriptor se utiliza ``subscribers.create`` pasando como parametros el ID de la subscripción y un objeto con el nuevo subscriptor:
```javascript
const subscriber =
{
  customer: {
    identification: "32321321",
    email: "demo@mobbex.com",
    name: "Demo User"
    },
  startDate: {
    day: 15,
    month: 5
    },
  reference: "demo_user_321"
}

mobbex.subscribers.create('ID', subscriber)
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Obtener todos
Para obtener todos los usarios de una subscripción se pasa como parametro el ID de la subscripción:
```javascript
mobbex.subscribers.all('ID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Buscar
Para buscar un subscriptor se pasan como parametros el ID de la subscripción y del subscriptor:
```javascript
mobbex.subscribers.find('ID', 'SID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Editar
Para editar un subscriptor se pasan como parametros el ID de la subscripción y del subscriptor y un objeto con los nuevos parametros. (Los parametros son opcionales):
```javascript
moobex.subscribers.edit('ID', 'SID', {
    total: 300,
    reference: 'new_reference'
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Suspender y Actiar
Para suspenderlo y activarlo se pasan como parametros el ID de la subscripción y del subscriptor:
```javascript
mobbex.subscribers.suspend('ID', 'SID')
    .then(data => console.log(data))
    .catch(error => console.log(error))

mobbex.subscribers.activate('ID', 'SID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Cambiar Agenda
Para cambiar su agenda se pasan como parametros el ID de la subscripción y del subscriptor y un objeto con la fecha de inicio:
```javascript
mobbex.subscribers.reschedule('ID', 'SID', {
    startDate: {
        day: 15,
        month: 5
    }
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Mover a otra subscripción
Para moverlo a otra subscripción se pasan como parametros el ID de la subscripción y del subscriptor y un objeto con el ID de la nueva subscripción:
```javascript
mobbex.subscribers.move('ID', 'SID', {
    sid: 'new_subscription_id'
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```
