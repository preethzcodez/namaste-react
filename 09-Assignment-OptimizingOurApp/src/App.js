import React, { lazy, Suspense } from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import RestaurantDetail from "./components/restaurant-detail/RestaurantDetail";
import Error from "./components/error-page/Error";
import Login from "./components/login/Login";

// lazy loading about component
const About = lazy(() => import("./components/about/About"));

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

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
        element: (
          <Suspense fallback={<h1>Loading . . .</h1>}>
            <About />
          </Suspense>
        ),
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
      },
    ],
  },
]);

export default router;
