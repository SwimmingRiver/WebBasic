import Main from './Pages/Main';
import { UserInfoContext } from './Pages/UserContext';
import { useState } from "react";

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
  return (
    <>
    <UserInfoContext.Provider value={{userDB,setUserDB}}>
      <Main/>
      </UserInfoContext.Provider>
    </>    
  );
}

export default App;
