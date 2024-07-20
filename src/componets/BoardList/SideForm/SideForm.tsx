import React, { FC, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { closeIcon, container, icon, imgSet, input, searchSet, sideForm, textSet, titleText } from './SideForm.css';
import { IMovieList } from '../../types';
import { useTypedDispatch } from '../../../hooks/redux';
import { setModalData } from '../../../store/slices/modalSlice';
import { setModalActive } from '../../../store/slices/boardSlice';

type TSideFormProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  onSearch: (searchText: string) => void;
  filteredMovies: IMovieList[];
  onClearMovie: (movId: string) => void;
}

export const SideForm: FC<TSideFormProps> = ({ inputRef, onSearch, filteredMovies, onClearMovie }) => {
  const [inputText, setInputText] = useState('');
  const dispatch = useTypedDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value); // 사용자 입력 검색어 업데이트
  }

  const handleClick = () => {
    if (inputText) onSearch(inputText); // 검색 버튼 클릭 시 검색어 전달

  }

  const handleOpenModal = (movie: IMovieList) => {
    const boardId = 'board-0'; // 예시로 'board-0'을 사용
    const listId = 'list-0';   // 예시로 'list-0'을 사용

    // 모달 데이터 업데이트
    dispatch(setModalData({
      boardId,
      listId,
      movieModal: movie
    }));

    // 모달 활성화
    dispatch(setModalActive(true));
  }

  return (
    <div className={container}>
      <div className={sideForm}>
        <input
          className={input}
          ref={inputRef}
          type="text"
          placeholder='Search'
          value={inputText}
          onChange={handleChange}
        />
        <FaSearch className={icon} onClick={handleClick} />
      </div>

      <div>
        {filteredMovies.map(movieModal => (
          <div key={movieModal.movId} className={searchSet}>
            <img className={imgSet} src={movieModal.movImg} alt={movieModal.movName} />
            <div className={textSet}>
              <div className={searchSet}>
                <div className={titleText}>{movieModal.movName}</div>
                <FaSearch className={closeIcon} onClick={() => handleOpenModal(movieModal)} />
                <FaTimes className={closeIcon} onClick={() => onClearMovie(movieModal.movId)} />
              </div>
              <div className={searchSet}>{movieModal.movDes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
