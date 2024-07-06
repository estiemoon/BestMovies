import React, { useState } from 'react'
import { FiX } from 'react-icons/fi';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { setModalActive } from '../../store/slices/boardSlice';
import { movie } from '../Task/Task.css';
import { closeButton, header, imgEdit, input, modalWindow, set1, set2, title, wrapper } from './EditModal.css'
import insideOutImage from '../../assets/insideout.png'; // 이미지 절대경로


export const EditModal = () => {
  const dispath = useTypedDispatch();
  const editingState = useTypedSelector(state=>state.modal);
    const [data, setData] = useState(editingState);
    const handleCloseButton = () =>{
        dispath(setModalActive(false));
    }


  return (
    <div className={wrapper}>
        <div className={modalWindow}>
            <div className={header}>
                <div className={title}>{data.movieModal.movName}</div>
                <FiX className={closeButton} onClick={handleCloseButton}/>
            </div>
            <div className={set2}>
            <img className={imgEdit} src={insideOutImage}/>
              {data.movieModal.movDes}
            </div>
            <div className={set1}>나중에 여기 별점이랑 후기 추가</div>
        </div>
    </div>
  )
}
