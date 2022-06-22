import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Join from "./Join";
import Login from "./Login";
import Main from "./Main";


function Router(){
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
    </Routes>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/join">Join</Link>
    </BrowserRouter>
}
export default Router;