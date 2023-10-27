import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useState} from "react";
import db from "./Database";


function Kanbas() {
    const [courses, setCourses] = useState(db.courses);

    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        _id: ""
    });

    const addNewCourse = () => {
        // must modify the code such that it would update both course._id as well as the course _id saved in courses
        const _id = new Date().getTime().toString()
        setCourse({...course, _id: _id})
        setCourses([...courses, {...course, _id}]);
    };


    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div className="d-flex">
            <KanbasNavigation/>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard"/>}/>
                <Route path="Account" element={<h1>Account</h1>}/>
                <Route path="Dashboard" element={
                    <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
                }/>
                <Route path="Courses/*" element={<h1>Courses</h1>}/>
                <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
            </Routes>

        </div>
    );
}

export default Kanbas;