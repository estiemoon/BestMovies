import React, { FC, useRef, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Import FaTimes for close icon
import { closeIcon, container, icon, imgSet, input, searchSet, sideForm, textSet, titleText } from './SideForm.css';
import { IMovieList } from '../../types'; // Import IMovieList type
import { Task } from '../../Task/Task';

type TSideFormProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  onSearch: (searchText: string) => void; // Callback to pass search text to parent
  filteredMovies: IMovieList[]; // Array of filtered movies to display
  onClearMovie: (movId: string) => void; // Callback to clear a specific movie from filtered results
}

export const SideForm: FC<TSideFormProps> = ({ inputRef, onSearch, filteredMovies, onClearMovie }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value); //사용자 입력 검색어
  }

  const handleClick = () => {
    if (inputText) {
      onSearch(inputText); //사용자가 검색 버튼 클릭 시 이벤트
    }
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
          {filteredMovies.map(movie => (
              
                <div className={searchSet}>
                  <img className={imgSet} src={movie.movImg}/>
                  <div className={textSet}>
                    <div className={searchSet}>
                      <div className={titleText}>{movie.movName}</div>
                      <FaTimes className={closeIcon} onClick={() => onClearMovie(movie.movId)} /> {/* Close button for each movie */}
                    </div>
                    <div className={searchSet}>{movie.movDes}</div>
                  </div>
                </div>
              
            ))}
        </div>
    </div>
  );
}
