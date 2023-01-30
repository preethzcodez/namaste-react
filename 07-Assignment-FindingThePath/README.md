# NAMASTE REACT - ASSIGNMENT 07 - FINDING THE PATH

## CODING
- Add Shimmer Effect without installing a library
- Install react-router-dom
- Create a appRouter and Provide it to the app
- Create a Home, About, Contact Page with Link (use child routes)
- Make a Error page for routing errors
- Create a Restaurant Page with dynamic restaurant ID
- (Extra) - Create a login Page using Formik Library

## THEORY

### 01. What are various ways to add images into our App? Explain with code examples
There are several ways to add images in a React App:

- Using an image file:
```
<img src="image.jpg" alt="image description" />
```

- Using a CSS background-image:
```
<div style={{backgroundImage: 'url(image.jpg)'}} />
```

- Using a data URL:
```
<img src="data:image/jpeg;base64,/9j/4AAQSkZ..." alt="image description" />
```

- Importing an image:
```
import image from './image.jpg';

<img src={image} alt="image description" />
```

- Using a React Component:
```
const Image = () => <img src="image.jpg" alt="image description" />;

<Image />
```

### 02. What would happen if we do console.log(useState())?
Console.log of useState: It will return an array with two elements, the first being the current state value, and the second being a function to update the state.

Example: ```console.log(useState())```
Output: ```[undefined, function updateState]```

### 03. How will useEffect behave if we don't add a dependency array ?
useEffect without dependencies: If no dependencies are passed in the dependency array, useEffect will run on every render. This can lead to performance issues and is not recommended.

Example: ```useEffect(() => {console.log("Effect ran")})```

### 04. What is SPA?
SPA (Single Page Application): It is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the server, instead of loading entire new pages from a server.

### 05. What is difference between Client Side Routing and Server Side Routing?
Client Side Routing vs Server Side Routing:
- Client Side Routing: It is a technique where the routing is handled on the client side using JavaScript, it updates the URL and dynamically renders the appropriate components or pages based on the URL change.
- Server Side Routing: It is a technique where the routing is handled on the server side, whenever a URL is requested, the server sends the full HTML content of the page corresponding to the URL.
