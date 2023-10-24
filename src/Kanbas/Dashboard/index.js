import db from "../Database";
import {Card, Col, Container, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Dashboard() {
    const courses = db.courses;

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className={"m-3 flex-grow-1"}>
            <h1>Dashboard</h1>
            <hr/>
            <h3>
                Published Courses ({courses.length})
            </h3>

            {/*table of cards*/}
            <Container fluid>
                <Row>
                    {courses.map((course) => (
                        <Col key={course._id} xs={12} sm={6} md={4} lg={3}
                             className="d-flex justify-content-center m-2">
                            <Link to={`/Kanbas/Courses/${course._id}`}
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
                                            <rect width="100%" height="100%" fill={getRandomColor()}></rect>
                                        </svg>

                                        <div style={{padding: 10}}>
                                            <Card.Title>
                                                {course.name}
                                            </Card.Title>

                                            <Card.Subtitle className="mb-2 text-muted">
                                                {course.startDate}
                                            </Card.Subtitle>

                                            <Card.Text>
                                                {course.number}
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