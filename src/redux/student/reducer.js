import {
    STUDENT_ADD,
    STUDENT_DELETE,
    STUDENT_GET_ALL,
    STUDENT_NOTFOUND
} from './type'

// Default state
const initialState = {
    students: []
}
const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case STUDENT_GET_ALL:
            return {
                ...state, students: action.data
            };
        case STUDENT_ADD:
            return {
                ...state, students: state.students.concat([action.data])
            };
        case STUDENT_DELETE:
            return {
                ...state, students: state.students.filter(x => x.id !== action.data)
            };
        case STUDENT_NOTFOUND:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default studentReducer;