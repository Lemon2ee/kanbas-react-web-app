import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetAssignment} from "./assignmentsReducer";


function AssignmentHeader() {
    const {courseId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className={"flex-grow-1 flex-row d-flex justify-content-between m-3"}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Search for Assignment"
                />
            </div>

            <div>
                <button type="button" className="btn btn-secondary mx-1">
                    <FontAwesomeIcon icon={faPlus}/> Group
                </button>

                <button type="button" className="btn btn-danger mx-1" onClick={(e) => {
                    e.stopPropagation();
                    dispatch(resetAssignment())
                    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
                }}>
                    <FontAwesomeIcon icon={faPlus}/> Assignment
                </button>

                <button type="button" className="btn btn-secondary mx-1">
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </button>
            </div>
        </div>
    );
}

export default AssignmentHeader;