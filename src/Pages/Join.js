
import { useContext } from 'react';
import { UserInfoContext } from './UserContext';
import { useState } from 'react';

function Join(){
    const {userDB,setUserDB}=useContext(UserInfoContext);
    const [newId,setNewId]=useState("");
    const [newPw,setNewPw]=useState("");
    const [rePw,setRePw]=useState("");
    const CheckJoin=()=>{
        let checkId = userDB.find((i)=>(i.id === newId));
        if(checkId){alert("Same Id!!")}
        else if(newPw !== rePw){alert("Check password")}
        else{
            setUserDB([
                ...userDB,
                {
                    id:newId,
                    pw:newPw
                }
            ])
        }
    }
    return(
        <>
        <h1>Join</h1>
        <input placeholder="ID" onChange={(e)=>{setNewId(e.target.value)}}/>
        <input placeholder="Password" onChange={(e)=>{setNewPw(e.target.value)}}/>
        <input placeholder="Repeat Password" onChange={(e)=>{setRePw(e.target.value)}}/>
        <button onClick={CheckJoin}>Join</button>
        </>
    )
}
export default Join;