import './Styles.scss';

import {Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/Registration";
import Restaurant from "./pages/restaurant";


function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>

                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/restaurant" element={<Restaurant/>}/>
                <Route path="/restaurant/:id" element={<Restaurant/>}/>
            </Routes>
        </div>
    );
}

export default App;
