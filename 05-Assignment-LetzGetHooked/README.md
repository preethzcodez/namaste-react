# NAMASTE REACT - ASSIGNMENT 05 - LETZ GET HOOKED

## CODING
- Clean up your code
- Create a Folder Structure for your app
- Make different files for each Components
- Create a config file
- Use all types of import and export
- Create a Search Box in your App
- Use useState to create a variable and bind it to the input box
- Try to make your search bar work

## THEORY

### 01. What is the difference between Named Export, Default export and * as export?
In JavaScript, there are three ways to export modules:
- **Named exports**: You can export multiple values from a module using the export keyword. For example, ```export const foo = 'bar'; export const baz = 'qux';```
- **Default export**: You can have one default export per module, which is exported using the export default keyword. For example, ```export default function myFunction() { /* code */ }```
- **`* as export`**: You can import all the exports from a module using the * as syntax. For example, ```import * as myModule from './myModule';```

### 02. What is the importance of config.js file
A config.js file is often used to store configuration settings that are specific to an application or environment. These settings may include things like API endpoints, database credentials, and other values that may need to be changed depending on the environment in which the application is running. By having these settings in a separate file, it allows for easy updating and management of these values.

### 03. What are React Hooks?
React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 as an alternative to class-based components. Hooks allow for more flexibility and reusability in your code, and make it easier to share stateful logic across components.

### 04. Why do we need a useState Hook?
The useState Hook allows you to add state to functional components. In class-based components, state is typically managed using the ```this.state``` object. But in functional components, there is no **```this```** object, so it is not possible to use ```this.state```. useState Hook provides a way to add state to functional components. Additionally, useState Hook allows you to update and re-render the component when the state changes, so it's a way to keep the component updated with the latest data.