import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { addBookMarkBoard, removeBookMarkBoard, setModalActive } from '../../store/slices/boardSlice';
import { bookmarkImage, closeButton, edit, header, modalWindow, set1, set2, title, wrapper, bookmarkMessage, bookmarkMessageSet } from './EditModal.css'; // 스타일 import
import { FaBookmark } from 'react-icons/fa6';
import { FaPlus } from "react-icons/fa";
import { IMovieList } from '../../types';

export const EditModal = () => {
  const dispatch = useTypedDispatch();
  const editingState = useTypedSelector(state => state.modal);
  const [data, setData] = useState(editingState);

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };

  const addBookMarkButton = () => {
    const uniqueMovId = `bookmark-${data.movieModal.movId}-${Date.now()}`;

    const movieToAdd = {
      movId: uniqueMovId,
      movName: data.movieModal.movName,
      movDes: data.movieModal.movDes,
      movImg: data.movieModal.movImg,
      bookmarked: true
    };
    dispatch(addBookMarkBoard(movieToAdd));
    alert('북마크에 추가되었습니다'); 
  };

  const removeBookMarkButton = () => {
    dispatch(removeBookMarkBoard(data.movieModal.movId));
    setData({ ...data, movieModal: { ...data.movieModal, bookmarked: false } });
    dispatch(setModalActive(false));
    alert('북마크에서 삭제되었습니다'); 
  };

  useEffect(() => {
    setData(editingState);
  }, [editingState]);

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>{data.movieModal.movName}</div>
          {data.movieModal.bookmarked ? (
            <FaBookmark className={bookmarkImage} onClick={removeBookMarkButton} />
          ) : (
            <FaPlus className={bookmarkImage} onClick={addBookMarkButton} />
          )}
          <FiX className={closeButton} onClick={handleCloseButton} />
        </div>
        <div className={set2}>
          <img className={edit} src={data.movieModal.movImg} />
          <div className={edit}>{data.movieModal.movDes}</div>
        </div>
        <div className={set1}>나중에 여기 별점이랑 후기 추가</div>
      </div>
    </div>
  );
};
