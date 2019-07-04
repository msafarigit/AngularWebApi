import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  baseUrl: string = 'http://localhost:61757/api/';

  constructor(private http:HttpClient) { }

  get(controllerName: string){
    return this.http.get(this.baseUrl + controllerName);
  }
}

//To define a class as a service in Angular, use the @Injectable() decorator to provide the metadata that allows Angular to inject it into a component as a dependency.
//  Similarly, use the @Injectable() decorator to indicate that a component or other class (such as another service, a pipe, or an NgModule) has a dependency.

//Providing services: You must register at least one provider of any service you are going to use.
//  The provider can be part of the service's own metadata, making that service available everywhere, 
//  or you can register providers with specific modules or components.
//  You register providers in the metadata of the service(in the @Injectable() decorator), or in the @NgModule() or @Component() metadata

//1- When you provide the service at the root level, Angular creates a single, shared instance of Service and injects it into any class that asks for it.
//  Registering the provider in the @Injectable() metadata also allows Angular to optimize an app by removing the service from the compiled app if it isn't used.

//2- When you register a provider with a specific NgModule, the same instance of a service is available to all components in that NgModule.
//  To register at this level, use the providers property of the @NgModule() decorator,
/*  @NgModule({
        providers: [
            Service
        ],
        ...
    })
*/

//3- When you register a provider at the component level, you get a new instance of the service with each new instance of that component.
//  At the component level, register a service provider in the providers property of the @Component() metadata.
/*  @Component({
        selector: 'app-hero-list',
        templateUrl: './hero-list.component.html',
        providers: [HeroService]
    })
*/

//Http methods return one value: All HttpClient methods return an RxJS Observable of something. 
//      HTTP is a request / response protocol.You make a request, it returns a single response.
//      In general, an observable can return multiple values over time.
//      An observable from HttpClient always emits a single value and then completes, never to emit again.
//      This particular HttpClient.get call returns an Observable <Hero[]>, literally "an observable of hero arrays".
//      In practice, it will only return a single hero array.

//HttpClient.get returns response data
//      HttpClient.get returns the body of the response as an untyped JSON object by default.
//      Applying the optional type specifier, <Hero[]> , gives you a typed result object.
//      The shape of the JSON data is determined by the server's data API. The Tour of Heroes data API returns the hero data as an array.

//The RxJS library:
//      Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change(Wikipedia).
//      RxJS(Reactive Extensions for JavaScript) is a library for reactive programming using observables 
//      that makes it easier to compose asynchronous or callback - based code(RxJS Docs).
//      RxJS provides an implementation of the Observable type, 
//      which is needed until the type becomes part of the language and until browsers support it.
//      The library also provides utility functions for creating and working with observables.These utility functions can be used for:
//          - Converting existing code for async operations into observables
//          - Iterating through the values in a stream
//          - Mapping values to different types
//          - Filtering streams
//          - Composing multiple streams

//In order to show how subscribing works, we need to create a new observable. 
// There is a constructor that you use to create new instances, but for illustration, 
// we can use some methods from the RxJS library that create simple observables of frequently used types:
//      - of(...items) —Returns an Observable instance that synchronously delivers the values provided as arguments.
//      - from(iterable) —Converts its argument to an Observable instance.This method is commonly used to convert an array to an observable.

