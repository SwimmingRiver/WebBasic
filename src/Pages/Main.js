import Join from "./Join";
import Login from "./Login";
import { useContext } from 'react';
import { UserInfoContext } from "./UserContext";

function Main(){
    const userDB = useContext(UserInfoContext);
    return(
        <>
        <Login/>
        <Join/>
            <h1>Welcome Guest{Math.floor(Math.random()*8999+1000)}</h1>
        </>
    )
}
export default Main;