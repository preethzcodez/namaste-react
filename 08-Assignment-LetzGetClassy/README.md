# NAMASTE REACT - ASSIGNMENT 08 - LETZ GET CLASSY

## CODING

- Create a Class Based Component
  - Create 2 class based child components
  - Pass props from Parent to child
  - Create a constructor
  - Create a state variable inside child
  - Use this.setState to update it
  - What if there are multiple state variables?
  - Write a console.log for each lifecycle method
  - Play with the console logs to find out the correct order of their execution
- Create interval inside componentDidMount?
  - Use clearInterval to fix the issue caused by that interval

## THEORY

### 01. How do you create nested routes react-router-dom configuration?

```
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      }
    ],
  },
]);
```

### 02. createHashRouter, createMemoryRouter

**createHashRouter**

This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

**createMemoryRouter**

Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

```

import {

RouterProvider,

createMemoryRouter,

} from "react-router-dom";

import * as React from "react";

import {

render,

waitFor,

screen,

} from "@testing-library/react";

import "@testing-library/jest-dom";

import CalendarEvent from "./routes/event";



test("event route", async () => {

const FAKE_EVENT = { name: "test event" };

const routes = [

{

path: "/events/:id",

element: <CalendarEvent />,

loader: () => FAKE_EVENT,

},

];



const router = createMemoryRouter(routes, {

initialEntries: ["/", "/events/123"],

initialIndex: 1,

});



render(<RouterProvider router={router} />);



await waitFor(() => screen.getByRole("heading"));

expect(screen.getByRole("heading")).toHaveTextContent(

FAKE_EVENT.name

);

});

```

**initialEntries**
The initial entries in the history stack. This allows you to start a test (or an app) with multiple locations already in the history stack (for testing a back navigation, etc.)

```

createMemoryRouter(routes, {

initialEntries: ["/", "/events/123"],

});

```

**initialIndex**
The initial index in the history stack to render. This allows you to start a test at a specific entry. It defaults to the last entry in initialEntries.

```

createMemoryRouter(routes, {

initialEntries: ["/", "/events/123"],

initialIndex: 1, // start at "/events/123"

});

```

### 03. What is the order of life cycle method calls in class based components

The order of life cycle method calls in class-based components in React is as follows:

1.  **constructor**: This method is called before the component is mounted
    and is used to initialize state and bind methods.
2.  **static** getDerivedStateFromProps: This method is called before render
    and is used to update the state based on the incoming props.
3.  **render**: This method returns the JSX code that represents the UI of
    the component.
4.  **componentDidMount**: This method is called after the first render and
    is used to perform setup and side-effects that need to happen after
    the component has been added to the DOM.
5.  **shouldComponentUpdate**: This method is called before render and can
    be used to optimize the component by avoiding unnecessary
    re-renders.
6.  **getSnapshotBeforeUpdate**: This method is called right before the
    changes from the new render are committed and can be used to capture
    the current state for use in the next render.
7.  **componentDidUpdate**: This method is called after render and is used
    to perform side-effects that need to happen after the component has
    updated.
8.  **componentWillUnmount**: This method is called before the component is
    removed from the DOM and is used to perform cleanup tasks.

**Note**: Some of these life cycle methods are considered legacy and are scheduled for deprecation in the future. For new projects, it is recommended to use the new React Hooks API.

### 04. Why do we use componentDidMount

`componentDidMount` is a lifecycle method in React that is called after the component has been added to the DOM. It is used to perform setup and side-effects that need to happen after the component has been added to the DOM.

Here are some common use cases for `componentDidMount`:

1.  Fetching data from an API: When building a component that requires data from an external source, `componentDidMount` is the appropriate lifecycle method to use for fetching that data.
2.  Setting up subscriptions: When building a component that requires updates from an external source, `componentDidMount` can be used to set up the necessary subscriptions.
3.  Initializing libraries or plugins: When using a library or plugin that needs to access the DOM directly, `componentDidMount` is the appropriate lifecycle method to use for initializing that library or plugin.
4.  Measuring the size of an element: When a component needs to know the size of an element, `componentDidMount` can be used to perform the measurement after the element has been added to the DOM.

It's important to note that any updates to the component's state or props should not be performed in `componentDidMount`, as doing so will cause a re-render and defeat the purpose of the optimization. Instead, updates should be performed in `componentDidUpdate`.

### 05. Why do we use componentWillUnmount? Show with example

`componentWillUnmount` is a lifecycle method in React that is called right before a component is removed from the DOM. It is used to perform cleanup tasks that need to happen before the component is removed from the DOM.

Here's an example of how you might use `componentWillUnmount` to clear an interval:

```
import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default MyComponent;`
```

In this example, we use `setInterval` to increment a count value every second. We store the ID of the interval in a property on the component instance so that we can clear it in `componentWillUnmount`. By clearing the interval, we prevent it from continuing to run even after the component has been removed from the DOM, which can help to avoid memory leaks and other unexpected behavior.

### 06. Why do we use super(props) in constructor?

In a React component class that extends `Component`, the `constructor` method is called before the component is mounted. When defining a constructor method, you must call `super(props)` as the first line in the constructor in order to properly pass the `props` argument to the parent class's constructor.

Here's an example of a React component class with a `constructor` method that calls `super(props)`:

```
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default MyComponent;`
```

In this example, the `constructor` method sets the initial state for the component by creating a `count` property on the `state` object and setting its value to `0`. By calling `super(props)`, we are passing the `props` argument to the parent class's constructor, which is necessary for the component to have access to the `props` passed to it.

### 07. Why can't we have the callback function of useEffect async?

The callback function of `useEffect` cannot be `async` because `useEffect` expects to return a cleanup function (or `null`) synchronously. If you try to `await` an asynchronous function inside the `useEffect` callback, it will not return the cleanup function until the asynchronous function has resolved, which can lead to unexpected behavior.

Instead of making the `useEffect` callback `async`, you can wrap the asynchronous code inside a `useEffect` in an `async` function and call that function inside the `useEffect` callback. For example:

```
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const fetchData = async () => {
      // Asynchronous code here
    };
    fetchData();
  }, []);

  // ...
}`
```

In this example, `fetchData` is an `async` function that contains the asynchronous code that you want to run. By calling `fetchData` inside the `useEffect` callback, you can ensure that the asynchronous code is run as part of the effect, while still allowing the `useEffect` hook to return synchronously.