/*
Observables: 
 Observables provide support for passing messages between publishers and subscribers in your application. 
 Observables offer significant benefits over other techniques for event handling, asynchronous programming, and handling multiple values.

Observables are declarative—that is, you define a function for publishing values, 
 but it is not executed until a consumer subscribes to it. 
 The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.

An observable can deliver multiple values of any type—literals, messages, or events, depending on the context. 
 The API for receiving values is the same whether the values are delivered synchronously or asynchronously. 
 Because setup and teardown logic are both handled by the observable, 
 your application code only needs to worry about subscribing to consume values, and when done, unsubscribing. 
 Whether the stream was keystrokes, an HTTP response, or an interval timer, 
 the interface for listening to values and stopping listening is the same.

Defining observers:
 A handler for receiving observable notifications implements the Observer interface. 
 It is an object that defines callback methods to handle the three types of notifications that an observable can send:

    NOTIFICATION TYPE	DESCRIPTION
    next	            Required. A handler for each delivered value. Called zero or more times after execution starts.
    error	            Optional. A handler for an error notification. An error halts execution of the observable instance.
    complete	        Optional. A handler for the execution-complete notification. 
                    Delayed values can continue to be delivered to the next handler after execution is complete.

An observer object can define any combination of these handlers. 
If you don't supply a handler for a notification type, the observer ignores notifications of that type.
*/

/* Observables in Angular:
Angular makes use of observables as an interface to handle a variety of common asynchronous operations. For example:

    - The EventEmitter class extends Observable.
    - The HTTP module uses observables to handle AJAX requests and responses.
    - The Router and Forms modules use observables to listen for and respond to user-input events.

HTTP
Angular’s HttpClient returns observables from HTTP method calls. 
For instance, http.get(‘/api’) returns an observable. This provides several advantages over promise-based HTTP APIs:
    * Observables do not mutate the server response (as can occur through chained .then() calls on promises). 
      Instead, you can use a series of operators to transform values as needed.
    * HTTP requests are cancellable through the unsubscribe() method.
    * Requests can be configured to get progress event updates.
    * Failed requests can be retried easily.
 */

/*
 AsyncPipe: PIPE, IMPURE
Unwraps a value from an asynchronous primitive. 
    {{ obj_expression | async }}

NgModule: CommonModule
Input value: obj	Observable | Promise
Description: The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. 
             When a new value is emitted, the async pipe marks the component to be checked for changes.
             When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.

The following example binds the time observable to the component's view. 
The observable continuously updates the view with the current time.

        @Component({
          selector: 'async-observable-pipe',
          template: `<div><code>observable|async</code>:
               Time: {{ time | async }}</div>`
        })

        export class AsyncObservablePipeComponent {
          time = new Observable(observer =>
            setInterval(() => observer.next(new Date().toString()), 1000)
          );
        }
 */


/*
 Sample: Return distinct message for sent, upload progress, & response events

        private getEventMessage(event: HttpEvent < any >, file: File) {
            switch (event.type) {
                case HttpEventType.Sent:
                    return `Uploading file "${file.name}" of size ${file.size}.`;
        
                case HttpEventType.UploadProgress:
                    // Compute and show the % done:
                    const percentDone = Math.round(100 * event.loaded / event.total);
                    return `File "${file.name}" is ${percentDone}% uploaded.`;
        
                case HttpEventType.Response:
                    return `File "${file.name}" was completely uploaded!`;
        
                default:
                    return `File "${file.name}" surprising upload event: ${event.type}.`;
            }
        }
 
 Sample: The `HttpClient.request` API produces a raw event stream which includes start (sent), progress, and response events.

        return this.http.request(req).pipe(
          map(event => this.getEventMessage(event, file)),
          tap(message => this.showProgress(message)),
          last(), // return last (completed) message to caller
          catchError(this.handleError(file))
        );
 
 Sample: Interceptors can handle requests by themselves, without forwarding to next.handle().

        @Injectable()
        export class CachingInterceptor implements HttpInterceptor {
          constructor(private cache: RequestCache) {}
        
          intercept(req: HttpRequest<any>, next: HttpHandler) {
            // continue if not cachable.
            if (!isCachable(req)) { return next.handle(req); }
        
            const cachedResponse = this.cache.get(req);
            return cachedResponse ?
              of(cachedResponse) : sendRequest(req, next, this.cache);
          }
        }
 
 search(term:string) {
    let promise = new Promise((resolve, reject) => {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        this.http.get(apiURL)
                 .toPromise()
                 .then(res => 
                 { // Success
                    console.log(res.json());
                    resolve();
                 });
  });
  return promise;
}
 */