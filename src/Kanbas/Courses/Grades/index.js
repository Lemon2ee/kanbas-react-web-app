import db from "../../Database";
import {useParams} from "react-router-dom";
import "./GradesTable.css"
import React from "react";
import GradesHeader from "./GradesHeader";

function Grades() {
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    const TableCell = ({initialGrade, assignmentId}) => {
        const [inputValue, setInputValue] = React.useState(initialGrade || "");

        const handleInputChange = (e) => {
            setInputValue(e.target.value);
        };

        return (
            <td key={assignmentId}>
                <input type="text" value={inputValue} onChange={handleInputChange}/>
            </td>
        );
    };

    return (
        <div style={{height: '100vh', maxHeight: '100vh', overflowY: 'auto'}}>>
            <GradesHeader/>
            <div className="table-responsive">
                <table className="table table-striped table-bordered my-3">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (
                            <th key={assignment._id}>{assignment.title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        if (!user) return null;

                        return (
                            <tr key={enrollment.user}>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                    );

                                    return (
                                        <TableCell
                                            key={assignment._id}
                                            initialGrade={grade?.grade}
                                            assignmentId={assignment._id}
                                        />
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );


}

export default Grades;