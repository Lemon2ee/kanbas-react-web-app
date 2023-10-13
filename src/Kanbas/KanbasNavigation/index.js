import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navBarIcons from "./navBarIconMapping";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studios", "Commons", "Info"];
    const { pathname } = useLocation();

    return (
        <div className="d-flex flex-column flex-shrink-0 flex-grow-1 bg-black sidebar-list"
             style={{
                 width: '80px',
                 maxWidth: '80px',
                 height: '100vh'
             }}>

            {/*Kanbas logo*/}
            <a href="/" className="d-block p-2 link-dark bg-black">
                <img src="https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png"
                     alt="kanbas-logo" className="img-fluid">
                </img>
            </a>

            {/*nav bar item list*/}
            <ul className="nav nav-flush mb-auto flex-column text-center d-flex bg-white">
                {links.map((link, index) => (
                    <li key={index}
                        className={
                        `nav-item py-2
                        ${pathname.includes(link) ? "bg-white text-danger" : "bg-black text-white"} 
                        ${pathname.includes(link) && "active"}`
                    }>
                        <Link to={`/Kanbas/${link}`}
                              className={pathname.includes(link) ? "text-danger" : "text-white"}
                              style={{
                                  textDecoration: "none",
                                  display: "block",
                                  fontSize: "small"
                              }}
                        >
                            <FontAwesomeIcon
                                icon={navBarIcons[link]}
                                className="fa-xl"
                                style={{color: link === 'Account' ? 'gray' : '#ff0000'}}
                            />

                            <div className="mt-1"></div>
                            <span>{link.charAt(0).toUpperCase() + link.slice(1)}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default KanbasNavigation;