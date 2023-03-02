import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//With the Navlink, you also have to import BrowserRouter and wrap the App component in it.
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';
import CreateProjectPage from './pages/CreateProjectPage';
import MakePledgePage from './pages/MakePledgePage';
import EditProjectPage from './pages/EditProjectPage';

import './App.css'



const HeaderLayout = () => {
  return (
    <div>
      < Nav />
      < Outlet />
      < Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/project/:id',
        element: <ProjectPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/createproject',
        element: <CreateProjectPage />
      },
      {
        path: '/project/:id/makepledge',
        element: <MakePledgePage />
      },
      {
        path: "/EditProjectPage/:id",
        element: <EditProjectPage />
      }
    ]

}])

function App() {
  

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
