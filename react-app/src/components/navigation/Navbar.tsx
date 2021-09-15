import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ReactComponent as Title } from '../../assets/title.svg';
import { Icon } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import EvStationIcon from '@material-ui/icons/EvStation';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import DescriptionIcon from '@material-ui/icons/Description';
import { useHistory } from 'react-router';
// import { People } from '@material-ui/icons';

const drawerWidth = 240;

const categories = [
  {
    id: '',
    children: [
      { id: 'Dashboard', icon: <PeopleIcon />, location: '/Dashboard', active: false },
      { id: 'Charger Station', icon: <EvStationIcon />, location: '/Dashboard/Chargers' },
      { id: 'Chargers', icon: <BatteryChargingFullIcon />, location: '/Dashboard' },
      { id: 'Invoices', icon: <DescriptionIcon />, location: '/Dashbgitoard' }
    ]
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    content: {
      flexGrow: 1
    },
    openDrawButton: {
      float: 'right',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    navBotSection: {
      bottom: 0,
      marginTop: 'auto',
      paddingLeft: theme.spacing(1)
    },
    categoryHeader: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      display: 'flex'
    },
    listPosition: {
      paddingLeft: theme.spacing(1)
    },
    headerPosition: {
      width: '100px'
    },
    item: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingBottom: theme.spacing(2),
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: theme.flexiCharge.primary.lightGrey
      }
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(1),
      color: theme.flexiCharge.primary.darkGrey,
      paddingTop: theme.spacing(0)
    },
    itemText: {
      fontSize: 'inherit',
      paddingLeft: theme.spacing(2),
      color: theme.flexiCharge.primary.black
    }
  })
);

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();
  // const location = useLocation();

  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <Divider />

        <List className={classes.categoryHeader}>
          <Title />
        </List>
        
        {categories.map(({ id, children }) => 

          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText classes={{
                primary: classes.itemText
              }}>
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, location: pathLocation }) => (
              <ListItem
                key={childId}
                button
                className= {clsx(classes.item)}
                onClick={() => {
                  history.push(pathLocation);
                }}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText classes={{ primary: classes.itemText }}>
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
          </React.Fragment>
        
        )}

        <Divider />
  
        <List>
          <ListItem>
            {/* <Link to="/dashboard/chargers">Charger Stations</Link> */}
          </ListItem>
        </List>

        <Divider />
        
        <List className={classes.navBotSection}>
          <ListItem button>
            <ListItemIcon>
              <Icon>logout</Icon>
            </ListItemIcon>
            <ListItemText>SignOut</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={() => {
              !open ? handleDrawerOpen() : handleDrawerClose();
            }}
            className={classes.openDrawButton}
          >
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}