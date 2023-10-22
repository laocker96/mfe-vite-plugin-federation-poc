import {Outlet, useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();


    return (
        <>
            <h2>Homepage</h2>
            <div style={{display: "flex", gap: "10px"}}>
                <button onClick={() => navigate("other")}>Other</button>
            </div>
            <Outlet/>
        </>
    );
};

export default Home;