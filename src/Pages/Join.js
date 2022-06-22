
import { useContext } from 'react';
import { UserInfoContext } from './UserContext';
import { useState } from 'react';
import  styled  from 'styled-components';

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid 2px darkcyan;
  width: 30vw;
  height: 45vh;
  border-radius: 3px;
`;


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
            alert("Complete join")
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
        <JoinBox>
        <input placeholder="ID" onChange={(e)=>{setNewId(e.target.value)}}/>
        <input type='password' placeholder="Password" onChange={(e)=>{setNewPw(e.target.value)}}/>
        <input type='password' placeholder="Repeat Password" onChange={(e)=>{setRePw(e.target.value)}}/>
        <button onClick={CheckJoin}>Join</button>
        </JoinBox>
        </>
    )
}
export default Join;