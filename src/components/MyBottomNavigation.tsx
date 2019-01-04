import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PlaceIcon from "@material-ui/icons/Place";

interface Props {
  className?: any;
  currentIndex: number;
  onChange(event: object, value: any): void;
}

const MyBottomNavigation = (props: Props) => (
  <BottomNavigation
    showLabels
    value={props.currentIndex}
    onChange={props.onChange}
    className={props.className}
  >
    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
    <BottomNavigationAction label="Map" icon={<PlaceIcon />} />
  </BottomNavigation>
);

export default MyBottomNavigation;
