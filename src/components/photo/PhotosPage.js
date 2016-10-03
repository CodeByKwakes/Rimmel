import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as photoActions from '../../actions/photoActions';
// import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class PhotosPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Photo</h1>
        <p>Photos go here...</p>
      </div>
    );
  }
}

PhotosPage.propTypes = {
  photos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    photos: state.photos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(photoActions, dispatch)
  };
}

export default PhotosPage;
