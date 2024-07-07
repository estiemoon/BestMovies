import React, { FC } from 'react';
import { useTypedDispatch } from '../../hooks/redux';
import { setModalActive } from '../../store/slices/boardSlice';
import { setModalData } from '../../store/slices/modalSlice';
import { IList, IMovieList } from '../../types';
import { Task } from '../Task/Task';
import { movie } from '../Task/Task.css';

type TListProps = {
    boardId: string;
    list: IList;
    onMovieClick: (listId: string, movie: IMovieList) => void;
}

export const List: FC<TListProps> = ({
    boardId,
    list,
    onMovieClick
}) => {
    const dispatch = useTypedDispatch();

    const handleTaskChange = (listId: string, movie: IMovieList) => {
        dispatch(setModalData({
            boardId,
            listId,
            movieModal: movie
        }));
        dispatch(setModalActive(true));
    }

    return (
        <div className={movie}>
            {list.movieList.map((mv) => (
                <div
                    key={mv.movId}
                    onClick={() => onMovieClick(list.listId, mv)} // Pass directly to parent handler
                >
                    <Task
                        taskName={mv.movName}
                        taskDescription={mv.movDes}
                        taskImg={mv.movImg}
                        boardId={boardId}
                        id={mv.movId}
                        index={list.movieList.indexOf(mv)}
                    />
                </div>
            ))}
        </div>
    );
}
