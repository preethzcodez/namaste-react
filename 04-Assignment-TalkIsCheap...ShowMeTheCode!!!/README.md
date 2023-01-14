# NAMASTE REACT - ASSIGNMENT 04 - TALK IS CHEAP... SHOW ME THE CODE !!!

## CODING
- Build a Food Ordering App
- Think of a cool name for your app
- Build a AppLayout
- Build a Header Component with Logo & Nav Items & Cart
- Build a Body Component
- - Build RestaurantList Component
- - Build RestaurantCard Component
- - - Use static data initially
- - - Make your card dynamic(pass in props)
- - - - Props - passing arguments to a function - Use Destructuring & Spread operator
- - - Render your cards with dynamic data of restaurants
- - - Use Array.map to render all the restaurants

## THEORY

### 01. Is JSX mandatory for React?
No, JSX is not mandatory for React. However, it is a syntax extension for JavaScript that allows you to write HTML-like elements in your JavaScript code. It is used to describe the structure of a React component and is often used in combination with React to create user interfaces. While you can use React without JSX, many developers find it to be a convenient and powerful way to write React components.

### 02. Is ES6 mandatory for React?
No, ES6 is not mandatory for React. However, it is a widely used version of JavaScript that includes many new features that can make your code more concise and easier to maintain.
Many React tutorials and examples use ES6 syntax, so it is a recommended to have a basic understanding of it. Also, many features of ES6 are supported by modern browsers and JavaScript runtimes, so it's easier to use the features of ES6 for modern web development.

It is possible to use React with older versions of JavaScript, but using ES6 can make your code more readable and maintainable.

### 03. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
In JSX, the syntax {TitleComponent} is used to reference a variable or import that holds a React component. It is called a component reference.

The syntax {<TitleComponent/>} and {<TitleComponent></TitleComponent>} is used to create and render an instance of the TitleComponent component. It's called JSX element.

The difference between the two is the way they handle self-closing tags.

{<TitleComponent/>} is a shorthand for {<TitleComponent></TitleComponent>} and it is used when a component does not have any children.

So {<TitleComponent/>} and {<TitleComponent></TitleComponent>} are equivalent and both will create and render an instance of the TitleComponent component.

It's important to note that all JSX elements must be closed, whether they have children or not.

### 04. How can I write comments in JSX?
You can write comments in JSX by wrapping them in curly braces with two forward slashes. For example: {/* This is a comment */}

### 05. What is <React.Fragment></React.Fragment> and <></> ?
React.Fragment is a component that allows you to group a list of children without adding extra nodes to the DOM. It is useful when you want to return multiple elements from a component’s render method without adding an extra parent DOM node. <></> is a shorthand for <React.Fragment> and it's available since React 16.2.

### 06. What is Virtual DOM?
The Virtual DOM is a lightweight representation of the actual DOM. React uses it to track changes in the user interface and to efficiently update the real DOM. When a component's state changes, React will update the corresponding parts of the virtual DOM, and then use a diffing algorithm to determine the minimal number of changes that need to be made to the actual DOM. This process is called reconciliation.

### 07. What is Reconciliation in React?
Reconciliation is the process of determining the changes that need to be made to the Virtual DOM in order to update the UI to match the current state. React uses a diffing algorithm to compare the current virtual tree with the new virtual tree, and then updates the real DOM with the minimal set of changes needed to bring the UI up to date.

### 08. What is React Fiber?
React Fiber is a new reconciliation algorithm introduced in React v16. It is a complete rewrite of the previous algorithm and is designed to improve the rendering performance of React applications by making updates more incremental and asynchronous. It also adds new features such as the ability to pause and abort renderings, and the ability to split renderings across multiple frames.

### 09. Why we need keys in React? When do we need keys in React?
Keys are used by React to keep track of the elements in a list, so that when the list is updated, React can efficiently determine which elements have been added, removed, or moved. Keys should be unique and constant among the siblings, and It is recommended to use keys when the elements in a list have a unique identifier, such as an ID from a database.

### 10. Can we use index as keys in React?
It is not recommended to use the index of an element as a key in React, because it can lead to unexpected behavior when the list is re-ordered or elements are added or removed. Instead, it's recommended to use a unique identifier that is stable across renders, such as an ID from a database or a UUID.

### 11. What is props in React? Ways to
Props (short for properties) are a way to pass data from a parent component to a child component. Props are passed as attributes to a component in JSX. For example: ```<MyComponent name="John" age={30} />```

### 12. What is a Config Driven UI ?
A Config Driven UI is a design pattern where the user interface is generated and configured by a set of external configuration files rather than hard-coded in the source code. This allows for more flexibility and ease of maintenance, as the UI can be updated without changing the codebase. It also allows for reusing components and creating custom UI solutions for different use cases by changing the configuration.