import {Link, useLocation, useParams} from "react-router-dom";


function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const {courseId} = useParams();
    const {pathname} = useLocation();

    return (
        <div className="list-group m-3" style={{
            width: '150px',
            '--bs-list-group-border-width': '0',
            '--bs-list-group-border-radius': '0'
        }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`text-danger list-group-item ${pathname.includes(link) && "border-start border-black"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}

export default CourseNavigation;