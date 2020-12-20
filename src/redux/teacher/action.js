import {
    teacherService
} from "../../services/teacher.server"
import store from "../configureStore";
import {
    TEACHER_ADD,
    TEACHER_ADD_SUBJECT,
    TEACHER_ALL,
    TEACHER_DELETE,
    TEACHER_NOTFOUND
} from "./type";

const initialTeacher = {
    id: 0,
    name: '',
    subject: []
}

const getAllTeacher = () => {
    const teacherDb = store.getState().teacher.teachers;
    if (teacherDb && teacherDb.length) {
        return {
            type: TEACHER_ALL,
            data: teacherDb
        }
    } else {
        const teachers = teacherService.getDefaultTeacher();
        return {
            type: TEACHER_ALL,
            data: teachers ? teachers : []
        }
    }
}

const addSubject = ({
    teacherId,
    subjectId
}) => {
    let teacher = store.getState().teacher.teachers.find(x => x.id === teacherId);
    if (!teacher) {
        return {
            type: TEACHER_NOTFOUND,
            data: "Can not find a teacher"
        }
    } else {
        teacher.subject.push(subjectId);

        return {
            type: TEACHER_ADD_SUBJECT,
            data: teacher
        }
    }
}

const deleteTeacher = (teacherId) => {
    return {
        type: TEACHER_DELETE,
        data: teacherId
    }
}

const addTeacher = (teacher = initialTeacher) => {
    if (teacher.id !== 0) {
        return {
            type: TEACHER_ADD,
            data: teacher
        }
    } else {
        return {
            type: TEACHER_NOTFOUND,
            data: teacher
        }
    }
}


export const teacherAction = {
    getAllTeacher,
    addSubject,
    deleteTeacher,
    addTeacher
}