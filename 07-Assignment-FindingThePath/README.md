# NAMASTE REACT - ASSIGNMENT 06 - EXPLORING THE WORLD

## CODING
- Play with the useEffect Hook to see when it is called?(before or after render)
- Play with dependency array in useEffect Hook
- Play with the developer console by putting a debugger in render and useEffect
- Call an actual API to get data
- Handle Error in your API call
- Build Shimmer UI when data in not loaded
- Render your UI with actual API data
- Make Search functionality work
- Make a Login Logout button which toggles with a state

## THEORY

### 01. What is a Microservice?
Microservice is an architectural style that structures an application as a collection of small, independent services that communicate with each other, rather than as a single, monolithic application.

### 02. What is Monolith architecture?
Monolith architecture is a traditional way of building software applications as a single, tightly-coupled unit, rather than as a collection of loosely-coupled services.

### 03. What is the difference between Monolith and Microservice?
The difference between Monolith and Microservice is that Monolith is a single, tightly-coupled unit whereas Microservice is a collection of loosely-coupled services. Microservices are designed to be small, autonomous and independently deployable.

### 04. Why do we need a useEffect Hook?
useEffect Hook is a React Hook that lets you synchronize a component with an external system. It lets you keep your component updated with new data from an API, user input, or other state changes.

### 05. What is Optional Chaining?
Optional Chaining is a new operator in JavaScript that allows you to access properties of an object without having to check if they exist first. It returns undefined if a property or function doesn't exist in the chain, instead of throwing an error.

### 06. What is Shimmer UI?
Shimmer UI is a UI component in React that's used to create a placeholder loading state for asynchronously loaded content. It provides a shimmering effect to indicate that something is loading, making the user experience better.

### 07. What is the difference between JS expression and JS statement?
The difference between a JS expression and a JS statement is that an expression returns a value, whereas a statement performs an action. For example, a = b * 2 is an expression, whereas if (a > b) {} is a statement.

### 08. What is Conditional Rendering, explain with a code example
Conditional Rendering is a way of conditionally displaying components in React based on certain conditions. A code example is:
```
render() {
  const isLoading = this.state.isLoading;
  return (
    <div>
      {isLoading ? <Loading /> : <Content />}
    </div>
  );
}
```
### 09. What is CORS?
CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that restricts requests made from one domain to another. It prevents a web page from making requests to a different domain than the one that served the web page.

### 10. What is async and await?
async and await are JavaScript keywords that allow you to write asynchronous code that is easier to read and write than traditional callback-based code. async makes a function return a Promise and await allows you to wait for the result of a Promise.

### 11. What is the use of `const json = await data.json();` in getRestaurants()
```const json = await data.json();``` in the function getRestaurants() is used to wait for the response from a server in the form of a JSON string and parse it into a JavaScript object. The await keyword stops execution of the function until the Promise is resolved and the data is available.