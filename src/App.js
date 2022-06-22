import Main from './Pages/Main';
import { UserInfoContext, UserToggleContext } from './Pages/UserContext';
import { useState } from "react";
// import Router from './Pages/Router';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Join from "./Pages/Join";
import Login from "./Pages/Login";
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 25px;
  text-decoration: none;
  color:black;
`;



function App() {
  const [userDB,setUserDB]=useState([
    {
      id:"first",
      pw:"one"
    },
    {
      id:"sec",
      pw:"two"
    },
  ]);
  const [loginToggle,setLoginToggle]=useState(false);
  const [showingId,setShowingId]=useState("");

  return (
    <>
    <UserInfoContext.Provider value={{userDB,setUserDB}}>
      <UserToggleContext.Provider value={{loginToggle,setLoginToggle,showingId,setShowingId}}>
     
     {/* <Router/> */}
     <BrowserRouter>
  
    <StyledLink to="/">Home </StyledLink>
   {loginToggle?null :<StyledLink to="/login">Login </StyledLink>}
    {loginToggle?null:<StyledLink to="/join">Join</StyledLink>}
    <hr/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
    </Routes>
    </BrowserRouter>
    </UserToggleContext.Provider>
      </UserInfoContext.Provider>
      
    </>    
  );
}

export default App;
