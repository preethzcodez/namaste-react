# NAMASTE REACT - ASSIGNMENT 09 - OPTIMIZING OUR APP

  

## CODING
-   Create your custom hooks
-   Try out lazy and suspense
-   Make your code clean.

## THEORY
### 01. When and why do we need lazy()? 
Lazy loading is used when we want to load a component only when it is actually needed (i.e. when it is visible on the screen). This helps in improving the initial loading performance of the application. The `lazy()` method is used to wrap a component that we want to load lazily.

### 02. What is suspense? 
Suspense is a new feature in React that allows you to "suspend" the rendering of a component while some data is being loaded, and then display a fallback UI (such as a loading indicator) in its place. When the data is ready, the component continues rendering.

### 03. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error? 
The error "A component suspended while responding to synchronous input" occurs when a component tries to access data that is not yet available, and suspends its rendering until the data is ready. This causes the UI to be replaced with a loading indicator. The startTransition method can be used to wrap updates that may suspend, which fixes this error.

### 04. Advantages and disadvantages of using this code splitting pattern? 
Advantages of using code splitting and lazy loading include improved initial loading performance, smaller bundles size, and the ability to only load the code needed for a specific route. The main disadvantage is that it can add some complexity to the code, and may make it more difficult to debug.

### 05. When do we and why do we need suspense?
Suspense can be useful when we want to show a loading indicator while data is being fetched, instead of showing an empty or partially-loaded component. This can improve the user experience and provide a more polished look to our application.