# AngularElements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# Angular-elements

Paste the following code in the body to use this element:

```HTML
  <app-counter counter="10"></app-counter>
  <script type="text/javascript" src="https://rawgit.com/Koen967/Angular-elements/master/elements/counter.js"></script>
```
Angular elements is not yet at a comfortable stage to use. I've found that with the implementations that I've tried that there are problems with loading multiple elements in one project. There is also an issue with loading elements in pages that are deeper than the index.html. This is because the javascript script that is needed to display the element won't get loaded. And finally when bundeling the component to export as element. You also include the zone.js file. This'll cause for errors in other Angular applications because Angular will try to load this script twice. Once for the app itself and once for every element you try to add.
