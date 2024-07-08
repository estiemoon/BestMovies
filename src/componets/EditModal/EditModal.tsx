import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { setModalActive } from '../../store/slices/boardSlice';
import { closeButton, edit, header, imgEdit, modalWindow, set1, set2, title, wrapper } from './EditModal.css'
import imageEx from '../../assets/image.png'; // 이미지 절대경로


export const EditModal = () => {
  //hook을 사용하여 액션을 디스패치할 수 있는 함수를 가져오는 역할
  // useTypedDispatch는 hook에 정의한 사용자 정의 훅
  const dispath = useTypedDispatch();

  //TModalState (modal의 상태를 선택하여) 할당
  const editingState = useTypedSelector(state=>state.modal);

  //data : store의 modal의 state
  //setData를 통해서 값 업데이트
  const [data, setData] = useState(editingState);

  //boardSlice의 reducers에 정의된 setModalActive 메소드 사요 
  const handleCloseButton = () =>{
    //x버튼 입력시 발생하는 액션
      dispath(setModalActive(false));
  }

  useEffect(()=>{ //editingState 변수가 변경될 때마다 실행
    setData(editingState);
  }, [editingState]);



  const imgSrc = data.movieModal.movImg;
  return (
    <div className={wrapper}>
        <div className={modalWindow}>
            <div className={header}>
              {/*선택된 영화 이름*/}
                <div className={title}>{data.movieModal.movName}</div>
                <FiX className={closeButton} onClick={handleCloseButton}/>
            </div>
            <div className={set2}>
              {/*나중에 DB 이미지 경로 수정 필요 */}
  
              <img className={edit} src={imageEx} />
            {/*선택된 영화 Description */}
              <div className={edit}>{data.movieModal.movDes}</div>
              
            </div>
            <div className={set1}>나중에 여기 별점이랑 후기 추가</div>
        </div>
    </div>
  )
}
