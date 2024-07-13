import React, { FC, useRef, useState } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { SideForm } from './SideForm/SideForm';
import { addSection, boardItem, boardItemActive, container, customLink, loginBox, loginBox_container, title } from './BoardList.css';
import clsx from 'clsx';
import { IMovieList } from '../../types'; 
import { Link } from "react-router-dom";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardList: FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {
  const { boardArray } = useTypedSelector(state => state.boards);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filteredMovies, setFilteredMovies] = useState<IMovieList[]>([]);

  const handleSearch = (searchText: string) => {
    const boardZero = boardArray.find(board => board.boardId === 'board-0');
    if (boardZero) {
      const filtered = boardZero.lists.flatMap(list => list.movieList.filter(movie =>
        movie.movName.toLowerCase().includes(searchText.toLowerCase())
      ));
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  }

  const handleClearMovie = (movId: string) => {
    const updatedMovies = filteredMovies.filter(movie => movie.movId !== movId);
    setFilteredMovies(updatedMovies);
  }

  return (
    <div className={container}>
      <div className={title}>
        BestMovie
        <div className={loginBox_container}>
          <div className={loginBox}>
            <Link to="/login" className={customLink}>Login</Link>
          </div>
          <div className={loginBox}>
            <Link to="/register" className={customLink}>Register</Link>
          </div>
        </div>
      </div>
      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardId(board.boardId)}
          className={
            clsx({
              [boardItemActive]: board.boardId === activeBoardId
            }, {
              [boardItem]: board.boardId !== activeBoardId
            })
          }
        >
          <div>
            {board.boardName}
          </div>
        </div>
      ))}
      <div className={addSection}>
        <SideForm
          inputRef={inputRef}
          onSearch={handleSearch}
          filteredMovies={filteredMovies}
          onClearMovie={handleClearMovie}
        />
      </div>
    </div>
  )
}
