
import React from 'react'
import HandMadeDetails from './HandMadeDetails';
import HandWorkDetails from './HandWorkDetails';
import '../css/App.css'

const DetailsModal = ({ selectedItem, onClose }) => {
  return (
    <div className="modal">
      {selectedItem && (
        <>
          {selectedItem.type === 'handmade' && <HandMadeDetails handmade={selectedItem.data} />}
          {selectedItem.type === 'handwork' && <HandWorkDetails handwork={selectedItem.data} />}
        </>
      )}
    </div>
  );
}

export default DetailsModal;
