import * as React from "react";
//import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
//import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, {
  WithStyles,
  StyleRules
} from "@material-ui/core/styles/withStyles";
import withRoot from "./withRoot";
import MyBottomNavigation from "./components/MyBottomNavigation";

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: "center",
      width: "100%"
    },
    main: {
      paddingBottom: 56
    },
    bottomNavigation: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: '100%',
    }
  });

interface State {
  currentTab: number;
}

class App extends React.Component<WithStyles<typeof styles>, State> {
  constructor(props: WithStyles<typeof styles>) {
    super(props);
    this.state = { currentTab: 0 };
  }

  public render() {
    const { currentTab } = this.state;
    const { classes } = this.props;
    return <div className={classes.root}>
        <div className={classes.main}>
        </div>
        <MyBottomNavigation className={classes.bottomNavigation} currentIndex={currentTab} onChange={(event: object, value: number) => {
            this.setState({ currentTab: value });
          }} />
      </div>;
  }
}

export default withRoot(withStyles(styles)(App));
