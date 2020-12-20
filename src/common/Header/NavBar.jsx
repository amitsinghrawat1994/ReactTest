import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menuRight: {
    marginLeft: 'auto'
  }
}));

export const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (text) => {
    if (text === 'teacher') {
      history.push('/teacher');
    } else if (text === 'student') {
      history.push('/student');
    }
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menuRight}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <SchoolIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => {
                handleClose('');
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose('student');
                }}
              >
                Student
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose('teacher');
                }}
              >
                Teacher
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
