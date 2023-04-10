import React from 'react';
import './Modal.scss';
import { Button } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteFile } from '../../redux/slices/filesSlice';
export const Modal = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    files: { selectedFile },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <div className="modal__overlay" onClick={() => setShow(false)}>
      <div className="modal__container">
        <span className="modal__container--title">Delete this document?</span>
        <span className="modal__container--description">
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
