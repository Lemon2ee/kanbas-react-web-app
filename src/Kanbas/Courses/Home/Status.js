import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBan,
    faBell,
    faCalendarAlt,
    faChartLine,
    faCheckCircle,
    faCloudDownloadAlt,
    faFileImport,
    faHome,
    faStream
} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt as farCalendarAlt} from '@fortawesome/free-regular-svg-icons';

const CourseStatus = () => {
    return (
        <div className="d-flex flex-column mx-3">
            <h2>Course Status</h2>
            <div>
                <button type="button" className="btn btn-danger mx-1">
                    <FontAwesomeIcon icon={faBan}/> Unpublish
                </button>
                <button type="button" className="btn btn-success mx-1">
                    <FontAwesomeIcon icon={faCheckCircle}/> Published
                </button>

                <div className="list-group pt-2">
                    {/* Updated the list items with FontAwesome React components */}
                    {[
                        {icon: faFileImport, text: 'Import Existing Content'},
                        {icon: faCloudDownloadAlt, text: 'Import From Commons'},
                        {icon: faHome, text: 'Choose Home Page'},
                        {icon: faStream, text: 'View Course Stream'},
                        {icon: faBell, text: 'New Announcement'},
                        {icon: faChartLine, text: 'New Analytics'},
                        {icon: faBell, text: 'View Course Notifications'}
                    ].map((item, index) => (
                        <div className="list-group-item list-group-item-action" key={index}>
                            <FontAwesomeIcon icon={item.icon}/> {item.text}
                        </div>
                    ))}
                </div>

                {/* To-Do Section */}
                <div className="pt-3">
                    <h5>TO DO</h5>
                    <hr/>
                </div>

                {/* Calendar Section */}
                <div className="pt-3 align-items-center">
                    <div style={{display: 'inline-block'}}>
                        <h5>Coming Up</h5>
                    </div>
                    <div className="float-end" style={{display: 'inline-block'}}>
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <span className={"mx-1"}
                              style={{textDecoration: 'none', color: 'indianred'}}>View Calendar</span>
                    </div>
                    <hr/>
                </div>

                {/* Events */}
                <div className="d-flex flex-column">
                    {[
                        {text: 'Lecture', date: 'Sep 7 at 11:45am', course: 'CS4550.12631.202410'},
                        {text: 'Lecture', date: 'Sep 11 at 11:45am', course: 'CS4550.12631.202410'},
                        {text: 'Lecture', date: 'Sep 11 at 6pm', course: 'CS5610 06 SP23'}
                    ].map((event, index) => (
                        <div key={index}>
                            <div>
                                <FontAwesomeIcon icon={farCalendarAlt} className="me-2"/>
                                <div className="text-decoration-none" style={{color: 'indianred'}}>
                                    {event.text}
                                </div>
                                <span className="text-muted" style={{fontSize: 'small'}}>
                                    {event.course} {event.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseStatus;
