import {Navigate, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import {Breadcrumb} from "react-bootstrap";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {useEffect, useState} from "react";
import axios from "axios";


function Courses() {
    const {courseId} = useParams();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const URL = `${process.env.REACT_APP_API_BASE}/api/courses`;
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        return response.data
    };

    useEffect(() => {
        findCourseById(courseId).then((course) => setCourse(course));
    }, [courseId]);


    const location = useLocation().pathname.split('/');
    const modifiedLocation = location.slice(4);
    modifiedLocation.unshift(course.name);
    const navigate = useNavigate();

    return (
        <div className={"p-3 flex-grow-1 overflow-scroll"}
             style={{height: '100vh'}}>
            {/*breadcrumb containing info*/}
            <Breadcrumb className={"mx-3"}>
                {
                    modifiedLocation.map((segment, index) => (
                        <Breadcrumb.Item
                            href={"#"}
                            key={index}
                            onClick={() => navigate(segment === course.name ? "Home" : segment)}
                            active={index === modifiedLocation.length - 1}>
                            {segment}
                        </Breadcrumb.Item>
                    ))}
            </Breadcrumb>

            <hr/>

            {/*main module containing sections*/}
            <div className={"d-flex flex-row flex-grow-1 align-items-start"}>
                {/*navigation bar*/}
                <CourseNavigation/>

                {/*routes for each item in course navigation bar*/}
                <div className={"flex-grow-1"}>
                    <div
                        style={{overflowY: "auto"}}
                    >
                        <Routes>
                            <Route index element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home/>}/>
                            <Route path="Modules" element={<Modules/>}/>
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor/>}
                            />

                            <Route path="Grades" element={<Grades/>}/>
                        </Routes>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Courses;