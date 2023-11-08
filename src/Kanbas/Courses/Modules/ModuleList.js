import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Accordion} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEllipsisV, faGripVertical, faLink, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {addModule, deleteModule, setModule, setModules, updateModule,} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule({...module, course: courseId}))
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then(() => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        client.updateModule(module).then((module) => {
            dispatch(updateModule(module));
        });

    };


    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId, dispatch, modules]);


    return (
        <div className={"flex flex-grow-1"}>
            <div className={""}>
                <div>
                    <input value={module.name}
                           className={"form-control"}
                           onChange={(e) => dispatch(setModule({...module, name: e.target.value}))
                           }
                    />
                    <textarea value={module.description}
                              className={"form-control"}
                              onChange={(e) =>
                                  dispatch(setModule({...module, description: e.target.value}))
                              }
                    />
                    <button className={"btn btn-primary mx-1"}
                            onClick={handleAddModule}>Add
                    </button>

                    <button className={"btn btn-primary mx-1"} onClick={handleUpdateModule}
                    >Update
                    </button>
                </div>

            </div>

            <div>
                <ul>
                    {
                        modules.filter((module) => module.course === courseId).map((module) => (  // Added 'index' as second parameter in the map function
                                <Accordion key={module['_id']} className={"full-width-accordion my-3"}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div
                                                className={"d-flex justify-content-between flex-grow-1 align-items-center"}>
                                                {module['name']}
                                                <div
                                                    className={"end-0"}>
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
                                                    <a
                                                        href="#!"
                                                        className="btn btn-danger m-1"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleDeleteModule(module._id)
                                                        }}>
                                                        Delete
                                                    </a>

                                                    <a
                                                        href="#!"
                                                        className="btn btn-primary m-1"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            dispatch(setModule(module))
                                                        }}>
                                                        Edit
                                                    </a>


                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-group">
                                                {
                                                    <div key={module['_id']}
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
                                                                    {module['description']}
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

        </div>
    );
}

export default ModuleList;
