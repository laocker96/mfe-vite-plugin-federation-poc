import './App.css'
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Page1 from "./components/Page1.tsx";
import Page2 from "./components/Page2.tsx";

function App() {

    const navigate = useNavigate();

    return (
        <>
            <h2>Vite + React remote app</h2>
            <li style={{display: "flex"}}>
                <ul>
                    <button onClick={() => navigate("page-1")}>Page 1</button>
                </ul>
                <ul>
                    <button onClick={() => navigate("page-2")}>Page 2</button>
                </ul>
            </li>
            <Outlet />
            <Routes>
                <Route path="/page-1" element={<Page1/>}/>
                <Route path="/page-2" element={<Page2/>}/>
            </Routes>
        </>
    )
}

export default App
