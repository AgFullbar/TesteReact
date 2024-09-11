import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from '../pages/home'
import DetailUser from '../pages/detailUser'


export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail" element={<DetailUser/>}/>
            </Routes>
        </Router>
    )
}


