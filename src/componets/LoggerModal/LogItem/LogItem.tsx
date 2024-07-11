import React, { FC } from 'react'
import { ILogItme } from '../../../types'
import { BsFillPersonFill } from "react-icons/bs";

type TLogItemProps = {
    logItem : ILogItme
}

export const LogItem : FC<TLogItemProps>= ({
    logItem
}) => {
    let timeOffset = new Date(Date.now()-Number(logItem.logTimestamp));
    const showOffsetTime = `${timeOffset.getMinutes()>0?`${timeOffset.getMinutes()}m` : ""} ` 
  return (
    <div>
        <div>
            <BsFillPersonFill />
            {logItem.logAuthor}
        </div>
        <div>{logItem.logMessage}</div>
        <div></div>
    </div>
  )
}
