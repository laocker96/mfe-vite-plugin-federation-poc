import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import HostApp from "./App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home.tsx";


// @ts-ignore
import App from "remoteApp/App";
// @ts-ignore
import Angular from './modules/Angular';



const router = createBrowserRouter([
    {
        path: "/",
        element: <HostApp/>,
        children: [
            {
                path: "/homepage",
                element: <Home/>,
                children: [

                    {
                        path: "other",
                        element: <p>Other</p>
                    }]
            },
            {
                path: "/vite-react-remote/*",
                element: <App/>
            },
            {
                path: "/angular-remote/*",
                element: <Angular/>
            },
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
