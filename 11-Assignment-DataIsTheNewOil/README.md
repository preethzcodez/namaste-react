
# NAMASTE REACT - ASSIGNMENT 11 - DATA IS THE NEW OIL

  

## CODING

-   Practice React Context with code examples
-   Try out Nested Contexts

  

## THEORY

### 01. What is prop drilling?
Prop drilling is the process of passing data down through multiple levels of nested components in order for the data to be accessible by child components that need it.
### 02. What is lifting the state up?
Lifting the state up refers to the process of moving state data from a lower-level component to a higher-level component, such as a parent component, in order to make it accessible to multiple child components.
### 03. What is Context Provider and Context Consumer?
Context Provider and Context Consumer are React components that allow for global state management. The Provider component provides a value that can be accessed by the Consumer component and its descendants.
### 04. If you don’t pass a value to the provider does it take the default value?
The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.