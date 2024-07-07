import React, { FC, useRef, useState } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { SideForm } from './SideForm/SideForm';
import { addSection, boardItem, boardItemActive, container, title } from './BoardList.css';
import clsx from 'clsx';

type TBoardListProps = {
  activeBoardId : string;
  setActiveBoardId:React.Dispatch<React.SetStateAction<string>>
}


export const BoardList : FC<TBoardListProps>= ({
  activeBoardId,
  setActiveBoardId
}) => {

  const {boardArray} = useTypedSelector(state => state.boards)
  const inputRef = useRef<HTMLInputElement>(null)
  

  return (
    <div className={container}>
      <div className={title}>
        BestMovie
      </div>
      {boardArray.map((board, index)=>(
        <div key = {board.boardId}
        onClick = {()=> setActiveBoardId(boardArray[index].boardId)} 
        className={
          clsx(
            { //조건부 -> clsx를 사용해서 동적 클래스 설정 -> 아이템 활성 상태에 따른 스타일 적용
              [boardItemActive]:
              boardArray.findIndex(b=>b.boardId===activeBoardId)===index
            },
            {
              [boardItem]:
              boardArray.findIndex(b=>b.boardId===activeBoardId)!==index
            }
          )
        }
        >
          <div>
            {board.boardName} {/*각 board 출력*/}
          </div>
        </div>
      ))}
      
      <div className={addSection}>
        {
          <SideForm inputRef={inputRef}/> 
        }

      </div>
    </div>
  )
}
