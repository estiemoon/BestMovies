import { FC } from 'react'
import {  container,  imgSet,  title } from './Task.css';

type TTaskProps = {
  index : number;
  id : string;
  boardId : string;
  taskName : string;
  taskDescription : string;
  taskImg : string;
}

export const Task : FC<TTaskProps>= ({
  taskName,
  taskImg
}) => {


  return (
    <div className={container}>
      <div>
        <img className={imgSet} src={taskImg}></img>
        <div className={title}>{taskName}</div>
      </div>
    </div>
  )
}
