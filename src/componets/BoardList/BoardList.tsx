import React, { FC, useEffect, useRef, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { SideForm } from './SideForm/SideForm';
import { addSection, boardItem, boardItemActive, container, customLink, loginBox, loginBox_container, title } from './BoardList.css';
import clsx from 'clsx';
import { IList, IMovieList } from '../../types';
import { Link } from "react-router-dom";
import { addAwardsBoard, addBookMarkBoard } from '../../store/slices/boardSlice';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardList: FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {
  const { boardArray } = useTypedSelector(state => state.boards);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filteredMovies, setFilteredMovies] = useState<IMovieList[]>([]);
  const dispatch = useTypedDispatch();
  const initialAccessToken = localStorage.getItem('accessToken');

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

  useEffect(() => {
    // activeBoardId가 'board-1'일 때만 데이터를 가져오도록 설정
    if (activeBoardId === 'board-1') {
      fetch('http://localhost:3000/awards')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          console.log('Fetched data:', data);

          // 전체 데이터 배열을 순회하며 Redux 상태를 업데이트
          data.forEach((award: { id: any; title: any; detail: any; img: any; }) => {
            const movieToAdd = {
              movId: award.id,
              movName: award.title,
              movDes: award.detail,
              movImg: award.img,
              bookmarked: false
            };
            // DB 연결하면 굳이 dispatch로 보드에 추가 안 하고 바로 출력하면 됨 
            const existingMovie = boardArray[1].lists[0].movieList.find(movie => movie.movId === movieToAdd.movId);
            if (!existingMovie) {
              dispatch(addAwardsBoard(movieToAdd));
            }
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    else if (activeBoardId === 'board-2') {
      fetch('http://localhost:3000/booklist', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${initialAccessToken}`
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then((data) => {
          data.forEach((award: { id: any; title: any; detail: any; img: any; }) => {
            const movieToAdd = {
              movId: award.id,
              movName: award.title,
              movDes: award.detail,
              movImg: award.img,
              bookmarked: true
            };
            // DB 연결하면 굳이 dispatch로 보드에 추가 안 하고 바로 출력하면 됨 
            const existingMovie = boardArray[2].lists[0].movieList.find(movie => movie.movId === movieToAdd.movId);
            if (!existingMovie) {
              dispatch(addBookMarkBoard(movieToAdd));
            }
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);

        })
    }
  }, [activeBoardId, boardArray, dispatch]);


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

export default BoardList;
