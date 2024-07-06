import React from 'react'
import { useTypedDispatch } from '../../hooks/redux';
import { setModalActive } from '../../store/slices/boardSlice';
import { setModalData } from '../../store/slices/modalSlice';
import { IMovieList } from '../../types';
import { Task } from '../Task/Task'
import { description, movie, title } from '../Task/Task.css'

type TListProps = {
    boardId : string;
    list : IList;
 }

export const List :FC<TListProps> = ({
    list,
    boardId
}) => {
    const dispatch = useTypedDispatch();
    
    const handleTaskChange=(
        boardId :string,
        listId : string,
        movieModal:IMovieList
    ) =>{
        dispatch(setModalData({boardId,listId,movieModal}));
        dispatch(setModalActive(true));
    }

  return (
    <div>
        <div className={movie}>
            {list.movieList.map((mv, index)=>(
                <div 
                onClick={() => handleTaskChange(boardId,list.listId,mv.movId)}
                key={mv.movId}>
                    <Task 
                        taskName={mv.movName}
                        taskDescription={mv.movDes}
                        taskImg={mv.movImg}
                        boardId = {boardId}
                        id={mv.movId}
                        index={index}
                    />
                </div>
            ))}
        </div>
       
    </div>
  )
}
