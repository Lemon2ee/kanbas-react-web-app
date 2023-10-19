import Dropdown from "react-bootstrap/Dropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import {faCog, faFileExport, faFileImport, faFilter, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function GradesHeader() {
    return (
        <div className="px-4 d-flex flex-column flex-grow-1">
            <div className="float-end d-flex header justify-content-end align-items-center">
                <Button type="button" variant="secondary" className="ms-3">
                    <FontAwesomeIcon icon={faFileImport}/>
                    <span> Import</span>
                </Button>

                <Dropdown className="ms-3">
                    <Dropdown.Toggle
                        style={{width: '100%'}}
                        variant="secondary"
                        id="dropdown-export"
                        className="btn-block text-start"
                    >
                        <FontAwesomeIcon icon={faFileExport}/>
                        <span className="text-start"> Export</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Export</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Button type="button" variant="secondary" className="ms-2">
                    <FontAwesomeIcon icon={faCog}/>
                </Button>
            </div>
            <div className="row py-4">
                <div className="col-6">
                    <label htmlFor="available-from" className="form-label">
                        <strong>Student Name</strong>
                    </label>
                    <Dropdown>
                        <Dropdown.Toggle
                            style={{width: '100%'}}
                            variant="outline-secondary"
                            id="dropdown-student"
                            className="btn-block text-start"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            <span className="text-start"> Search Students</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Search students</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="col-6">
                    <label htmlFor="until" className="form-label">
                        <strong>Assignment Names</strong>
                    </label>
                    <Dropdown>
                        <Dropdown.Toggle
                            style={{width: '100%'}}
                            variant="outline-secondary"
                            id="dropdown-assignment"
                            className="btn-block text-start"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            <span className="text-start"> Search Assignments</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Search assignments</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div>
                    <Button type="button" variant="secondary" className="mt-3 float-end"
                            style={{width: 'initial'}}>
                        <FontAwesomeIcon icon={faFilter}/> Apply Filters
                    </Button>
                </div>


            </div>
        </div>

    );
}

export default GradesHeader;