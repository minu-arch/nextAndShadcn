import React from 'react';
import DeleteConf from './DeleteConf.module.css';

function DeleteConfirmation() {
  return (
    <div className={DeleteConf.wrapper}>
      <div className={DeleteConf.close}>
        <button className={DeleteConf.btnclose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            width="24px"
            viewBox="0 -960 960 960"
            fill="#6b7280"
            stroke="#6b7280"
            strokeWidth="20"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <div className={DeleteConf.main}>
          <div className={DeleteConf.delete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              width="48px"
              viewBox="0 -960 960 960"
              fill="#6b7280"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </div>
          <p>Are you sure you want to delete this item?</p>
          <div className={DeleteConf.btns}>
            <button>No, cancel</button>
            <button>Yes, I'm sure</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
