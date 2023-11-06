import {configureStore} from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentsReducer";

const store = configureStore({
    reducer: {
        modulesReducer: modulesReducer,
        assignmentReducer: assignmentReducer,
    }
});


export default store;