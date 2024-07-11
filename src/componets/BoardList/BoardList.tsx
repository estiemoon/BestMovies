import React, { FC, useRef, useState } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { SideForm } from './SideForm/SideForm';
import { addSection, boardItem, boardItemActive, container, title } from './BoardList.css';
import clsx from 'clsx';
import { IBoard, IList, IMovieList } from '../../types'; // Import your types

import { Link, Route, Routes } from "react-router-dom";
import LoginBox from '../../login';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardList: FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {
  const { boardArray } = useTypedSelector(state => state.boards);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filteredMovies, setFilteredMovies] = useState<IMovieList[]>([]);

  //사용자가 입력한 검색어를 이용하여 영화 검색
  const handleSearch = (searchText: string) => {
    const allMovies: IMovieList[] = boardArray.flatMap(board => board.lists.flatMap(list => list.movieList));
    const filtered = allMovies.filter(movie =>
      movie.movName.includes(searchText)
    );
    setFilteredMovies(filtered);
  }


  //검색한 결과 창을 지울 때 사용
  const handleClearMovie = (movId: string) => {
    const updatedMovies = filteredMovies.filter(movie => movie.movId !== movId);
    setFilteredMovies(updatedMovies);
  }

  return (
    <div className={container}>
      <div className={title}>
        BestMovie
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
        <Link to="/login">Login</Link>
        <Link to ="/register">Register</Link>
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


