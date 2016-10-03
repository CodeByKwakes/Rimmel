import React, {PropTypes} from 'react';

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
  )
}

PhotoTile.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoTileRow;
