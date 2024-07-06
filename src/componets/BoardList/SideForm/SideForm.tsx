import React, { ChangeEvent } from 'react'
import{ FC, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { icon, input, sideForm } from './SideForm.css';
type TSideFormProps ={
  inputRef:React.RefObject<HTMLInputElement>
}

export const SideForm :FC<TSideFormProps> = ({
  inputRef
}) => {
  const [inputText, setInputText] = useState('');
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }
  const handleClick = () => {
    if(inputText){
      //검색 아이콘 클릭 이벤트 (영화 검색)
    }
  }
  return (
    <div className={sideForm}>
      <input className={input}
      ref={inputRef}
      type="text" 
      placeholder='Search' 
      value={inputText}
      onChange={handleChange}
      />
      <FaSearch className={icon} onClick={handleClick}/> {/*아이콘 누르면 검색 이벤트*/}
    </div>
  )
}
