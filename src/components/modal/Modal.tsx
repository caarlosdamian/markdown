import React from 'react';
import { Button } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteFile } from '../../redux/slices/filesSlice';
import './Modal.scss';

export const Modal = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    files: { selectedFile },
    theme: { dark },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <div
      className={`modal__overlay ${dark && 'dark'}`}
      onClick={() => setShow(false)}
    >
      <div className={`modal__container ${dark && 'dark'}`}>
        <span className={`modal__container--title ${dark && 'dark'}`}>
          Delete this document?
        </span>
        <span className={`modal__container--description ${dark && 'dark'}`}>
          Are you sure you want to delete the '{selectedFile.name}' document and
          its contents? This action cannot be reversed.
        </span>
        <Button
          label="Confirm & Delete"
          onClick={() => dispatch(deleteFile(selectedFile.id))}
        />
      </div>
    </div>
  );
};
