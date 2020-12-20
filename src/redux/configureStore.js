import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import thunk from 'redux-thunk';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

import student from './student/reducer';
import subject from './subject/reducer';
import teacher from './teacher/reducer';

const rootReducer = combineReducers({
    student,
    subject,
    teacher
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;