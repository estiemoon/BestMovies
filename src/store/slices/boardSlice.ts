import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board } from "../../App.css";
import { IBoard, IList, IMovieList } from "../../types/index";
import { MdLocalMovies } from "react-icons/md";

type TBoardState = {
    modalActive : boolean;
    boardArray : IBoard[]
}



const initialState : TBoardState = {
    modalActive : false,
    boardArray : [
        {
            boardId : 'board-0',
            boardName : '전체 영화',
            lists : [
                {
                    listId : 'list-0',
                    listName : '전체 영화 리스트',
                    movieList : [
                        {
                            movId : 'movie-0',
                            movName : '인사이드 아웃',
                            movDes : '해외 영화',
                            movImg : '../../assets/insideout.png'
                        },
        
                        {
                            movId : 'movie-1',
                            movName : '엘리멘탈',
                            movDes : '해외 영화',
                            movImg : '../../assets/insideout.png'
                        },

                        {
                            movId : 'movie-2',
                            movName : '탈주',
                            movDes : '한국 영화',
                            movImg : '../../assets/insideout.png'
                        },

                        {
                            movId : 'movie-3',
                            movName : '핸섬가이즈',
                            movDes : '한국 영화',
                            movImg : '../../assets/insideout.png'
                        },            

                        {
                            movId : 'movie-4',
                            movName : '하이큐',
                            movDes : '일본 영화',
                            movImg : '../../assets/insideout.png'
                        },  

                        {
                            movId : 'movie-5',
                            movName : '하이큐',
                            movDes : '일본 영화',
                            movImg : '../../assets/insideout.png'
                        },  

                        {
                            movId : 'movie-6',
                            movName : '하이큐',
                            movDes : '일본 영화',
                            movImg : '../../assets/insideout.png'
                        },  

                        {
                            movId : 'movie-7',
                            movName : '하이큐',
                            movDes : '일본 영화',
                            movImg : '../../assets/insideout.png'
                        },  

                        {
                            movId : 'movie-8',
                            movName : '하이큐',
                            movDes : '일본 영화',
                            movImg : '../../assets/insideout.png'
                        },  
                       
                    ]
                }
            ]
        },

        {
            boardId : 'board-1',
            boardName : '수상작',
            lists : [
                {
                    listId : 'list-0',
                    listName : '수상작 리스트',
                    movieList : [
                        {
                            movId : 'movie-0',
                            movName : '기생충',
                            movDes : '한국 영화',
                            movImg : '경로'
                        },
        
                        {
                            movId : 'movie-1',
                            movName : '오펜하이머',
                            movDes : '해외 영화',
                            movImg : '경로'
                        },

                        {
                            movId : 'movie-2',
                            movName : '가여운 것들',
                            movDes : '해외 영화',
                            movImg : '.'
                        },

                        {
                            movId : 'movie-3',
                            movName : '추락의 해부',
                            movDes : '해외 영화',
                            movImg : '.'
                        },

                    ]
                }
            ]
        },

        {
            boardId : 'board-2',
            boardName : '즐겨찾기',
            lists : [
                {
                    listId : 'list-0',
                    listName : '즐겨찾기',
                    movieList : [
                        {
                            movId : 'movie-0',
                            movName : '해리포터',
                            movDes : '해외 영화',
                            movImg : '경로'
                        },
        
                        {
                            movId : 'movie-1',
                            movName : '헝거게임',
                            movDes : '해외 영화 ',
                            movImg : '경로'
                        },

                        {
                            movId : 'movie-2',
                            movName : '하이재킹',
                            movDes : '한국 영화',
                            movImg : '.'
                        },
                    ]
                }
            ]
        },

    ],
}

const boardsSlice = createSlice({
    name : 'boards',
    initialState,
    reducers : {
        setModalActive : (state, {payload}:PayloadAction<boolean>)=>{
            state.modalActive = payload
        },
    }
})

export const {setModalActive} = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;