import React, {PropTypes} from 'react';

import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const PhotoTile = ({photo}) => {
  return (
     <GridTile
          key={photo.img}
          title={photo.title}
          subtitle={<span>by <b>{photo.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={photo.img} />
        </GridTile>
  );
};

PhotoTile.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoTile;
