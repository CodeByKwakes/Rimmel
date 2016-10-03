import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import AppBar from 'material-ui/AppBar';

const Header = ({loading}) => {
  return (
    <AppBar>
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/photos" activeClassName="active">Photos</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
    </AppBar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
