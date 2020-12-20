import { SUBJECT_ALL } from './type';

const initialState = {
  subjects: []
};

// reducer
const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBJECT_ALL:
      return {
        ...state,
        subjects: action.data
      };
    default:
      return state;
  }
};

export default subjectReducer;
