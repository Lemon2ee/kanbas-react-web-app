import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";


function Kanbas() {
    const [courses, setCourses] = useState([]);

    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        _id: ""
    });

    const URL = `${process.env.REACT_APP_API_BASE}/api/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        return response.data
    };

    useEffect(() => {
        findAllCourses().then((courses) => setCourses(courses))
    }, []);


    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
    };


    const deleteCourse = async (courseID) => {
        await axios.delete(
            `${URL}/${courseID}`
        );
        setCourses(courses.filter(
            (c) => c._id !== courseID));
    };


    const updateCourse = async (course) => {

        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            response.data
        );
    };


    return (
        <Provider store={store}>
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
                    <Route path="Courses/:courseId/*" element={<Courses/>}/>
                </Routes>

            </div>
        </Provider>

    );
}

export default Kanbas;