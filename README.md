# Mobbex
[![Version](https://img.shields.io/npm/v/mobbex.svg)](https://www.npmjs.org/package/mobbex)
[![Build Status](https://travis-ci.org/mobbexco/nodejs.svg?branch=master)](https://travis-ci.org/github/mobbexco/nodejs)
[![Downloads](https://img.shields.io/npm/dt/mobbex.svg)](http://npmjs.com/package/mobbex)
[![License](https://img.shields.io/apm/l/vim-mode)](https://github.com/mobbexco/nodejs/blob/master/LICENSE)


## Instalación

Instalar el paquete usando:

```sh
npm install mobbex --save
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
En caso de necesitar utilizar el Audit Key, simplemente se agrega al objeto junto con la clave API y el Token de Acceso:
```javascript
mobbex.configurations.configure({
    apiKey: 'API-KEY',
    accessToken: 'ACESS-TOKEN',
    auditKey: 'AUDIT-KEY'
})
```

### Checkout
##### Crear
Para crear un checkout se utiliza ``checkout.create`` pasando como argumento el objeto del checkout:
```javascript
const checkout =
{
  total: 100.2,
  currency: "ARS",
  reference: "2982-2XtPXlgSaWccqUyobuv4sEmLYMV0N6oX6MoridMw",
  description: "Descripción de la Venta",
  items: [
    {
      image: "https://www.mobbex.com/wp-content/uploads/2019/03/web_logo.png",
      quantity: 2,
      description: "Mi Producto",
      total: 50,
    },
    {
      image: "https://www.mobbex.com/wp-content/uploads/2019/03/web_logo.png",
      quantity: 1,
      description: "Mi otro producto",
      total: 50.2,
    }],
  options: {
    domain: "midominio.com",
  },
  return_url: "https://mobbex.com/sale/return?session=56789",
  webhook: "https://mobbex.com/sale/webhook?user=1234"
}

mobbex.checkout.create(checkout)
    .then(data => console.log(data))
    .catch(error => console.log(error))
```
### Split
##### Checkout con Split
Para realizar un checkout con modalidad split se utiliza ``checkout.split``:
```javascript
const split =
{
  total: 1000,
  currency: "ars",
  reference: "12345",
  split: [
    {
      tax_id: "30121231235",
      total: 900,
      reference: "pago_1",
      fee: 100
    },
    {
      tax_id: "33213213216",
      total: 100,
      reference: "pago_2",
      fee: 80
    }
  ]
}

mobbex.checkout.split(split)
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Liberar Fondos
Para liberar fondos retenidos durante una operación de tipo Split simplemente se utiliza ``checkout.release``:
```javascript
mobbex.checkout.release('ID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

### Ordenes de Pago
##### Crear
Para crear un checkout se utiliza ``paymentOrder.create`` pasando como argumento el objeto de la orden de pago:
```javascript
paymentOder =
{
  total: 100,
  description: "Some Description #3",
  actions: [
    {
      icon: "attachment",
      title: "Factura",
      url: "https://speryans.com/mifactura/123"
    }
  ],
  reference: "mi_referencia_123"
}

mobbex.paymentOrder.create(paymentOrder)
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

### Métodos de Pago y Cuotas
##### Listado de Métodos de Pago
Para listar los métodos de pago se utiliza ``sources.list`` pasando como argumentos el código de acceso y el total:
```javascript
mobbex.sources.list("CODIGO", 200)
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

### Códigos de Barra o Insertados
##### Crear
Se utiliza ``paymentCode.create`` pasando como argumentos el código y un objeto con los parámetros:
```javascript
mobbex.paymentCode.create("CODIGO", {
    reference: 'reference',
    total: 3230,
    expiration: '01-12-2020'
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

### Fidelización
Para utilizar el módulo de fidelización es necesario configurar un Audit Key. Esto se puede realizar ya sea agregandolo al objeto de ``configurations.configure`` o utilizando ``configurations.setAuditKey('AUDIT-KEY')``

##### Búsqueda de Cuenta
Se utiliza ``loyalty.search`` pasando como argumento un objeto con la referencia:
```javascript
mobbex.loyalty.search({reference: "mi-referencia"})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Creación de Cuenta
Se utiliza ``loyalty.create`` pasando como argumento el objeto con los parámetros de la nueva cuenta:
```javascript
mobbex.loyalty.create({
    identification: "12312312",
    email: "demo@mobbex.com",
    tax_id: "30121231234"
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Balance de Cuenta
Se utiliza ``loyalty.balance`` pasando como argumento un objeto con la credencial:
```javascript
mobbex.loyalty.balance({credential: "123123123"})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Carga de puntos
Se utiliza ``loyalty.charge`` pasando como argumento el objeto con la información necesaria:
```javascript
mobbex.loyalty.charge({
    credential: "123123123",
    tax_id: '30121231234',
    points: 32,
    reference: 'chargeReference'
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

### Subscripciones
##### Crear
Para crear una subscripción se utiliza ``subscriptions.create`` pasando como argumento el objeto con la nueva subscripción:
```javascript
const subscription =
{
  total: 200.00,
  currency: 'ARS',
  name: 'Prueba',
  description: 'Prueba',
  type: 'dynamic',
  interval: '1m',
  trial: 1,
  limit: 0,
  webhook: 'http://webhook',
  return_url: 'http://return_url',
  features: ['accept_no_funds']
}

mobbex.subscriptions.create(subscripcion)
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Editar
Para editar una subscripción se pasan como argumentos el ID y un objeto con los cambios:
```javascript
mobbex.subscriptions.edit('ID', {total: 300.00})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Obtener todas
Para obtener todas las subscripciones:
```javascript
mobbex.subscriptions.all()
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Buscar
Para buscar una subscripción:
```javascript
mobbex.subscriptions.find('ID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Activar
Para activar una subscripción:
```javascript
mobbex.subscriptions.activate('ID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Eliminar
Para eliminar una subscripción:
```javascript
mobbex.subscriptions.delete('ID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

#### Suscriptores
Para los ejemplos ``ID`` es el ID de la subscripción y ``SID`` el ID del subscriptor

##### Crear
Para crear un nuevo subscriptor se utiliza ``subscribers.create`` pasando como argumentos el ID de la subscripción y un objeto con el nuevo subscriptor:
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
Para obtener todos los usuarios de una subscripción se pasa como argumento el ID de la subscripción:
```javascript
mobbex.subscribers.all('ID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Buscar
Para buscar un subscriptor se pasan como argumentos el ID de la subscripción y del subscriptor:
```javascript
mobbex.subscribers.find('ID', 'SID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Editar
Para editar un subscriptor se pasan como argumentos el ID de la subscripción y del subscriptor y un objeto con los nuevos parámetros. (Los parámetros son opcionales):
```javascript
moobex.subscribers.edit('ID', 'SID', {
    total: 300,
    reference: 'new_reference'
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Suspender y Activar
Para suspenderlo y activarlo se pasan como argumentos el ID de la subscripción y del subscriptor:
```javascript
mobbex.subscribers.suspend('ID', 'SID')
    .then(data => console.log(data))
    .catch(error => console.log(error))

mobbex.subscribers.activate('ID', 'SID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Cambiar Agenda
Para cambiar su agenda se pasan como argumentos el ID de la subscripción y del subscriptor y un objeto con la fecha de inicio:
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
Para moverlo a otra subscripción se pasan como argumentos el ID de la subscripción y del subscriptor y un objeto con el ID de la nueva subscripción:
```javascript
mobbex.subscribers.move('ID', 'SID', {
    sid: 'new_subscription_id'
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

### Dev Connect
##### Crear Solicitud
Para crear una solicitud se utiliza ``devConnect.create`` pasando como argumento el objeto con el url de retorno:
```javascript
mobbex.devConnect.create({
    return_url: "https://mobbex.com/"
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Obtener Credenciales
Para obtener credenciales se utiliza ``devConnect.get`` pasando como argumento el ID de la solicitud:
```javascript
mobbex.devConnect.get('ID')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

### Transacciones
##### Listar transacciones
Se utiliza ``transactions.get`` pasando como argumento la referencia de la factura o pago:
```javascript
mobbex.transactions.get("REFERENCIA")
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Listado y Búsqueda de Transacciones
Se utiliza ``transactions.search`` pasando como argumento el objeto con los parámetros de búsqueda. Por defecto se realiza un POST request, pero si se quiere realizar un GET request, se agrega ``'get'`` como segundo parametro:
```javascript
// POST REQUEST:
mobbex.transactions.search({
    // page y limit van dentro del objeto
    // a pesar de ser párametros en URL
    page: 1,
    limit: 10,
    currency: "ARS"
})
    .then(data => console.log(data))
    .catch(error => console.log(error))

// GET REQUEST:
mobbex.transactions.search({
    page: 1,
    limit: 10,
    currency: "ARS"
}, 'get')
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Devolución / Anulación
Se utiliza ``transactions.refund`` pasando como argumento el ID de la transacción:
```javascript
mobbex.transactions.refund("ID")
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Devolución Parcial
Se utiliza ``transactions.partialRefund`` pasando como argumentos el ID de la transacción y el total:
```javascript
mobbex.transactions.partialRefund("ID", 200)
    .then(data => console.log(data))
    .catch(error => console.log(error))
```

##### Capturar Operación
Se utiliza ``transactions.capture`` pasando como argumentos el ID de la transacción y el total:
```javascript
mobbex.transactions.capture("ID", 200)
    .then(data => console.log(data))
    .catch(error => console.log(error))
```
