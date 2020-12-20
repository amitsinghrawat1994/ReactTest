import {
    TEACHER_ADD,
    TEACHER_ADD_SUBJECT,
    TEACHER_ALL,
    TEACHER_DELETE
} from "./type";

const initialState = {
    teachers: []
};

const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEACHER_ALL:
            return {
                ...state, teachers: action.data
            };
        case TEACHER_ADD:
            return {
                ...state, teachers: state.teachers.concat([action.data])
            };
        case TEACHER_ADD_SUBJECT:
            return {
                ...state, teachers: state.teachers.concat([])
            };
        case TEACHER_DELETE:
            return {
                ...state, teachers: state.teachers.filter(x => x.id !== action.data)
            };
        default:
            return state;
    }
};

export default teacherReducer;