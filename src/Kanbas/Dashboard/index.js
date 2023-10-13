import db from "../Database";
import {Card, Col, Container, Row} from 'react-bootstrap';

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            {/*<div className="list-group">*/}
            {/*    {courses.map((course) => (*/}
            {/*        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">*/}
            {/*            {course.name}*/}
            {/*        </Link>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <Container fluid>
                <Row>
                    {courses.map((course) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                            <Card title={item.title} content={item.content}/>
                        </Col>
                    ))}

                    {courses.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                            <Card title={item.title} content={item.content}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;