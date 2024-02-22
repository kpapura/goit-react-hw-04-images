import { useEffect } from 'react';
import { ModalDiv, Overlay } from './Modal.styled';
import PropTypes from 'prop-types'

function Modal({ url, onImageClose }) {
  useEffect(() => {
    const handlePressEscape = e => {
      if (e.code === 'Escape') {
        onImageClose();
      }
    };

    document.addEventListener('keydown', handlePressEscape);
    return () => {
      document.removeEventListener('keydown', handlePressEscape);
    };
  }, [onImageClose]);

  const handleCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      onImageClose();
    }
  };

  return (
    <Overlay onClick={handleCloseBackdrop}>
      <ModalDiv>
        <img src={url} alt="" />
      </ModalDiv>
    </Overlay>
  );
}

Modal.propType = {
  url: PropTypes.string.isRequired,
  onImageClose: PropTypes.func.isRequired
}
export default Modal;
