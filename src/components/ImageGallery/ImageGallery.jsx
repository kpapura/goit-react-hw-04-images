import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageShow }) => {
  return (
    <ImageGalleryList>
      {images.map(image => {
        return (
              <ImageGalleryItem key={image.id} webformatURL={image.webformatURL} onClick={() => onImageShow(image.largeImageURL)} />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propType = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })
  ),
  onImageShow: PropTypes.func.isRequired
};
