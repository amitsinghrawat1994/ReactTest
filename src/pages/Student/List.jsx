import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import {
  Button,
  ButtonGroup,
  Grid,
  Table,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { useDispatch, useSelector } from '../../utils/react-redux-hooks';
import { studentAction } from '../../redux/student/action';

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
  const students = useSelector((state) => state.student?.students ?? undefined);

  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => dispatch(studentAction.getAllStudent()), []);

  const deleteStudent = (studentId) => {
    if (window.confirm('Are you sure you wish to delete ?')) {
      dispatch(studentAction.deleteStudent(studentId));
    }
  };

  return (
    <>
      <Container maxWidth={false} className={classes.container} data-test="studentListComponent">
        <Typography data-test="studentTopHeader" variant="h4">
          Students
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Grid item>
              <Button id={'btnAddStudent'} color="primary">
                <Link to={`${path}/add`}>Add Student</Link>
              </Button>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <TableContainer className={classes.table} aria-label="simple table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students &&
                    students.map((row, i) => (
                      <TableRow
                        key={row.name}
                        className={'_stuRow'}
                        id={'_stuRowId_' + i}
                        data-test="_stuRow"
                      >
                        <TableCell component="th" scope="row">
                          <Typography className={classes.root}>
                            <Link to={`/student/${row.id}`}>{row.name}</Link>
                          </Typography>
                        </TableCell>
                        <TableCell>{row.address}</TableCell>
                        <TableCell align="right">
                          <ButtonGroup
                            variant="text"
                            color="primary"
                            aria-label="text primary button group"
                          >
                            <Button
                              data-test={'btn_delete_' + i}
                              id={'_stuDeleteBtn' + i}
                              key={row.id}
                              onClick={() => deleteStudent(row.id)}
                            >
                              Delete
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default List;
