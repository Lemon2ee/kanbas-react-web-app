import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faEllipsisV, faFileLines, faGripVertical, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAssignment} from "./assignmentsReducer";
import DeleteAlert from "./DeleteAlert";

const AssignmentItem = ({title, description, dueDate, points}) => {
    return (
        <div className={"d-flex justify-content-between align-items-center green-border"}>
            <div className="d-flex align-items-center">
                <div style={{display: 'inline-block'}} className="me-3">
                    <FontAwesomeIcon icon={faGripVertical}/>
                    <FontAwesomeIcon icon={faFileLines} className="ps-3" style={{color: '#1ea420'}}/>
                </div>

                <div style={{display: 'inline-block'}}>
                    <h5>{title}</h5>
                    <span className="text-muted">
                        {description}
                    </span>
                    <br/>
                    <span>
                        <strong>Due</strong>
                        &nbsp;
                        {dueDate} | {points}pts
                    </span>
                </div>
            </div>

            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-success float-end me-2"/>
                <FontAwesomeIcon icon={faEllipsisV} className="float-end p-3"/>
            </div>
        </div>

    );
};

const AssignmentsList = () => {
    const {courseId} = useParams();
    const assignments = useSelector((state) => state.assignmentReducer.assignments);
    const dispatch = useDispatch()

    return (
        <div className="list-group flex-grow-1 mx-3">
            <div
                className="
                list-group-item
                list-group-item-action
                list-group-item-secondary
                d-flex
                justify-content-between
                align-items-center"
            >
                <span>Assignments</span>
                <div className="d-flex align-items-center">
                    <span className="badge rounded-pill text-bg-light me-3">40% of total</span>
                    <FontAwesomeIcon icon={faPlus}/>
                    <FontAwesomeIcon icon={faEllipsisV} className="ps-2"/>
                </div>
            </div>

            {assignments.filter(
                (assignment) => assignment.course === courseId).map((assignment) => (
                <div className="list-group-item d-flex" key={assignment._id}>
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item flex-grow-1 me-3"
                        onClick={() => {
                            dispatch(setAssignment(assignment))
                        }}
                    >
                        <AssignmentItem
                            title={assignment.title}
                            description={assignment['description'] || "Week 0 - SETUP - Week starting on Monday"}
                            dueDate={assignment['dueDate'] || "Sep 18. 2022 at 11:59PM"}
                            points={assignment['points'] || "100"}
                        />
                    </Link>
                    <DeleteAlert assignment={assignment}/>
                </div>


            ))}
        </div>
    );
};

export default AssignmentsList;
