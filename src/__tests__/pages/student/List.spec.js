import React from 'react';
import List from '../../../pages/Student/List';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { findByTestAtrr } from '../../../utils';
import { studentService } from '../../../services/student.service';
import * as ReactReduxHooks from '../../../utils/react-redux-hooks';

let component;
const match = { isExact: true, path: 'student', url: '' };

let useEffect;
let store;
let students = [];

const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f) => f());
};

const setUp = (props = {}) => {
  const component = mount(
    <Provider store={store}>
      <Router>
        <List match={match} />
      </Router>
    </Provider>
  );
  return component;
};

describe('<List>', () => {
  beforeEach(() => {
    students = studentService.getAllStudent();
    store = configureStore([thunk])({
      student: {
        students: students
      }
    });

    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();

    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());

    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    component = setUp();
  });

  it('Student list componet Render', () => {
    const wrapper = findByTestAtrr(component, 'studentListComponent');
    expect(wrapper.hostNodes().length).toBe(1);
  });

  it('Student component title should be there', () => {
    const wrapper = findByTestAtrr(component, 'studentTopHeader');
    expect(wrapper.first().text()).toBe('Students');
  });

  it('Student list should be loaded', () => {
    let wrapper = findByTestAtrr(component, '_stuRow');
    expect(wrapper.hostNodes()).toHaveLength(students.length);
  });

  describe('Button Click Evnet', () => {
    let confirmSpy;
    beforeAll(() => {
      confirmSpy = jest.spyOn(window, 'confirm');
      confirmSpy.mockImplementation(jest.fn(() => true));
    });

    afterAll(() => confirmSpy.mockRestore());

    it('Remove student button click', () => {
      const button = component.find('button[data-test="btn_delete_0"]');
      button.simulate('click');
      expect(window.confirm).toBeCalled();
    });
  });
});
