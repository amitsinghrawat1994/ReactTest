import { Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from '../../utils/react-redux-hooks';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40
  },
  paper: {
    padding: 3,
    textAlign: 'left'
  },
  paperAlign: {
    padding: '20px',
    background: '#FFBF55',
    '&:hover': {
      background: 'green'
    }
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  blockCenter: {
    padding: 2,
    textAlign: 'center'
  },
  block: {
    padding: 2
  },
  box: {
    marginBottom: 40,
    height: 65
  }
});

export const Dashboard = () => {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();

  const handleClose = (text) => {
    if (text === 'teacher') {
      history.push('/teacher');
    } else if (text === 'student') {
      history.push('/student');
    }
  };

  return (
    <Grid
      container
      justify="center"
      style={{
        height: '500px'
      }}
    >
      <Grid
        spacing={4}
        alignItems="center"
        justify="center"
        container
        className={classes.grid}
      >
        <Grid item xs={12} md={4}>
          <Paper
            style={{
              padding: '20px',
              background: '#FFBF55',
              '&:hover': {
                background: 'green'
              }
            }}
            className={classes.paper}
            onClick={() => {
              handleClose('student');
            }}
          >
            <div className={classes.box}>
              <AccountBoxIcon fontSize={'large'}></AccountBoxIcon>
              <Typography variant="body1" gutterBottom>
                Student
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}></div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            style={{ padding: '20px', background: '#FFBF55' }}
            className={classes.paper}
            onClick={() => {
              handleClose('teacher');
            }}
          >
            <div className={classes.box}>
              <AssignmentIndIcon fontSize={'large'}></AssignmentIndIcon>
              <Typography variant="body1" gutterBottom>
                Teacher
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}></div>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
