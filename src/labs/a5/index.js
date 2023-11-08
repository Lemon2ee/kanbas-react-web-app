import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    return (
        <div>
            <h1>Assignment 5</h1>
            <WorkingWithArrays/>
            <WorkingWithObjects/>
            <EncodingParametersInURLs/>
            <div className="list-group">
                <a href={`${process.env.REACT_APP_API_BASE}/a5/welcome`}
                   className="list-group-item">
                    Welcome
                </a>
            </div>
        </div>
    );
}

export default Assignment5;