import React from "react" ;
import  KarleParent  from './sorting';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Searching } from "./searching";
import { Reverse } from "./reversing";
import { Link } from "react-router-dom";

export default function App(){
    return(
        <Router>
            <div style={{position:'absolute',right:'2%',top:'3%'}}>
                <Link style={{padding:'1rem',backgroundColor:'red',textDecoration:'none'}} to="/searching">Searching</Link>
                <Link style={{padding:'1rem',backgroundColor:'yellow',textDecoration:'none'}} to="/sorting">Sorting</Link>
                <Link style={{padding:'1rem',backgroundColor:'white',textDecoration:'none'}} to="/reversing">Reversing</Link>
            </div>
            <Routes>
                <Route path="/searching" element={<Searching/>}/>
                <Route path="/reversing" element={<Reverse/>}/>
                <Route path="/sorting" element={<KarleParent/>}/>
            </Routes>
        </Router>
    )
}