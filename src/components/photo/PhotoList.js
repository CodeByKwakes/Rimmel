import React, {PropTypes} from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

      {photos.map(photo => (
        <GridTile
          key={photo.img}
          title={photo.title}
          subtitle={<span>by <b>{photo.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={photo.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoList;
