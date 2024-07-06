import React, { FC } from 'react'
import { container, description, imgSet, movie, title } from './Task.css';
import insideOutImage from '../../assets/insideout.png'; // 이미지 절대경로

type TTaskProps = {
  index : number;
  id : string;
  boardId : string;
  taskName : string;
  taskDescription : string;
  taskImg : string;
}

export const Task : FC<TTaskProps>= ({
  index,
  id,
  boardId,
  taskName,
  taskDescription,
  taskImg
}) => {
  return (
    <div className={container}>
      <div >
        <div className={movie}>
          { /*<img src={taskImg}></img>*/}
          <img className={imgSet} src={insideOutImage}></img>
          </div>
        <div className={title}>{taskName}</div>
        <div className={description}>{taskDescription}</div>
      </div>
    </div>
  )
}
