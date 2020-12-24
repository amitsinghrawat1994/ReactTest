import { v4 as uuidv4 } from 'uuid';
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
  TextField,
  Grid
} from '@material-ui/core';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import PersonIcon from '@material-ui/icons/Person';
import { studentAction } from '../../redux/student/action';
import { useDispatch } from '../../utils/react-redux-hooks';
import { subjectAction } from '../../redux/subject/action';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const AddEdit = ({ history, match }) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    address: '',
    subjects: []
  };
  const { id } = match.params;
  const isAddMode = !id;

  const classes = useStyles();

  let [subjects, setSubjects] = useState([]);

  subjects = useSelector((state) => state.subject.subjects);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    address: Yup.string().required('Required')
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    if (isAddMode) {
      createUser(fields, setSubmitting);
    } else {
      updateUser(id, fields, setSubmitting);
    }
  }

  function createUser(fields, setSubmitting) {
    const selectedSubject = subjects.filter((s) => s.ischecked);
    const newStudent = {
      id: uuidv4(),
      name: fields.name,
      address: fields.address,
      subject: !selectedSubject ? [] : selectedSubject.map((x) => x.id)
    };
    dispatch(studentAction.addStudent(newStudent));
    history.push('/student');
  }

  function updateUser(id, fields, setSubmitting) {}

  const handleCheckBoxClick = (e) => {
    subjects.forEach((subject) => {
      if (subject.id === +e.target.value) {
        subject.ischecked = e.target.checked;
      }
    });
    setSubjects(subjects);
  };

  const initDispatch = () => {
    dispatch(subjectAction.getAllSubject());
  };

  useEffect(() => {
    initDispatch();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Add Student
              </Typography>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit
                  } = props;
                  return (
                    <form
                      className={classes.form}
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.name && touched.name && errors.name}
                        autoFocus
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="Address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.name && touched.name && errors.name}
                        autoFocus
                      />
                      <br />
                      <Typography variant="h6">Add / Modify Subject</Typography>
                      <ul className="subject">
                        {subjects.map((subject) => {
                          return (
                            <CheckBox
                              key={subject.id}
                              handleCheckBoxClick={handleCheckBoxClick}
                              {...subject}
                            />
                          );
                        })}
                      </ul>
                      <Button
                        style={{ marginRight: '10px' }}
                        type="button"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => history.push('/student')}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Save
                      </Button>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export { AddEdit };

const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onClick={props.handleCheckBoxClick}
        type="checkbox"
        checked={props.ischecked}
        value={props.id}
      />{' '}
      {props.name}
    </li>
  );
};
