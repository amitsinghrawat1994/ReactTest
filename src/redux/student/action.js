import { studentService } from '../../services/student.service';
import store from '../configureStore';
import {
  STUDENT_ADD,
  STUDENT_GET_ALL,
  STUDENT_NOTFOUND,
  STUDENT_GET,
  STUDENT_DELETE
} from './type';

// Action Creator
function getAllStudent() {
  const storeStudents = store.getState().student.students;
  if (storeStudents && storeStudents.length) {
    return {
      type: STUDENT_GET_ALL,
      data: storeStudents
    };
  } else {
    const students = studentService.getAllStudent();
    if (students && students.length) {
      return {
        type: STUDENT_GET_ALL,
        data: students
      };
    } else {
      return {
        type: STUDENT_NOTFOUND
      };
    }
  }
}

function addStudent(student) {
  if (student) {
    return {
      type: STUDENT_ADD,
      data: student
    };
  } else {
    return {
      type: STUDENT_NOTFOUND,
      data: undefined
    };
  }
}

const getStudent = (studentId) => {
  const storeStudents = store.getState().student.students;
  if (storeStudents && storeStudents.count) {
    const student = storeStudents.find((x) => x.id === studentId);
    return {
      type: STUDENT_GET,
      data: student
    };
  } else {
    return {
      type: STUDENT_GET,
      data: undefined
    };
  }
};

const deleteStudent = (studentId) => {
  return {
    type: STUDENT_DELETE,
    data: studentId
  };
};

export const studentAction = {
  getAllStudent,
  addStudent,
  getStudent,
  deleteStudent
};
