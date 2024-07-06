import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieList } from "../../types/index";

type TModalState = {
    boardId : string;
    listId : string;
    movieModal : IMovieList;
}

type TSetModalDataAction = {
    boardId : string;
    listId : string;
    movieModal : IMovieList;
}

const initialState : TModalState= {
    boardId: "board-0 ",
    listId: 'list-0',
    movieModal: {
        movId: 'movie-0',
        movName: '인사이드 아웃',
        movDes: '해외 영화, 디즈니-픽사에서 만들었으며, 2024년에 개봉한 영화',
        movImg: '../../assets/insideout.png',
    }
}

const modalSlice = createSlice({
    name : 'modal',
    initialState,
    reducers :{
        setModalData : (state, {payload} : PayloadAction<TSetModalDataAction>) => {
            state.boardId = payload.boardId;
            state.listId = payload.listId;
            //state.movieModal = payload.movieModal;
            //영화에 대한 상태 업데이트가 안 돼서 일단 인사이드 아웃만
        }
    }
})

export const {setModalData} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;