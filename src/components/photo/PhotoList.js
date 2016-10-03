import React, {PropTypes} from 'react';
import PhotoTile from './PhotoTile';

import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const PhotoList = ({photos}) => {
  return (
    <div style={styles.root}>
    <Subheader>Photos</Subheader>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {photos.map(photo =>
        <PhotoTile key={photo.img} photo={photo} />
      )}
    </GridList>
  </div>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoList;
