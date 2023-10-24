import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";


function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation/>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard"/>}/>
                <Route path="Account" element={<h1>Account</h1>}/>
                <Route path="Dashboard" element={<Dashboard/>}/>
                <Route path="Courses/*" element={<h1>Courses</h1>}/>
                <Route path="Courses/:courseId/*" element={<Courses/>}/>
            </Routes>

        </div>
    );
}

export default Kanbas;