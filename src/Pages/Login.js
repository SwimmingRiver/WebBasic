import { useContext,useState } from "react";
import { UserInfoContext, UserToggleContext } from './UserContext';



function Login(){
    const {userDB}=useContext(UserInfoContext);
    const [inputId,setInputId]=useState("");
    const [inputpw,setInputPw]=useState("");
    const {setLoginToggle,setShowingId}=useContext(UserToggleContext);

    const CheckLogin=()=>{
        let checkId = userDB.find((i)=>inputId===i.id);
        let checkPw = userDB.find((i)=>inputpw===i.pw);
        if(checkId && checkPw){
            alert("Hello "+ inputId);
            setLoginToggle(true);
            setShowingId(inputId);
        }
        else if(!checkId){alert("check Id")}
        else if(!checkPw){alert("check Pw")}
    }
    return(
    <>
        <h1>Login</h1>
        <input 
        placeholder="ID"
        onChange={(e)=>{setInputId(e.target.value)}}/>
        <input 
        type='password'
        placeholder="Password"
        onChange={(e)=>{setInputPw(e.target.value)}}
        /><button onClick={CheckLogin}>Login</button>
    </>
    )
}
export default Login;