import {
    subjectService
} from "../../services/subject.service";
import {
    SUBJECT_ALL
} from './type';

//action creator
function getAllSubject() {
    var subjects = subjectService.getAllSubject();
    if (subjects && subjects.length) {
        return {
            type: SUBJECT_ALL,
            data: subjects
        }
    }
}

export const subjectAction = {
    getAllSubject,
}