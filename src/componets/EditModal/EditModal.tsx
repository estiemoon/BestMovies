import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { addBookMarkBoard, removeBookMarkBoard, setModalActive } from '../../store/slices/boardSlice';
import { bookmarkImage, closeButton, edit, header, modalWindow, set1, set2, title, wrapper } from './EditModal.css'; // 스타일 import
import { FaBookmark } from 'react-icons/fa6';
import { FaPlus } from "react-icons/fa";
import { IMovieList } from '../../types';

export const EditModal = () => {
  const dispatch = useTypedDispatch();
  const editingState = useTypedSelector(state => state.modal);
  const [data, setData] = useState(editingState);
  const initialAccessToken = localStorage.getItem('accessToken');

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

    // API 요청을 보내 북마크 추가
    fetch('http://localhost:3000/bookmarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${initialAccessToken}`
      },
      body: JSON.stringify({ movie_id: data.movieModal.movId }) // 북마크할 영화의 movId를 요청 바디에 포함
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('북마크 추가에 실패하였습니다.');
        }
      })
      .then(data => {
        // 성공적으로 추가되었을 때의 처리
        console.log(data); // 예시로 콘솔에 메시지 출력
        dispatch(addBookMarkBoard(movieToAdd)); //나중에 DB에 저장되는 게 확인되면 삭제하고 직접 DB에서 받아서 출력
        alert('북마크에 추가되었습니다');
      })
      .catch(error => {
        console.error('북마크 추가 에러:', error);
        alert('북마크 추가에 실패하였습니다.');
      });
  };

  const removeBookMarkButton = () => {
    // API 요청을 보내 북마크 삭제
    fetch(`http://localhost:3000/bookmarks`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${initialAccessToken}`
      },
      body: JSON.stringify({ movie_id: data.movieModal.movId }) // 북마크에서 삭제할 영화의 movId를 요청 바디에 포함
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('북마크 삭제에 실패하였습니다.');
        }
      })
      .then(() => {
        //boardSlice에 만들어둔 데이터셋을 그냥 다 삭제
        //여기도 나중에 DB 연결되면 삭제하고 그냥 board-list를 바로 DB에서 받아오도록 바꾸면 됨
        dispatch(removeBookMarkBoard(data.movieModal.movId)); // Redux 상태에서 해당 영화 삭제
        setData({ ...data, movieModal: { ...data.movieModal, bookmarked: false } }); // 로컬 상태 업데이트
        dispatch(setModalActive(false)); // 모달 닫기
        alert('북마크에서 삭제되었습니다');
      })
      .catch(error => {
        console.error('북마크 삭제 에러:', error.message); // 오류 메시지 출력 수정
        alert('북마크 삭제에 실패하였습니다.');
      });
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
          <img className={edit} src={data.movieModal.movImg} alt={data.movieModal.movName} />
          <div className={edit}>{data.movieModal.movDes}</div>
        </div>
        <div className={set1}> Reviews </div>
      </div>
    </div>
  );
};
