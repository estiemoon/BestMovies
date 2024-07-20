import { FC } from 'react';
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
    
    return (
        <div className={movie}>
            {list.movieList.map((mv) => (
                <div
                    key={mv.movId}
                    onClick={() => onMovieClick(list.listId, mv)}
                >
                    <Task //각각의 태스크 - 각각의 영화
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
