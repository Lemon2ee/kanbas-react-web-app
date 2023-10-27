import React, {useState} from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import {Accordion} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEllipsisV, faGripVertical, faLink, faPlus} from "@fortawesome/free-solid-svg-icons"; // Make sure you have font-awesome installed


function ModuleList() {
    const {courseId} = useParams();
    const [modules, setModules] = useState(db.modules);
    const sections = ["Resources", "Required Textbook", "Week 0", "Week 1", "Week 2"];
    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });

    return (
        <div className={"flex-grow-1"}>
            <ul>
                {
                    sections.map((section, index) => (  // Added 'index' as second parameter in the map function
                            <Accordion key={index} className={"full-width-accordion my-3"}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className={"d-flex justify-content-between flex-grow-1 align-items-center"}>
                                            {section}
                                            <div className={"end-0"}>
                                                <FontAwesomeIcon
                                                    icon={faCheckCircle}
                                                    className="fas text-success m-1"
                                                    style={{color: '#16ac28'}}
                                                    aria-hidden="true"
                                                />
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                    className="fas m-1"
                                                    style={{color: 'currentColor'}}
                                                    aria-hidden="true"
                                                />
                                                <FontAwesomeIcon
                                                    icon={faEllipsisV}
                                                    className="fas m-1"
                                                    style={{color: 'currentColor'}}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-group">
                                            {
                                                modules
                                                    .filter((module) => module.course === courseId)
                                                    .map((module, index) => (
                                                        // <li key={index} className="list-group-item">
                                                        //     <h3>{module.name}</h3>
                                                        //     <p>{module.description}</p>
                                                        // </li>
                                                        <div key={index}
                                                             className="list-group-item list-group-item-action d-flex justify-content-between align-items-center green-border">
                                                            <div>
                                                                <FontAwesomeIcon
                                                                    icon={faGripVertical}
                                                                    className="fa-solid"
                                                                    style={{color: 'currentColor'}}
                                                                />
                                                                <FontAwesomeIcon
                                                                    icon={faLink}
                                                                    className="fas text-success ps-5"
                                                                    style={{color: '#16ac28'}}
                                                                />
                                                                <span
                                                                    style={{color: 'indianred'}}
                                                                >
                                                                    {module.description}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <FontAwesomeIcon
                                                                    icon={faEllipsisV}
                                                                    className="fas float-end"
                                                                    style={{color: 'currentColor'}}
                                                                />
                                                                <FontAwesomeIcon
                                                                    icon={faCheckCircle}
                                                                    className="fas text-success float-end me-2"
                                                                    style={{color: '#16ac28'}}
                                                                />
                                                            </div>

                                                        </div>
                                                    ))
                                            }
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default ModuleList;
