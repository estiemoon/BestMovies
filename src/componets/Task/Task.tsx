import React, { FC } from 'react'
import { container, description, imgSet, movie, title } from './Task.css';
import imageEx from '../../assets/image.png'; // 이미지 절대경로


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
      <div>
        <img className={imgSet} src={imageEx}></img>
        <div className={title}>{taskName}</div>
      </div>
    </div>
  )
}
