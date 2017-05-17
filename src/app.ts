import * as angular from 'angular'; 
import {TodoController} from './app/Todo.Controller'; 
 
const myApp = angular.module('comtrade', []) 
     .controller('TodoController', TodoController); 
