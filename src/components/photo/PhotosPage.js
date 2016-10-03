import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as photoActions from '../../actions/photoActions';
import PhotoList from './PhotoList';
import {browserHistory} from 'react-router';

class PhotosPage extends React.Component {
  render() {
     const { photos } = this.props;
    return (
      <div>
        <h1>Photos</h1>
        <PhotoList photos={photos} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);
