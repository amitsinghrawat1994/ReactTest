import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { studentAction } from '../../redux/student/action';
import { subjectAction } from '../../redux/subject/action';
import { teacherAction } from '../../redux/teacher/action';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let teacher = {};
  let students = [];
  let subjects = [];

  teacher = useSelector((state) => {
    if (!state.teacher?.teachers ?? true) return null;
    const storeTeacher = state.teacher.teachers.find((x) => x.id == id);
    if (!storeTeacher) return null;

    return storeTeacher;
  });

  students = useSelector((state) => state.student?.students ?? []);
  subjects = useSelector((state) => state.subject?.subjects ?? []);

  const initDispatch = () => {
    dispatch(teacherAction.getAllTeacher());
    dispatch(studentAction.getAllStudent());
    dispatch(subjectAction.getAllSubject());
  };

  useEffect(() => initDispatch(), []);

  return (
    <>
      {teacher ? (
        <TeacherListDetail
          teacher={teacher}
          students={students}
          subjects={subjects}
        />
      ) : (
        <p>Teacher not found</p>
      )}
    </>
  );
};

const TeacherListDetail = ({ teacher, students, subjects }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [teacherSubject, setTeacherSubject] = useState([]);

  const getSubjectName = (subjectId) => {
    const subject = subjects.find((x) => x.id == subjectId);
    return subject ? subject.name : 'No Subject Found';
  };

  const getSubjectStudents = (subjectId) => {
    const subjectStudents = students.filter((x) =>
      x.subject.find((y) => y === subjectId)
    );

    return subjectStudents
      ? subjectStudents.map((row, i) => {
          return (
            <Typography key={i}>
              <Link to={`/student/${row.id}`}>{row.name}</Link>
            </Typography>
          );
        })
      : 'No student found';
  };

  const updateTeacherSubject = () => {
    if (!teacher?.subject ?? true) {
      setTeacherSubject([]);
    } else {
      setTeacherSubject(
        subjects.filter((x) => !teacher.subject.includes(x.id))
      );
    }
  };

  useEffect(() => {
    updateTeacherSubject();
  }, []);

  return (
    <>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Teacher Detail
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Name
                    </TableCell>
                    <TableCell align="left">{teacher.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Student Info
                    </TableCell>
                    <TableCell>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Subject</TableCell>
                              <TableCell>Students</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {teacher.subject.map((row, i) => (
                              <TableRow key={i}>
                                <TableCell>{getSubjectName(row)}</TableCell>
                                <TableCell>{getSubjectStudents(row)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Container component="main" maxWidth="xs">
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Add subject
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {teacherSubject && teacherSubject.length ? (
                <Formik
                  initialValues={{ subject: '' }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    dispatch(
                      teacherAction.addSubject({
                        teacherId: teacher.id,
                        subjectId: +values.subject
                      })
                    );
                    updateTeacherSubject();
                    resetForm({ values: '' });
                  }}
                  validationSchema={Yup.object().shape({
                    subject: Yup.string().required('Required')
                  })}
                >
                  {(props) => {
                    const {
                      values,
                      handleChange,
                      handleSubmit,
                      handleReset
                    } = props;
                    return (
                      <form onSubmit={handleSubmit}>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="subject-native-simple">
                            Subject
                          </InputLabel>
                          <Select
                            native
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                          >
                            <option aria-label="None" value="" />
                            {teacherSubject.map((row, i) => (
                              <option key={i} value={row.id}>
                                {row.name}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                        <br />
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                        <Button type="submit">Submit</Button>
                      </form>
                    );
                  }}
                </Formik>
              ) : (
                <p>No subject found</p>
              )}
            </Grid>
          </Container>
        </Grid>
      </Container>
    </>
  );
};

export default Detail;
