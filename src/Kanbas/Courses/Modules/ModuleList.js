import React from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import {Accordion} from "react-bootstrap";


function ModuleList() {
    const {courseId} = useParams();
    const modules = db.modules;
    const sections = ["Resources", "Required Textbook", "Week 0", "Week 1", "Week 2"];

    return (
        <div className={"flex-grow-1"}>
            <ul>
                {
                    sections.map((section, index) => (  // Added 'index' as second parameter in the map function
                            <Accordion key={index} className={"full-width-accordion my-3"}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        {section}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-group">
                                            {
                                                modules
                                                    .filter((module) => module.course === courseId)
                                                    .map((module, index) => (
                                                        <li key={index} className="list-group-item">
                                                            <h3>{module.name}</h3>
                                                            <p>{module.description}</p>
                                                        </li>
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
