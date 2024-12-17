import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
            <h1>This is home : {authInfo.name} </h1>
        </div>
    );
};

export default Home;