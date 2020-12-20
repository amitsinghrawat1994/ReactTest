import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { teacherAction } from '../../redux/teacher/action';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const List = ({ match }) => {
  const { path } = match;
  const classes = useStyles();
  const dispatch = useDispatch();

  let teachers = [];

  teachers = useSelector((state) => {
    return state.teacher?.teachers ?? [];
  });

  useEffect(() => dispatch(teacherAction.getAllTeacher()), []);

  const deleteTeacher = (teacherId) => {
    if (window.confirm('Are you sure you wish to delete ?')) {
      dispatch(teacherAction.deleteTeacher(+teacherId));
    }
  };

  return (
    <Container maxWidth={false} className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Grid item>
            <Button color="primary">
              <Link to={`${path}/add`}>Add Teacher</Link>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <TableContainer className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Teacher Name</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teachers.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <Typography className={classes.root}>
                        <Link to={`/teacher/${row.id}`}>{row.name}</Link>
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <ButtonGroup
                        variant="text"
                        color="primary"
                        aria-label="text primary button group"
                      >
                        <Button onClick={() => deleteTeacher(row.id)}>
                          Delete
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TableContainer>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export { List };
