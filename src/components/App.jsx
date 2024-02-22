import { useEffect, useState } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import getImages from './services/imgApi';
import searchButton from '../images/free-icon-search-bar-8053592.png';

// problems with button load more
function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImg, setLargeImg] = useState(null);
  const [shownButton, setShownButton] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async search => {
    setPage(1);
    setQuery(search);
  };

  useEffect(() => {
    if (page === 1) setImages(null);
    query && getFetch(query, page);
  }, [page, query]);

  const getFetch = async (query, page) => {
    setIsLoading(true);
    setError('');
    try {
      const {
        data: { hits, totalHits },
      } = await getImages(query, page);
      hits
        ? setImages(prevImages =>
            !prevImages ? hits : [...prevImages, ...hits]
          )
        : setError('There aro not matched images');
      setShownButton(
        Math.ceil(totalHits / 12) === page || totalHits === 0 ? false : true
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const changePage = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  const onImageShow = largeImg => {
    setLargeImg(largeImg);
  };

  const onImageClose = () => {
    setLargeImg(null);
  };

  return (
    <div>
      <Searchbar url={searchButton} handleSearch={handleSearch} />
      {images ? (
        <ImageGallery images={images} onImageShow={onImageShow} />
      ) : (
        <h3>{error}</h3>
      )}
      {!isLoading && shownButton && (
        <Button text="Load More" handleClick={changePage} />
      )}

      {isLoading && <Loader />}
      {largeImg && <Modal url={largeImg} onImageClose={onImageClose} />}
    </div>
  );
}

export default App;
