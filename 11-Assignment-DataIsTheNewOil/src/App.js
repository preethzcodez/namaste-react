import React, { lazy, Suspense, useState } from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import RestaurantDetail from "./components/restaurant-detail/RestaurantDetail";
import Error from "./components/error-page/Error";
import Login from "./components/login/Login";
import UserContext from "./utils/UserContext";
import UserAuthContext from "./utils/UserAuthContext";

// lazy loading about component
const About = lazy(() => import("./components/about/About"));

const App = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false)

  return (
    <UserAuthContext.Provider value={{
      isLoggedIn: isUserLoggedIn,
      setIsLoggedIn: setUserLoggedIn
    }}>
      <HeaderComponent />
      {isUserLoggedIn ? <Outlet /> : <Login />}
      <UserContext.Provider value={{ name: "Preeth Prathapan" }}>
        <FooterComponent />
      </UserContext.Provider>
    </UserAuthContext.Provider>
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
    ],
  },
]);

export default router;
