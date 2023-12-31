import './App.css'
// @ts-ignore
import Button from "remoteApp/Button";
import {Outlet, useNavigate} from "react-router-dom";
import {Fragment} from "react";


function HostApp() {
    const navigate = useNavigate();

    return <Fragment>
        <h1>Host</h1>
        <div style={{display: "flex", gap: "10px"}}>
            <button onClick={() => navigate("/homepage")}>Home page</button>
            <button onClick={() => navigate("/vite-react-remote")}>React + Vite remote app</button>
            <button onClick={() => navigate("/angular-remote")}>Angular remote app</button>
        </div>
        <Outlet/>
    </Fragment>
}

export default HostApp;
