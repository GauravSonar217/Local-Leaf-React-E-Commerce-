import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <React.Fragment>
        <Header path="/"></Header>
        <Navbar></Navbar>
        <Main></Main>
        <Footer></Footer>
      </React.Fragment>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Template />,
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
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/allProduct/:productname",
          element: <AllProductPage/>,
        },
        {
          path: "/allProduct",
          element: <AllProductPage/>,
        },
      ],
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}
export default App;








// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Template from './components/Template';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import CoursePage from './components/CoursePage';
// import ErrorPage from './components/ErrorPage';
// import FeaturePage from './components/FeaturePage';
// import CareerGuide from './components/CareerGuide';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <React.Fragment>
//                  <Navbar />
//                  <Main></Main>
//                  <Footer></Footer>
//                </React.Fragment>,
//       errorElement:<ErrorPage />,         
//       
//     }
//   ])
//   return (
//     <RouterProvider router={router}></RouterProvider>
//   );
// }
// export default App;