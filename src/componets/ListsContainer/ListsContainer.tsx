import React, { FC } from 'react'
import { board } from '../../App.css';
import { useTypedDispatch } from '../../hooks/redux';
import { setModalActive } from '../../store/slices/boardSlice';
import { setModalData } from '../../store/slices/modalSlice';
import { IList, IMovieList } from '../../types';
import { List } from '../List/List';


type TListContainerProps = {
    boardId : string;
    lists : IList[];
}

export const ListsContainer:FC<TListContainerProps> = ({
    lists,
    boardId
}) => {
    const dispatch = useTypedDispatch();

    const handleMovieClick = (listId :string, movie:IMovieList)=>{
        dispatch(setModalData({
            boardId,
            listId,
            movieModal : movie
        }));
        dispatch(setModalActive(true));
    }

    return (
        <div className={board}>
            {lists.map(list => (
                <List
                    key={list.listId}
                    list={list}
                    boardId={boardId}
                    onMovieClick={handleMovieClick} // Pass handler to List component
                />
            ))}
        </div>
    );
}
