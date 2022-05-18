# PGLTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Setting up the project

To properly setting up the project:

### Set up real API or...
1. Open \src\environments\environment_example.ts file. 
2. Provide your own x-api-key value into environment->headers:
    {
        name: 'x-api-key',
        value: '<**your_x-api-key_value_here**>'
    }
3. Save the file.
4. Change file name from "environment_example.ts" to "environment.ts".

### Set up mocked API
1. Open src\app\api\mock-api-example.ts file.
2. Provide proper API response.
3. Save the file.
4. Change file name from "mock-api-example.ts" to "mock-api.ts".