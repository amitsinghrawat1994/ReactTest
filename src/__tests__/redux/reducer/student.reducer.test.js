import React from 'react';
import studentReducer from '../../../redux/student/reducer';
import { STUDENT_DELETE, STUDENT_GET_ALL } from '../../../redux/student/type';
import { studentService } from '../../../services/student.service';

describe('Student Reducer Testing', () => {
  let initialState = {
    students: []
  };

  let students = [];
  beforeEach(() => {
    students = studentService.getAllStudent();
  });

  it('should return the initial state', () => {
    expect(studentReducer(undefined, {})).toEqual(initialState);
  });

  it('STUDENT_GET_ALL', () => {
    const action = { type: STUDENT_GET_ALL, data: students };
    const expectedState = {
      students: students
    };
    expect(studentReducer(undefined, action)).toEqual(expectedState);
  });

  it('STUDENT_DELETE', () => {
    const studentId = '6b2f729a-6a3b-4c38-b58e-2dd2ae946c82';
    const action = { type: STUDENT_DELETE, data: studentId };
    
    initialState = {
      students: students
    };

    const expectedState = {
      students: students.filter((x) => x.id !== studentId)
    };

    expect(studentReducer(initialState, action)).toEqual(expectedState);
  });
});
