import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { Formik } from 'formik';
//import * as _ from 'lodash';
import * as Yup from 'yup';
import {
  Avatar,
  Container,
  CssBaseline,
  Grid,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { teacherAction } from '../../redux/teacher/action';

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

const AddEdit = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teacher.teachers);

  const addTeacher = (teacherName) => {
    let newTeacher = {
      id: 0,
      name: teacherName,
      subject: []
    };
    if (teachers && teachers.length) {
      newTeacher.id = teachers[teachers.length - 1].id + 1;
    }
    dispatch(teacherAction.addTeacher(newTeacher));
    history.push('/teacher');
  };

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
                Add Teacher
              </Typography>
              <Formik
                initialValues={{ name: '' }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  addTeacher(values.name);
                  console.log(values);
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required('Required')
                })}
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
                      <Button
                        style={{ marginRight: '10px' }}
                        type="button"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => history.push('/teacher')}
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

export default AddEdit;
