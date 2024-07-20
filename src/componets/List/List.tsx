import React, { FC, useEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { IList, IMovieList } from '../../types';
import { Task } from '../Task/Task';
import { movie } from '../Task/Task.css';
import './List.css'; // CSS 파일 import
import { fetchMovieList } from '../MovieAPI/useFetchData';
import { fetchBoardMovies } from '../../store/slices/boardSlice';

type TListProps = {
    boardId: string;
    list: IList;
    onMovieClick: (listId: string, movie: IMovieList) => void;
};

export const List: FC<TListProps> = ({ boardId, list, onMovieClick }) => {
    const [movies, setMovies] = useState<IMovieList[]>([]);
    const dispatch = useTypedDispatch();
    const boardMovies = useTypedSelector(state =>
        state.boards.boardArray.find(board => board.boardId === boardId)?.lists.find(l => l.listId === list.listId)?.movieList || []
    );

    useEffect(() => {
        const fetchMovies = async () => {
            if (boardId === 'board-0') { //전체 영화인 결루
                try {
                    const movieList = await fetchMovieList();
                    const formattedMovies = movieList.map((movie: any) => ({
                        movId: movie.id.toString(),
                        movName: movie.title,
                        movDes: movie.overview,
                        movImg: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                        bookmarked: false,
                    }));
                    setMovies(formattedMovies);
                } catch (error) {
                    console.error('Error fetching movies:', error);
                }
            } else {
                // 다른 탭일경우
                setMovies(boardMovies);
            }
        };

        fetchMovies();
    }, [boardId, list.listId, boardMovies]);

    return (
        <div>
            <div className={movie}>
                {movies.map((mv) => (
                    <div key={mv.movId} onClick={() => onMovieClick(list.listId, mv)} className="movie-item">
                        <Task
                            taskName={mv.movName}
                            taskDescription={mv.movDes}
                            taskImg={mv.movImg}
                            boardId={boardId}
                            id={mv.movId}
                            index={movies.indexOf(mv)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
