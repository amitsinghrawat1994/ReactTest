import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

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

export const NavBar = ({ match }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isHomePage, setIsHomePage] = React.useState(false);
  let history = useHistory();
  const location = useLocation();

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

  const listenUrlChange = () => {
    history.listen((location, action) => {
      if (location.pathname === '/') {
        setIsHomePage(true);
      } else {
        setIsHomePage(false);
      }
    });
  };

  const setBackButton = () => {
    if (location.pathname === '/') {
      setIsHomePage(true);
    }
  };

  useEffect(() => {
    setBackButton();
    listenUrlChange();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {!isHomePage && (
            <div>
              <Button
                title={'Back'}
                onClick={() => {
                  history.goBack();
                }}
              >
                <KeyboardBackspaceIcon />
              </Button>
            </div>
          )}

          <div className={classes.menuRight}>
            <Button
              title={'Home'}
              onClick={() => {
                history.push('/');
              }}
            >
              <HomeIcon />
            </Button>
            <Button
              title={'Choose option'}
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
