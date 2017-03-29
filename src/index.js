import angular from 'angular';
import components from './components';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import './scss/main.scss';
import '../vendor/angularSlideables.js';




const app = angular.module('myApp', [
    components,
    uiRouter,
    'angularSlideables'
]);

app.config(routes);




