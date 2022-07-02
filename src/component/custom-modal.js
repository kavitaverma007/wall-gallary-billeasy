import React from "react";

function CustomModal({ isOpen, onClickEnable, onClickDisable, src }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
      {isOpen && (
        <div className="modal" onClick={onClickEnable}>
          <button onClick={onClickDisable} className="close-button">
            &times;
          </button>
          <div>
            <img src={src} />
          </div>
        </div>
      )}
    </div>
  );
}
export default CustomModal;
