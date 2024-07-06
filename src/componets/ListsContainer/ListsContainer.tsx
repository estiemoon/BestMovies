import React, { FC } from 'react'
import { board } from '../../App.css';
import { IList } from '../../types';
import { List } from '../List/List';


type TListContainerProps = {
    boardId : string;
    lists : IList[];
}

export const ListsContainer:FC<TListContainerProps> = ({
    lists,
    boardId
}) => {
return (
 <div className={board}>
    {
        lists.map(list=>(
            <List
            key={list.listId}
            list={list}
            boardId={boardId}/>
        ))
    }
 </div>
)
}
