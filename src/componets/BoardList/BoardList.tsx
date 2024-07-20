import React, { FC, useEffect, useRef, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { SideForm } from './SideForm/SideForm';
import { addSection, boardItem, boardItemActive, container, customLink, loginBox, loginBox_container, title } from './BoardList.css';
import clsx from 'clsx';
import { IList, IMovieList } from '../../types';
import { Link } from "react-router-dom";
import { addAwardsBoard, addBookMarkBoard, addMovieBoard } from '../../store/slices/boardSlice';
import { fetchMovieList } from '../MovieAPI/useFetchData';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardList: FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {
  const { boardArray } = useTypedSelector(state => state.boards);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useTypedDispatch();
  const initialAccessToken = localStorage.getItem('accessToken');

  const [filteredMovies, setFilteredMovies] = useState<IMovieList[]>([]);
  const handleSearch = (searchText: string) => {
    console.log('Search text:', searchText); // 디버깅
    const boardZero = boardArray.find(board => board.boardId === 'board-0');
    if (boardZero) {
      const filtered = boardZero.lists.flatMap(list => list.movieList.filter(movie => {
        // movName이 undefined일 때 빈 문자열로 처리
        const movieName = movie.movName || '';
        return movieName.toLowerCase().includes(searchText.toLowerCase());
      }));
      console.log('Filtered movies:', filtered); // 디버깅
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  }


  const handleClearMovie = (movId: string) => {
    const updatedMovies = filteredMovies.filter(movie => movie.movId !== movId);
    setFilteredMovies(updatedMovies);
  }

  useEffect(() => {
    if (activeBoardId === 'board-1') { // 수상작 선택 시
      fetch('http://localhost:3000/awards')
        .then(response => response.json())
        .then(data => {
          const moviesToAdd = data.map((award: { id: any; title: any; detail: any; img: any; }) => ({
            movId: award.id,
            movName: award.title,
            movDes: award.detail,
            movImg: award.img,
            bookmarked: false
          }));
          dispatch(addAwardsBoard(moviesToAdd));
        })
        .catch(error => console.error('Error fetching data:', error));
    } else if (activeBoardId === 'board-2') { // 즐겨찾기 선택 시
      fetch('http://localhost:3000/booklist', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${initialAccessToken}`
        }
      })
        .then(response => response.json())
        .then(data => {
          const moviesToAdd = data.map((award: { id: any; title: any; detail: any; img: any; }) => ({
            movId: award.id,
            movName: award.title,
            movDes: award.detail,
            movImg: award.img,
            bookmarked: true
          }));
          dispatch(addBookMarkBoard(moviesToAdd));
        })
        .catch(error => console.error('Error fetching data:', error));
    } else if (activeBoardId === 'board-0') { // 전체 영화인 경우
      fetchMovieList()
        .then(movieList => {
          const formattedMovies = movieList.map((movie: any) => ({
            movId: movie.id.toString(),
            movName: movie.title,
            movDes: movie.overview,
            movImg: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            bookmarked: false
          }));
          console.log('Formatted Movies:', formattedMovies); // 디버깅
          dispatch(addMovieBoard(formattedMovies));
        })
        .catch(error => console.error('Error fetching movies:', error));
    }
  }, [activeBoardId, dispatch, initialAccessToken]);

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
      {boardArray.map((board) => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardId(board.boardId)}
          className={clsx({
            [boardItemActive]: board.boardId === activeBoardId,
            [boardItem]: board.boardId !== activeBoardId
          })}
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

export default BoardList;
