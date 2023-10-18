import ModuleList from "./ModuleList";
import ModuleButtons from "./ModuleButtons";

function Modules() {
    return (
        <div className={"p-3 flex-grow-1 d-flex flex-column"}>
            <ModuleButtons/>
            <ModuleList/>
        </div>
    );
}

export default Modules;
