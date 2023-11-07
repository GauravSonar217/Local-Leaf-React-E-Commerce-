import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Template from './components/Template';
import AllProductPage from './components/AllProductPage';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import About from './components/About';
import Contact from './components/Contact';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import ProfilePage from './components/ProfilePage';
import Button from './components/Button';
import Login from './components/Login';


// const db = getDatabase(app)

function App() {
  // const putData = () => {
  //   set(ref(db, "users/gaurav"), {
  //     id: 1,
  //     name: "Gaurav",
  //     age: 23,
  //   });
  // };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <React.Fragment>
        <Header path="/home" goTo="/login"></Header>
        <Navbar></Navbar>
        <Main></Main>
        <Footer></Footer>
      </React.Fragment>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Template />,
        },
        {
          path: "/home",
          element: <Template />,
        },
        {
          path: "/Profile",
          element: <ProfilePage />,
        },
        {
          path: "/productPage/:id",
          element: <ProductPage />,
        },
        {
          path: "/cartPage",
          element: <CartPage />,
        },
        {
          path: "/categoryPage/:name",
          element: <CategoryPage />,
        },
        {
          path: "/aboutpage",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/allProduct/:productname",
          element: <AllProductPage />,
        },
        {
          path: "/allProduct",
          element: <AllProductPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ], 
    }
  ])
  return (
    <RouterProvider router={router}>  
      <Button class="normalBtn" text="put data" />
    </RouterProvider>
  );
}
export default App;
