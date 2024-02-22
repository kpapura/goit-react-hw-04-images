import PropTypes from 'prop-types'
import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, onClick}) => {
  return (
    <GalleryItem>
      <ItemImage src={webformatURL} alt="" onClick={onClick}/>
    </GalleryItem>
  );
};

ImageGalleryItem.propType = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}