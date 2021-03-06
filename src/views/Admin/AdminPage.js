import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Copyright from '../../components/Copyright';
import AdminDrawer from '../../components/AdminDrawer';
import AdminAppBar from '../../components/AdminAppBar';

import { private_routes } from '../../common/routes';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../../common/use-auth';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingLeft: `${drawerWidth}px`,
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminAppBar></AdminAppBar>
      <AdminDrawer></AdminDrawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container} maxWidth={false}>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Switch>
                {private_routes.map((route, index) => (
                  route?.children?.map((route1, index1) => (
                    <PrivateRoute
                      key={index1}
                      path={route1.path}
                      exact={route1.exact}
                      children={<route1.component />}
                    />
                  ))
                ))}
              </Switch>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;