import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Products from './pages/Products.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Categories from './pages/Categories.tsx';
import CategoryPage from './pages/categorypages/CategoryPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
      path: '/products',
      element: <Products/> 
      },
      {
        path: '/about',
        element: <About/> 
      },
      {
        path: '/categories',
        element: <Categories/>, 
      },
      {
        path:'/categories/:slug',
        element:<CategoryPage/>
      }
    ]  
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
