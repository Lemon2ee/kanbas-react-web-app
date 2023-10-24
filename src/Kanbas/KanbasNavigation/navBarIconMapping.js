// iconMapping.js
import {
    faUser,
    faTachometerAlt,
    faBook,
    faCalendarDay,
    faInbox,
    faClock,
    faShareSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
    faQuestionCircle as faQuestionCircleRegular
} from '@fortawesome/free-regular-svg-icons';
import {
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

const navBarIcons = {
    Account: faUser,
    Dashboard: faTachometerAlt, // Adjust this to the correct icon as faGauge isn’t available
    Courses: faBook,
    Calendar: faCalendarDay, // Adjust this as faCalendarDays isn’t available
    Inbox: faInbox,
    History: faClock,
    Studios: faYoutube,
    Commons: faShareSquare, // Adjust this as faShareFromSquare isn’t available
    Info: faQuestionCircleRegular // Adjust this to the correct icon
};

export default navBarIcons;