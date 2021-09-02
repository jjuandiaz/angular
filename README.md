# ServicioTransferencia

Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.
para prueba tecnica de multitienda RP, simulando un sistema bancario de transferencias a destinatarios.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Tecnologias utilizadas
1.- Mongodb
2.- Node utilizando framework express para el backend
3.- Angular 8 Frontend

se consume un API mediante GET

En primer lugar se crean los componentes:
1.- persona
2.- transferencia
3.- historial de transacciones

luego de lo anterior se agrega firebase para incorporar metodo de auth al login 
usuario: admin@demo.cl
clave: 123456
## Build

ejecutar `ng build` para construir el proyecto para produccion. Los artefactos de la construccion del proyecto se encuentran en  `dist/` directorio.
instalar firebase para hospedarlo en el mismo

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
