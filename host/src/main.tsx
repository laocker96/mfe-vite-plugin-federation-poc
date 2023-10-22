import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import HostApp from "./App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home.tsx";

// @ts-ignore
import App from "remoteApp/App";


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
                path: "/crispy-booking/*",
                element: <App/>
            },
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
