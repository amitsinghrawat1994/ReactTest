import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { subjectAction } from '../../redux/subject/action';
import { teacherAction } from '../../redux/teacher/action';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Detail = ({ match }) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let student = {};
  let teachers = [];
  let subjects = [];

  student = useSelector((state) => {
    if (!state.student?.students ?? true) {
      return null;
    }
    var student = state.student.students.find((x) => x.id === id);
    if (!student) return null;

    return student;
  });

  teachers = useSelector((state) => state.teacher?.teachers ?? []);
  subjects = useSelector((state) => state.subject?.subjects ?? []);

  const initDispatch = () => {
    dispatch(teacherAction.getAllTeacher());
    dispatch(subjectAction.getAllSubject());
  };

  useEffect(() => {
    initDispatch();
  }, []);

  return (
    <>
      <Paper elevation={1}>
        {student ? (
          <StudentDeail
            student={student}
            teachers={teachers}
            subjects={subjects}
          />
        ) : (
          <EmptyStudentDetail />
        )}
      </Paper>
    </>
  );
};

const StudentDeail = ({ student, teachers, subjects }) => {
  const classes = useStyles();

  const getTeacherName = (subjectId) => {
    const teacher = teachers.find((x) =>
      x.subject.find((y) => y === subjectId)
    );
    if (subjectId === 0) {
      debugger;
    }
    return teacher ? teacher.name : 'Teacher Not Found.';
  };

  const getSubjectName = (subjectId) => {
    const subject = subjects.find((x) => x.id === subjectId);
    return subject ? subject.name : 'Subject Not Found.';
  };

  return (
    <>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Student Detail
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Name
                    </TableCell>
                    <TableCell align="left">{student.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Teachers Info
                    </TableCell>
                    <TableCell>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Subject</TableCell>
                              <TableCell>Teacher</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {student.subject.map((row, i) => (
                              <TableRow key={i}>
                                <TableCell>{getSubjectName(row)}</TableCell>
                                <TableCell>{getTeacherName(row)}</TableCell>
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
      </Container>
    </>
  );
};

const EmptyStudentDetail = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
              <p>No student found.</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Detail;
