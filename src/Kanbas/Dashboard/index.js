import {Card, Col, Container, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Dashboard(
    {
        courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse
    }
) {

    const updateCourseField = (field, value) => {
        setCourse(prevCourse => ({
            ...prevCourse,
            [field]: value
        }));
    }


    return (
        <div className={"p-3 flex-grow-1 overflow-y-auto"} style={{height: '100vh'}}>
            <div className={"d-flex justify-content-between"}>
                <h1>Dashboard</h1>

                <div>
                    <h5>Course</h5>
                    <input
                        value={course.name}
                        onChange={(event) => updateCourseField("name", event.target.value)}
                        className="form-control"
                    />

                    <input
                        value={course.number}
                        onChange={(event) => updateCourseField("number", event.target.value)}
                        className="form-control"
                    />

                    <input
                        value={course.startDate}
                        onChange={(event) => updateCourseField("startDate", event.target.value)}
                        className="form-control"
                        type="date"
                    />

                    <input
                        value={course.endDate}
                        onChange={(event) => updateCourseField("endDate", event.target.value)}
                        className="form-control"
                        type="date"
                    />

                    <button className={"btn btn-dark m-1"} onClick={addNewCourse}>
                        Add
                    </button>


                    <button className={"btn btn-dark m-1"} onClick={updateCourse}>
                        Update
                    </button>


                </div>

            </div>

            <hr/>
            <h3>
                Published Courses ({courses.length})
            </h3>

            {/*table of cards*/}
            <Container fluid>
                <Row>
                    {courses.map((course) => (
                        <Col key={course['_id']} xs={12} sm={6} md={6} lg={3}
                             className="d-flex justify-content-center my-1">
                            <Link to={`/Kanbas/Courses/${course['_id']}`}
                                  style={{textDecoration: 'none', color: 'inherit'}}>
                                <Card
                                    style={{
                                        width: '260px !important',
                                        height: '260px !important'
                                    }}
                                    title={course.name}
                                    content={course.number}
                                >
                                    <Card.Body style={{padding: 0}}>
                                        <svg width="100%" height="50%" xmlns="http://www.w3.org/2000/svg"
                                             className="card-img-top">
                                            <rect width="100%" height="100%" fill={"#08CBE6"}></rect>
                                        </svg>

                                        <div style={{padding: 10}}>
                                            <Card.Title>
                                                {course['name']}

                                                <button className={"float-end btn btn-dark"}
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}>
                                                    Edit
                                                </button>

                                                <button className={"btn btn-dark m-1"}
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            deleteCourse(course._id);
                                                        }}>
                                                    Delete
                                                </button>

                                            </Card.Title>

                                            <Card.Subtitle className="mb-2 text-muted">
                                                {course['startDate']}
                                            </Card.Subtitle>

                                            <Card.Text>
                                                {course['number']}
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;