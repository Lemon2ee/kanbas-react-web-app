import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faEllipsisV, faFileLines, faGripVertical, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Link, useParams} from "react-router-dom";
import db from "../../Database";

const AssignmentItem = ({title, weekInfo, dueDate, points}) => {
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
                        {weekInfo}
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
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    return (
        <div className="list-group flex-grow-1 mx-3">
            <a
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
            </a>

            {courseAssignments.map((assignment) => (
                <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item">
                    <AssignmentItem
                        title={assignment.title}
                        weekInfo="Week 0 - SETUP - Week starting on Monday"
                        dueDate="Sep 18. 2022 at 11:59PM"
                        points="100"
                    />
                </Link>
            ))}
        </div>
    );
};

export default AssignmentsList;