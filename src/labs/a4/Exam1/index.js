import React from "react";

function Xtr({fds}) {
    const [yui, rty] = React.useState(fds);
    return (
        <div>
            <h2>{yui}</h2>
            <input
                value={yui}
                onChange={(qwe) => rty(qwe.target.value)}
            />
        </div>
    );
}

const Exam = () => {
    return (
        <div>
            <Xtr fds="gfd"/>
        </div>
    );
};

export default Exam;