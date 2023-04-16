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
import CreateUserForm from './components/CreateUserForm/createUserForm';

import './App.css'
import { useState } from "react";
//  root component file, where you app lives

const HeaderLayout = () => {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null)
  return (
    <div>
      <div className="content-container"> 
      < Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      < Outlet context={[loggedIn, setLoggedIn]} />
      </div>
      < Footer className="footer--pin" />
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
        path: '/register',
        element: <CreateUserForm />,
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
      },
    ]

}])

function App() {
  

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
