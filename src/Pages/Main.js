import { useContext } from 'react';
import { UserInfoContext, UserToggleContext } from "./UserContext";
;

function Main(){
    const userDB = useContext(UserInfoContext);
    const {loginToggle,showingId} = useContext(UserToggleContext);
    return(
        <>
            {loginToggle?<h1>Welcome {showingId}</h1>:
            <h1>Welcome Guest{Math.floor(Math.random()*8999+1000)}</h1>
            }

        </>
    )
}
export default Main;