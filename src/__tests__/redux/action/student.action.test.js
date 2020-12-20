import configureStore from 'redux-mock-store';
import { v4 as uuidv4 } from 'uuid';

// Actions to be tested
import { studentAction } from '../../../redux/student/action';
import {
  STUDENT_ADD,
  STUDENT_GET,
  STUDENT_GET_ALL
} from '../../../redux/student/type';
import { studentService } from '../../../services/student.service';

const mockStore = configureStore();
const store = mockStore();

describe('STUDENT_GET_ALL', () => {
  let students = [];

  beforeEach(() => {
    store.clearActions();
    students = studentService.getAllStudent();
  });

  it('STUDENT_GET_ALL', () => {
    const expectedActions = [
      {
        data: students,
        type: STUDENT_GET_ALL
      }
    ];
    store.dispatch(studentAction.getAllStudent());
    expect(store.getActions()).toEqual(expectedActions);
  });


  it('STUDENT_ADD', () => {
    let newStudent = {
      id: uuidv4(),
      name: 'Name1',
      address: 'address',
      subject: [1, 2]
    };

    const expectedActions = [
      {
        type: STUDENT_ADD,
        data: newStudent
      }
    ];

    store.dispatch(studentAction.addStudent(newStudent));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
