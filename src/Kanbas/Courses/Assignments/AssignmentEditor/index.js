import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import db from "../../../Database";
import {Button, Form} from 'react-bootstrap';
import Dropdown from "react-bootstrap/Dropdown";


function AssignmentEditor() {
    const {assignmentId} = useParams();


    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    const [assignment, setAssignment] = useState(db.assignments.find(
        (assignment) => assignment._id === assignmentId));
    const [description, setDescription] = useState('This assignment describes how...');
    const [points, setPoints] = useState('100');
    const [exclude, setExclude] = useState(false);
    const [notify, setNotify] = useState(false);
    const [assignmentGroup, setAssignmentGroup] = useState('ASSIGNMENTS');
    const [displayGradeAs, setDisplayGradeAs] = useState('Percentage');
    const [submissionType, setSubmissionType] = useState('Online');
    // eslint-disable-next-line 
    const [assignTo, setAssignTo] = useState('Everyone');
    const [dueDate, setDueDate] = useState('2023-09-08');
    const [availableFrom, setAvailableFrom] = useState('2023-09-08');
    const [until, setUntil] = useState('');


    return (
        <div>
            <h2>{assignment.title}</h2>


            <div className="flex-grow-1 container px-4">
                <div className="row">
                    <span>Assignment Name</span>
                    <div className="form-group">
                    <textarea
                        className="form-control"
                        id="assignment"
                        rows="3"
                        value={assignment.title}
                        onChange={(e) => setAssignment(e.target.value)}>
                    </textarea>
                    </div>
                    <div className="form-group mt-3">
                    <textarea
                        className="form-control"
                        id="assignmentDescription"
                        rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                    </div>
                </div>

                {/* More code similar to the above for other fields, adjust as needed */}

                <div className="row my-3 d-flex align-items-center">
                    <div className="col-sm-4 d-flex justify-content-end">
                        Points
                    </div>
                    <div className="col-6 d-flex">
                        <input
                            type="text"
                            className="form-control"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}/>
                    </div>
                </div>

                {/* Add the other sections like Assignment Group, Display Grade as, etc. in a similar manner */}
                {/* Assignment Group */}
                <div className="row my-3 d-flex align-items-center">
                    <div className="col-sm-4 d-flex justify-content-end">
                        Assignment Group
                    </div>
                    <div className="col-6">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-assignment-group" style={{width: '100%'}}>
                                {assignmentGroup}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={() => setAssignmentGroup('ASSIGNMENTS')}>
                                    ASSIGNMENTS
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setAssignmentGroup('HOMEWORK')}>
                                    HOMEWORK
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setAssignmentGroup('EXAMS')}>
                                    EXAMS
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                {/* Display Grade as */}
                <div className="row my-3 d-flex align-items-center">
                    <div className="col-sm-4 d-flex justify-content-end">
                        Display Grade as
                    </div>
                    <div className="col-6">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-display-grade" style={{width: '100%'}}>
                                {displayGradeAs}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={() => setDisplayGradeAs('Percentage')}>
                                    Percentage
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setDisplayGradeAs('Grade')}>
                                    Grade
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setDisplayGradeAs('Pass/Fail')}>
                                    Pass/Fail
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                {/* Submission Type and Options */}
                <div className="row my-3 d-flex align-items-start">
                    <div className="col-sm-4 d-flex justify-content-end">
                        Submission Type
                    </div>
                    <div className="col-6">
                        <Form className="p-3 border rounded">
                            <div className="form-group mb-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-submission-type"
                                                     style={{width: '100%'}}>
                                        {submissionType}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" onClick={() => setSubmissionType('Online')}>
                                            Online
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" onClick={() => setSubmissionType('Offline')}>
                                            Offline
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" onClick={() => setSubmissionType('Mixed')}>
                                            Mixed
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            {/* Online Entry Options, if needed you can manage the state for these options */}
                            <strong>Online Entry Options</strong>
                            <Form.Check type="checkbox" label="Text Entry" defaultChecked/>
                            <Form.Check type="checkbox" label="Website URL" defaultChecked/>
                            <Form.Check type="checkbox" label="Media Recordings" defaultChecked/>
                            <Form.Check type="checkbox" label="Student Annotation"/>
                            <Form.Check type="checkbox" label="File Uploads"/>
                        </Form>
                    </div>
                </div>

                <div className="row my-3 d-flex align-items-start">
                    <div className="col-sm-4 d-flex justify-content-end">
                        Assign
                    </div>
                    <div className="col-6 align-items-start">
                        <Form className="p-3 pb-0 border rounded" style={{
                            borderBottom: 'none',
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                        }}>

                            <strong>Assign to</strong>
                            <div className="border m-3 ms-0">
                                <Button variant="light" className="m-1">
                                    {assignTo}
                                    <span className="ms-3">
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </span>
                                </Button>
                            </div>

                            <strong>Due</strong>
                            <Form.Control
                                type="date"
                                className="mt-2"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />

                            <div className="row py-4">
                                <div className="col-6">
                                    <Form.Label><strong>Available From</strong></Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={availableFrom}
                                        onChange={(e) => setAvailableFrom(e.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <Form.Label><strong>Until</strong></Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={until}
                                        onChange={(e) => setUntil(e.target.value)}
                                    />
                                </div>
                            </div>
                        </Form>
                        <Button variant="secondary" className="w-100 rounded" style={{
                            marginInline: '0px',
                            borderTopLeftRadius: '0',
                            borderTopRightRadius: '0'
                        }}>
                            + Add
                        </Button>
                    </div>
                </div>

                <div className="row my-3 d-flex align-items-center justify-content-md-center">
                    <div className="col col-md-auto">
                        <Form.Check
                            type="checkbox"
                            label="Do not count this assignment towards the final grade"
                            checked={exclude}
                            onChange={(e) => setExclude(e.target.checked)}
                        />
                    </div>
                </div>

                {/* Continue with the rest of your form fields, and make sure to manage their state if necessary */}

                <hr/>

                <div className="d-flex justify-content-between mb-4">
                    <Form.Check
                        type="checkbox"
                        label="Notify users that this content has changed"
                        checked={notify}
                        onChange={(e) => setNotify(e.target.checked)}
                    />
                    <div>
                        <Button variant="secondary" className="me-2">
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleSave}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default AssignmentEditor;