import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignment: {
        title: "New Assignment",
        course: "Course name",
        dueDate: "",
        availableFromDate: "",
        availableUntilDate: "",
        description: ""
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                {...action.payload, _id: new Date().getTime().toString()},
                ...state.assignments,
            ];
        },
        // deleteModule: (state, action) => {
        //     state.modules = state.modules.filter(
        //         (module) => module._id !== action.payload
        //     );
        // },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});


export const {
    addModule, deleteModule,
    updateAssignment, setAssignment
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;