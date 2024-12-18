# angular life Cycle
https://angular.dev/guide/components/lifecycle

constructor
ngOnInIt()
ngOnchange()
ngDoCheck();
ngAfterContentViewInIt
ngAfterContentChecked

ngAfterViewInit()
ngAfterViewInit

ngNextRender()
fterRender

ngOnDestroy()


# Components in Angular
https://medium.com/@jaysrisaravanan/what-is-component-in-angular-344762207a86
Angular follows a component-based architecture, which is a fundamental concept in Angular, and plays a crucial role in structuring and organizing Angular applications.
It helps break down the application into smaller, reusable building blocks called components.
A Component is a key feature of Angular that acts as the basic UI building block of an Angular application

## A component is nothing but a TypeScript class with a decorator (@). 
It contains methods and properties that can be used in HTML files.

Components are designed to be reusable. Once you create a component for a particular part of your application, you can use it multiple times throughout your application. 

AppComponent
When you create a new Angular project using the Angular cli command (ng new project-name), by default it will create a component called AppComponent in src/app.

selector
templateUrl
styleUrls


# What are Decorators in Angular?
[text](https://www.geeksforgeeks.org/what-are-decorators-in-angular/)
decorators are functions that are used to modify the behavior of classes and their members.
They provide a way to add metadata or apply transformations to code elements.
In Angular, decorators are extensively used to define components, services, directives, pipes, modules, and more.


Types of Decorators in Angular

Class Decorators
Class decorators are applied to classes to modify their behavior or metadata
The examples include @Component, @Directive and @NgModule.

Property Decorators
Property decorators are applied to the class properties and are commonly used to modify the properties within the classes
For example, @Input decorator makes a property as an input binding, allowing it to bound to the external data.

Method Decorators:
Method decorators are applied to the class methods and modify their behavior or add additional functionalities. For example, @HostListener allows us to listen for events on a method.

Parameter Decorators:
The Parameter decorators are used for parameters inside class constructors. The parameter decorators provide additional information about constructor parameters.
@Inject decorator allows to specify dependencies for dependency injection.

# What are Observables in Angular?
[text](https://medium.com/nerd-for-tech/what-are-observables-in-angular-5e89d159a4e6)

 Observable is a powerful tool for handling asynchronous operations and data streams.It is part of the RxJS library, which is heavily integrated into Angular.

Data Stream:
An Observable represents a stream of values that can be emitted over time. This is different from a Promise, which only resolves to a single value.

Asynchronous Operations:
Observables are perfect for handling asynchronous tasks like HTTP requests, user input events, and timers.

Powerful Operators:
RxJS provides a wide range of operators that allow you to transform, filter, combine, and manipulate data streams.

Import RxJS:
Create Observables:create Observables from various sources, such as HTTP requests, events, or custom data.
Subscribe to Observables: o receive values from an Observable, you need to subscribe to it. 
Unsubscribe : It's essential to unsubscribe from Observables when you no longer need them to prevent memory leaks.

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.css']
})
export class MyComponent {
  data$: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data$ = this.http.get('https://api.example.com/data');

    this.data$.subscribe(response => {
      console.log(response);
    });
  }
}



what is dependency injection in angular