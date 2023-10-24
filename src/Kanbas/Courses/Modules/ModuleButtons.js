import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faEllipsisV, faPlus} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomButton = ({variant, children, icon, ...props}) => (
    <Button variant={variant} className="mx-1" {...props}>
        {icon && <FontAwesomeIcon icon={icon} className="me-1"/>}{children}
    </Button>
);


const CustomDropdown = ({children, ...props}) => (
    <Dropdown className="mx-1" {...props}>
        {children}
    </Dropdown>
);

function ModuleButtons() {
    return (
        <div className="d-flex justify-content-end">
            <CustomButton variant="secondary">Collapse All</CustomButton>
            <CustomButton variant="secondary">View Progress</CustomButton>

            <CustomDropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    <FontAwesomeIcon icon={faCheckCircle} style={{color: '#16ac28'}}/> Publish All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Publish All</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
            </CustomDropdown>

            <CustomButton variant="danger" icon={faPlus}>Module</CustomButton>
            <CustomButton variant="secondary" icon={faEllipsisV}></CustomButton>
        </div>
    );
}

export default ModuleButtons;
